import { memo } from "react";

function Content({ count, count2 }) {
  console.log("Changed");
  return (
    <div>
      <h2>Hello World! {count}</h2>
      <h3>Hello Star!</h3>
    </div>
  );
}

export default memo(Content);
