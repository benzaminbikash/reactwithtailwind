import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./AsyncThunk/Navbar";
import Add from "./AsyncThunk/pages/Add";
import ScrollA from "./Project8_scroll/Page/ScrollA";
import Portfolio from "./Project1/Portfolio";
import Home from "./animation/pages/Home";
// import Home from "./project4/Page/Home";
// import Home from "./Project3/pages/Home";
// import Home from "./Project2/pages/Home";

function App() {
  return (
    // for Project 1:
    // <Portfolio />

    // for project 2:
    // <Home />

    // for project 3:
    // <Home />

    // for Project 4:
    // <Home />

    // animation
    <Home />

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<ScrollA />} />
    //     <Route path="/add" element={<Add />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
