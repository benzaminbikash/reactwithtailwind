import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mx-auto px-20 py-5 ">
      <nav className="flex justify-between ">
        <h1>Ecommerce Cart</h1>
        <ul className="flex gap-3 ">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
