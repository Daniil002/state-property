import { useState } from "react";
import "./App.css";
import "./index.css";
import Button from "./components/Button";
import Counter from "./components/Countner";

const text = ["Click me", "Click me please", "Hit me", "Press me"];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: "lightgreen" };
  return (
    <div className="App">
      <Counter count={count} />
      {text.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
