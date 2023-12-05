import React from "react";

function Hero() {
  return (
    <div className=" w-full h-[70vh]">
      <img
        src="https://images.pexels.com/photos/1488329/pexels-photo-1488329.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="">
        <div className="absolute  top-[30%] lg:top-[35%]  left-[5%] lg:left-[20%]">
          <p className="font-bold text-2xl md:text-3xl text-white">
            Find your special trip <br /> with
            <span className="italic"> weekaway</span>
          </p>
          <p className="w-full md:w-[50%] text-white mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            perspiciatis facilis excepturi debitis dignissimos earum? Inventore
            aspernatur id quis, nostrum nesciunt eos sapiente ratione debitis
            culpa quam, nam, ducimus nobis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
