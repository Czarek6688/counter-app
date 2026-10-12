import { useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import Display from "./components/Display";
import "./Counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
    </div>
  );
};

export default Counter;
