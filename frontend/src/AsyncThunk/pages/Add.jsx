import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/UserApi";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (data.name != null || data.email != null || data.address != null) {
      dispatch(createUser(data));
      navigate("/");
    } else {
      alert("Add All Fields!");
    }
  };
  return (
    <div className="w-full h-full flex justify-center">
      <div>
        <h1 className="text-center">User</h1>
        <form onSubmit={handleForm} className="flex flex-col gap-3">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            className="w-[300px] outline-none p-1 rounded-md text-black"
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            className="w-[300px] outline-none p-1 rounded-md  text-black"
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            className="w-[300px] outline-none p-1 rounded-md  text-black"
          />
          <button className="bg-red-500 p-1 rounded-md">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
