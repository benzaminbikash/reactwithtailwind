import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar";
import "./App.css";
import NotFound from "./page/NotFound";
import User from "./page/User";
import UserDetail from "./page/UserDetail";
import Filter from "./page/Filter";
import Hospital from "./page/FilterPage/Hospital";
import College from "./page/FilterPage/College";
import School from "./page/FilterPage/School";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/" element={<User />} />
        <Route path="/user/:name" element={<UserDetail />} />
        <Route path="/filter/" element={<Filter />}>
          <Route path="hospital" element={<Hospital />} />
          <Route path="college" element={<College />} />
          <Route path="school" element={<School />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
