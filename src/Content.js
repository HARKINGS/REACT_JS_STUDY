import { useRef, useState, useEffect } from "react";

// useRef lưu các giá trị qua 1 tham chiếu bên ngoài vòng lặp render

function Content() {
  const [count, setCount] = useState(118);

  // Khi để biến timerRef.current bên trong hàm Content, mỗi lần render lại sẽ gọi lại hàm này và tạo ra một biến mới,
  // dẫn đến việc không thể dừng timer đúng cách.
  // Khi log giá trị của timerRef.current, nó sẽ là undefined nếu để bên trong hàm Content.
  // Nếu để bên ngoài hàm Content, nó sẽ giữ giá trị qua các lần render
  // và có thể dừng timer đúng cách.
  // Vì vậy, ta để biến timerRef.current bên ngoài hàm Content.

  // với useRef, giá trị của nó khi khai báo là kiểu Object,
  // và giá trị của nó sẽ không thay đổi ngoài kiểm soát qua các lần render.
  // ref.current là giá trị thực tế mà ta muốn lưu trữ.

  const timerRef = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    // Khi component unmount, dừng timer nếu nó đang chạy
    console.log(h1Ref.current);
  });

  const handleStart = () => {
    // Sử dụng useRef để lưu trữ giá trị của setInterval
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("Timer started", timerRef.current);
  };

  const handleStop = () => {
    // Sử dụng useRef để lưu trữ giá trị của setInterval và dừng nó
    clearInterval(timerRef.current);
    console.log("Timer stopped", timerRef.current);
  };

  console.log(count, prevCount.current);

  return (
    <div>
      {/* Cách gán ref kiểu này sẽ giống với getElementById */}
      <h1 ref={h1Ref}>Count: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Content;
