import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const onDecrementBtn = () => {
    console.log("on BTN DECREMENT");
    setCounterValue(counterValue - 1);
  };
  const onIncrementBtn = () => {
    console.log("on BTN INCREMENT");
    setCounterValue(counterValue + 1);
  };

  return (
    <div>
      <h1>React Counter</h1>
      <div className="counterContainer">
        <h2>{counterValue}</h2>
        <input
          type="number"
          min={1}
          value={counterValue}
          onChange={(e) => setCustomIncDecValue(parseInt(e.target.value))}
        />
        <div className="buttons">
          <button onClick={onDecrementBtn}>-</button>
          <button onClick={onIncrementBtn}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
