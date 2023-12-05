import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/filter">Filter</NavLink>
    </div>
  );
}

export default Navbar;
