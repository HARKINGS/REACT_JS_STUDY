import video1 from "./Video1.mp4";
import { useImperativeHandle, forwardRef, useRef } from "react";
/// 1 function component mặc định không có ref
/// file video 1 thì cần tải một file video vào rôi đặt tên nhé
function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },

    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video1} width={500} />;
}

export default forwardRef(Video);
