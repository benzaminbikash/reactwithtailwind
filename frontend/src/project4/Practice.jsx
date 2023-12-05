import React from "react";

function Practice() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="bg-green-500 row-span-3">01</div>
      <div className="bg-blue-500 ">02</div>
      <div className="bg-red-500 row-span-2">03</div>
    </div>
  );
}

export default Practice;
