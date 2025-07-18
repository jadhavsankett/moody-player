import { useState } from "react";
import './Songs.css';

const MoodSongs = () => {

    const [songs, setSongs] = useState([
        {
        title: "Happy Song", 
        artist: "Artist 1", 
        url: "test-url-1"
       },

       {
        title: "Sad Song",
        artist: "Artist 2",
        url: "test-url-2"
         },

       {
        title: "Angry Song",
        artist: "Artist 3",
        url: "test-url-3"   
         }
    ]);

  return (
   <div className="mood-songs">
        <h2>Mood Songs</h2>
    
            {songs.map((song, index) => (
                <div className="song" key={index}>
                    <div className="title">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                    <div className="play-pause-btn">
                        <i className="ri-pause-line"></i>
                        <i className="ri-play-large-line"></i>
                    </div>
                </div>
            ))}
      
    </div>
  );
}

export default MoodSongs
