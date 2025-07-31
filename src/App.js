import { useRef } from "react";
import Video from "./videos/Video";
import "./App.css";

// useImperativeHandle có tác dụng tuỳ chỉnh Ref của 1 function component

function App() {
  const videoRef = useRef();
  console.log(videoRef.current);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
