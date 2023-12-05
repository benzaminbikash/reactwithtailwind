import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function TopBar() {
  return (
    <div className="px-5 flex justify-between my-2">
      {/* left */}
      <div className="flex items-center gap-3">
        <AiFillMessage color="gray" />
        <p className="text-1xl font-bold uppercase ">Weekaway</p>
      </div>
      {/* right */}
      <div className="flex  gap-5">
        {/* time */}
        <div className="hidden md:flex items-center gap-2">
          <MdAccessTime />
          <p>9AM to 6PM</p>
        </div>
        {/* number */}
        <div className="hidden md:flex items-center gap-2">
          <FaPhoneAlt />
          <p>+977 9830231245</p>
        </div>
        <div class="bg-gradient-to-r from-indigo-500  to-green-500 p-1 text-white">
          <button>Get A Free Quote</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
