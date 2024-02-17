import React, { useContext } from "react";
import { CreateContext } from "./Index";

function Data() {
  const { name, setName } = useContext(CreateContext);
  const updateName = () => {
    if (name == "Zendaya") {
      setName("William");
    } else {
      setName("Zendaya");
    }
  };
  return (
    <div>
      <h1>Name {name}</h1>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default Data;
