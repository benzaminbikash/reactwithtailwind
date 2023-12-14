import React, { memo, useState } from "react";

function Counter({ multiply }) {
  const [counter, setCounter] = useState(0);
  console.log("hey counter");
  return (
    <div>
      <h1>Multiply {multiply}</h1>
      <h1>Counter</h1>
      <h1 className="text-9xl">{counter}</h1>
      <button
        className="bg-red-500 p-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default memo(Counter);
