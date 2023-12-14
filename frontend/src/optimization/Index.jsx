import React, { useCallback, useMemo, useState } from "react";
import Counter from "./Counter";

function Index() {
  const [age, setAge] = useState(100);

  const multiply = useCallback(function () {
    // console.log("multiply");
    //   return age * 2;
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div>React Optimization</div>
      <Counter multiply={multiply} />
      <h1 className="mt-10">Name:</h1>
      <h1 className="text-1xl">{age}</h1>
      <button className="bg-red-500 p-2" onClick={() => setAge(age + 10)}>
        Change Age
      </button>
    </div>
  );
}

export default Index;
