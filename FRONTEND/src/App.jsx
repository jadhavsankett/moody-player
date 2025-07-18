import FaceExpressionDetector from "./componets/FaceExpressionDetector"
import MoodSongs from "./componets/Songs"

const App = () => {
  return (
    <div>
      <FaceExpressionDetector/>
      <MoodSongs/>
      <h1 className="title">Mood Based Music Player</h1>
      <p className="description">Detect your mood and listen to the perfect song! Made with ❤️ by sanket</p>
    </div>
  )
}

export default App
