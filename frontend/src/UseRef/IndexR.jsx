import React, { useEffect, useRef, useState } from "react";
import UserR from "./UserR";

function IndexR() {
    let element=useRef(null)

  const handleInput = () => {
    element.current.value=100
  };
  return (
    <>
  <UserR ref={element}/>
      <button onClick={handleInput}>Submit</button>
    </>
  );
}

export default IndexR;
