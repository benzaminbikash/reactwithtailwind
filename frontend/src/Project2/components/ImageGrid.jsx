import React from "react";

function ImageGrid() {
  return (
    <div className="container mx-auto lg:px-28 px-5 mb-4 ">
      <h1 className="mb-4 font-bold text-1xl">Gallery</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5  gap-1  ">
        <div className="col-span-2 sm:col-span-3 row-span-2 hover:scale-95 duration-500 transition-all">
          <img
            src="https://images.pexels.com/photos/1143926/pexels-photo-1143926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hover:scale-95 duration-500 transition-all">
          <img
            src="https://images.pexels.com/photos/13745253/pexels-photo-13745253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hover:scale-95 duration-500 transition-all">
          <img
            src="https://images.pexels.com/photos/6871170/pexels-photo-6871170.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hover:scale-95 duration-500 transition-all">
          <img
            src="https://images.pexels.com/photos/19149230/pexels-photo-19149230/free-photo-of-person-on-boat-among-fog-over-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="hover:scale-95 duration-500 transition-all">
          <img
            src="https://images.pexels.com/photos/11021969/pexels-photo-11021969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
