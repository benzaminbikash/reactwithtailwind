import React, { useCallback, useMemo, useState } from "react";
import Counter from "./Counter";

function Index() {
  const [age, setAge] = useState(100);
  const [data, setData]=useState(12)

 const handleData=useCallback(()=>{
  setData(data*10)
 }, [data])

  return (
    <div className="flex flex-col items-center">
      <div>React Optimization</div>
      <h1 className="mt-10">Name:</h1>
      <h1 className="text-1xl">{age}</h1>
      <button className="bg-red-500 p-2" onClick={() => setAge(age + 10)}>
        Change Age
      </button>

      {/* */}
      <h1 className='mt-10'>Counter:</h1>
      <Counter  data={data} handleData={handleData} />
    </div>
  );
}

export default Index;
