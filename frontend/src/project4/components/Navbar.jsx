import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaC, FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="container mx-auto px-20  ">
      <div className="flex justify-between h-16 items-center">
        {/* left */}
        <h1 className="text-2xl font-semibold">Logo</h1>
        {/* middle */}
        <div className="hidden md:flex   items-center bg-slate-100 py-2 px-4 w-96 justify-between rounded-full">
          <input
            type="text"
            placeholder="search here"
            className="bg-transparent focus:outline-none text-black"
          />
          <IoSearch color="black" />
        </div>
        {/* right */}
        <div className="flex gap-2">
          <div className="border-gray-400 border-2 p-2 rounded-full">
            <FaUserAlt />
          </div>
          <div className="relative">
            <div className="border-gray-400 border-2 p-2 rounded-full">
              <FaCartShopping />
            </div>
            <div className="absolute -top-1 -right-1  flex justify-center items-center bg-red-500 w-5 h-5 rounded-full">
              <p className="text-white text-xs font-bold">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
