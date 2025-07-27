import { useStore, actions } from "./store";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodo(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo ..."
        onChange={(e) => {
          dispatch(actions.setTodo(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
