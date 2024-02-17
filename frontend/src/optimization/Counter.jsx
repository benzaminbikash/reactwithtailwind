import React, { memo, useState } from "react";

function Counter({data, handleData}) {
  const [counter, setCounter] = useState(0);
  
  console.log('counter page')
  return (
    <div>
      <h1>Table of {data}</h1>
      <h1 className="text-9xl">{counter}</h1>
      <button
        className="bg-red-500 p-2"
        onClick={() => handleData( )}
      >
        Multiple
      </button>
    </div>
  );
}

export default memo(Counter);
