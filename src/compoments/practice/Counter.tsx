import React, { useState } from "react";

interface Props {}

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = (e: any) => {
    setCounter(counter + 1);
  };

  const decrement = (e: any) => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <span className="text-danger"> Clicked {counter} Times</span>
      <button onClick={increment} className="btn btn-sm btn-primary m-2">
        +
      </button>
      <button onClick={decrement} className="btn btn-sm btn-info m-2">
        -
      </button>
    </div>
  );
}

export default Counter;
