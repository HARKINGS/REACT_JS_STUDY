import { useLayoutEffect, useEffect, useState } from "react";

// Phân biệt useEffect và useLayoutEffect:
// - useEffect: Chạy sau khi DOM đã được cập nhật, không chặn việc vẽ giao diện.
// - useLayoutEffect: Chạy ngay sau khi DOM đã được cập nhật, nhưng trước khi trình duyệt vẽ giao diện, có thể chặn việc vẽ giao diện nếu cần.

// Thứ tự các bước khi gọi useEffect:
// 1. Cập nhật lại state hoặc props.
// 2. Cập nhật lại DOM (mutated) (nếu có).
// 3. Render lại UI.
// 4. Chạy cleanup function (nếu có) nếu deps thay đổi.
// 5. Chạy callback function của useEffect sau khi DOM đã được cập nhật.

// Thứ tự các bước khi gọi useLayoutEffect:
// 1. Cập nhật lại state hoặc props.
// 2. Cập nhật lại DOM (mutated) (nếu có).
// 3. Chạy cleanup function (nếu có) nếu deps thay đổi.
// 4. Gọi useLayoutEffect callback function ngay sau khi DOM đã được cập nhật, nhưng trước khi trình duyệt vẽ giao diện.
// 5. Render lại UI.

function Content() {
  const [count, setCount] = useState(0);

  // dùng useEffect thì xuất hiện 4 trong khoảng khắc rồi mới về 0
  // useEffect(() => {
  //   if (count > 3) setCount(0);
  // }, [count]);

  // dùng useLayoutEffect thì không xuất hiện 4 trong khoảng khắc rồi mới về 0
  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Content;
