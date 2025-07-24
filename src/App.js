import "./App.css";
import { useReducer, useRef } from "react";

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

// 1. initial state
const initialState = {
  job: "",
  jobs: [],
};

// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

// Có thể hiểu là tạo hàm để có thể dispatch 1 object action
const setJob = (payload) => {
  return { type: SET_JOB, payload };
};

const addJob = (payload) => {
  return { type: ADD_JOB, payload };
};

const deleteJob = (payload) => {
  return { type: DELETE_JOB, payload };
};

// 3. Reducer function
function reducer(state, action) {
  console.log("Prev state:", state);
  console.log("Prev action:", action);

  let newState = { ...state };

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1); // Remove the job at the specified index

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }

  return newState;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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

export default App;
