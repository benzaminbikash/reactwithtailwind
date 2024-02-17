import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/UserApi";

function Modal({ setShow, select }) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (select) {
      setData({
        name: select.name,
        email: select.email,
        address: select.address,
      });
    }
  }, [select]);

  const update = (e) => {
    e.preventDefault();
    setShow(false);
    dispatch(updateUser({ ...data, id: select.id }));
  };

  return (
    <div className="w-full h-full absolute top-0 flex justify-center items-center">
      <div className="bg-white w-[400px]  text-black rounded-lg  ">
        <h1 className="py-3 text-center">Update User</h1>
        <form onSubmit={update} className="flex flex-col gap-3 items-center">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={data.name}
            className="border w-[300px] outline-none p-1 rounded-md text-black"
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={data.email}
            className="border w-[300px] outline-none p-1 rounded-md text-black"
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            value={data.address}
            className="border w-[300px] outline-none p-1 rounded-md text-black"
          />
          <div className="gap-5 flex mb-10 ">
            <button className="bg-red-500 p-2 rounded-lg text-white">
              Update
            </button>
            <button
              onClick={() => setShow(false)}
              className="bg-red-500 p-2 rounded-lg text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
