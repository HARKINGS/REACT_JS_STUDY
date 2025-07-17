import './App.css';
import { useState } from 'react';
import Content from './Content';

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div style={{ padding: 32 }} className="App">
      <button onClick={handleClick}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
