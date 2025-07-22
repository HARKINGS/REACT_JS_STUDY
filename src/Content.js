import { memo } from "react";

function Content({ onIncrease }) {
  console.log("Changed");
  return (
    <div>
      <button onClick={onIncrease}>Click me</button>
      <h2>Hello World!</h2>
    </div>
  );
}

export default memo(Content);
