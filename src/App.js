import "./App.css";
import { useState, useCallback } from "react";
import Content from "./Content";

// 1. memo() => Higher Order Component (HOC) that prevents unnecessary re-renders
// memo giúp ghi nhớ các component con, tránh việc re-render không cần thiết
// Ví dụ: nếu component cha re-render, nhưng component con không thay đổi props (dạng text cố định), thì component con sẽ không re-render.

// 2. useCallback() => Returns a memoized callback function
// useCallback giúp ghi nhớ các hàm bằng cách tạo một tham chiếu bên ngoài để lưu hàm, tránh việc tạo mới hàm mỗi lần re-render
// Ví dụ: nếu bạn truyền một hàm vào component con, và hàm đó không thay đổi, thì component con sẽ không re-render lại khi component cha re-render.

// 3. useMemo() => Returns a memoized value

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: "10px 32px" }}>
      <Content onIncrease={handleIncrease} />
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
