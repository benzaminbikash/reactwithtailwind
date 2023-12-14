import React from "react";
import "./index.css";
import Home from "./Project7/page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Project7/components/Navbar";
import Detail from "./Project7/page/Detail";
import Cart from "./Project7/page/Cart";
import Pure from "./practice/PureComponent/Pure";
import Index from "./optimization/Index";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/detail/:id" element={<Detail />} />
        <Route path="cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
