import React from "react";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute text-white bg-black/40 w-full h-full max-h-[500px] flex flex-col justify-center">
          <p className="text-4xl px-10">The Best</p>
          <p className="text-4xl px-10">Food Delivered</p>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Hero;
