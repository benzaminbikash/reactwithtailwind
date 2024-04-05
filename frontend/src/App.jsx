import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./AsyncThunk/Navbar";
import Add from "./AsyncThunk/pages/Add";
import Home from "./animation/pages/Home";
import ScrollA from "./Project8_scroll/Page/ScrollA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScrollA />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
