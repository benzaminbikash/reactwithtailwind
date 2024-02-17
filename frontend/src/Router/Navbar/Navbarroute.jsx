import React from "react";
import { NavLink } from "react-router-dom";

function Navbarroute() {
  return (
    <div className="flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/user/reshma">User</NavLink>
    </div>
  );
}

export default Navbarroute;
