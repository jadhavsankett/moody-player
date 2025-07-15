import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

const FaceExpressionDetector = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    loadModels().then(startVideo);
  }, []);

  // Start webcam
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });
  };

  // Detect face and expressions
  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (
        videoRef.current &&
        faceapi.nets.tinyFaceDetector.params &&
        faceapi.nets.faceExpressionNet.params
      ) {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();

        const canvas = canvasRef.current;
        if (canvas && videoRef.current) {
          const dims = faceapi.matchDimensions(canvas, videoRef.current, true);
          const resizedDetections = faceapi.resizeResults(detections, dims);
          canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="720"
        height="560"
        style={{ position: "absolute" }}
      />
      <canvas
        ref={canvasRef}
        width="720"
        height="560"
        style={{ position: "absolute" }}
      />
    </div>
  );
};

export default FaceExpressionDetector;
