import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchData } from "./features/UserApi";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between mx-10 my-4 ">
        <h1>CreateAsyncThunk</h1>
        <div>
          <input
            type="text"
            placeholder="search"
            className="text-black"
            onChange={(e) => dispatch(searchData(e.target.value))}
          />
        </div>
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
