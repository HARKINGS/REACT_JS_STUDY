import "./App.css";
import { useState } from "react";
import Content from "./Content";

// 1. memo() => Higher Order Component (HOC) that prevents unnecessary re-renders
// memo giúp ghi nhớ các component con, tránh việc re-render không cần thiết
// Ví dụ: nếu component cha re-render, nhưng component con không thay đổi props (dạng text cố định), thì component con sẽ không re-render.

// 2. useCallback() => Returns a memoized callback function
// 3. useMemo() => Returns a memoized value

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const increase2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ padding: "10px 32px" }}>
      <Content count={count} count2={count2} />
      <h1>
        {count} : {count2}
      </h1>
      <button onClick={increase}>Increase 1</button>
      <button onClick={increase2}>Increase 2</button>
    </div>
  );
}

export default App;
