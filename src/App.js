import Content from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  );
}

export default App;
