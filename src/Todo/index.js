import { useReducer, useRef } from "react";
import reducer, { initialState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

// useReducer có tác dụng tương tự useState, nhưng có thể quản lý trạng thái phức tạp hơn.
// useReducer nhận vào một hàm reducer và một giá trị khởi tạo.
// Hàm reducer nhận vào hai tham số: state hiện tại và action, và trả về trạng thái mới.
// Thường dùng khi cần quản lý nhiều trạng thái hoặc khi trạng thái phụ thuộc vào các trạng thái khác.
// Ví dụ: quản lý một bộ đếm đơn giản với useReducer.

// Với useState
// 1. Init state: 0
// 2. Action: Increment, Decrement, Reset

// Với useReducer
// 1. Init state: { count: 0 }
// 2. Action: { type: "increment" }, { type: "decrement" }, { type: "reset" }
// 3. Reducer: (state, action) => { switch (action.type) { case "increment": return { count: state.count + 1 }; case "decrement": return { count: state.count - 1 }; case "reset": return { count: 0 }; default: throw new Error(); } }
// 4. Dispatch: dispatch({ type: "increment" }), dispatch({ type: "decrement" }), dispatch({ type: "reset" })

function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const { job, jobs } = state;

  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob("")); // Clear the input after adding the job
    inputRef.current.focus(); // Focus back on the input field
  };

  const inputRef = useRef();

  return (
    <div style={{ padding: "20px" }}>
      <h1>TODO</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter job..."
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
