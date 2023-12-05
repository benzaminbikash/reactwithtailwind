import React from "react";
import { fruits } from "../data/fruits";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { FaShopify } from "react-icons/fa";

function FruitsVegitable() {
  return (
    <div className="container mx-auto px-20 mb-10">
      {/* title */}
      <p className="text-2xl font-bold">Fruits & Vegetables</p>
      <div className="flex flex-col lg:flex-row  justify-between mt-1">
        <p className="text-sm my-3 lg:my-0">
          Buy from fresh fruits and vegetables online the best prices
        </p>
        <div className="flex gap-5">
          <button className="bg-green-500 px-5 rounded-full py-1">
            Fruits
          </button>
          <button>Vegetables</button>
          <button>Bread and Bakery</button>
        </div>
      </div>
      {/* image */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 h-[320px] gap-3 mt-2 ">
        <img
          src="https://imgs.search.brave.com/Ng0NOtx4qtU2RPvsN9hWHkXAS9lURignSGHkQ2e_Xso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlc2huZGVsaWNp/b3VzLmNvbS5hdS9p/bWFnZXMvbWFya2V0/LWJveGVzL2ZydWl0/LW1hcmtldC1ib3hl/cy5qcGc"
          alt="/"
          className="h-full object-cover  rounded-md"
        />
        {fruits.map((item) => {
          return (
            <div className="shadow-2xl  rounded-md hover:scale-105  transition-all duration-700">
              {/* for image */}
              <div className="bg-red-500 w-[90%] h-[60%] mx-auto mt-2 ">
                <img
                  src={item.image}
                  alt="/"
                  className="h-full object-cover w-full"
                />
                <div className="mt-2">
                  {/* star */}
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <IoStarSharp color="yellow" size={15} />
                      <IoStarSharp color="yellow" size={15} />
                      <IoStarSharp color="yellow" size={15} />
                      <IoStarSharp color="yellow" size={15} />
                      <IoIosStarHalf color="yellow" size={15} />
                    </div>
                    <div className="bg-green-500 p-2 rounded-full">
                      <FaShopify />
                    </div>
                  </div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-red-500 text-sm">$10.02</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FruitsVegitable;
