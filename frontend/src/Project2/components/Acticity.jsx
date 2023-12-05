import React from "react";
import BookingForm from "./BookingForm";

function Acticity() {
  return (
    <div className="container mx-auto px-5 md:px-28 mb-10">
      <div className="flex flex-col md:flex-row gap-10 -mt-10">
        <div className=" md:w-1/3 h-1/5 relative hover:scale-105  transition-all duration-700">
          <img
            src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
            className="w-full h-full"
          />
          <div className="absolute top-0 flex items-center h-full w-full justify-center">
            <p className=" color-white  text-white text-1xl font-bold ">
              Resorts
            </p>
          </div>
        </div>
        <div className=" md:w-1/3 h-1/5 relative hover:scale-105  transition-all duration-700">
          <img
            src="https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg"
            alt="/"
            className="w-full h-full"
          />
          <div className="absolute top-0 flex items-center h-full w-full justify-center">
            <p className=" color-white  text-white text-1xl font-bold  ">
              Boating
            </p>
          </div>
        </div>
        <div className="  md:w-1/3 h-1/5 relative hover:scale-105  transition-all duration-700">
          <img
            src="https://images.pexels.com/photos/3793366/pexels-photo-3793366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full"
          />
          <div className="absolute top-0 flex items-center h-full w-full justify-center">
            <p className=" color-white  text-white text-1xl font-bold  ">
              Fishing
            </p>
          </div>
        </div>
      </div>
      {/* booking form */}
      <BookingForm />
    </div>
  );
}

export default Acticity;
