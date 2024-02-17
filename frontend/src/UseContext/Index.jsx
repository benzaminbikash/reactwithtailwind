import React, { createContext, useState } from "react";

export const CreateContext = createContext();

function Index({ children }) {
  const [name, setName] = useState("Zendaya");
  const [age, setAge] = useState(1);
  return (
    <CreateContext.Provider value={{ name, age, setName }}>
      {children}
    </CreateContext.Provider>
  );
}

export default Index;
