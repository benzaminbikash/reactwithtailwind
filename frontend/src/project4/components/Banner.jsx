import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Banner() {
  return (
    <div className="container mx-auto px-20">
      <div className="lg:flex gap-5 ">
        {/* left */}
        <div className="lg:w-[75%]  mb-4 lg:mb-0 relative">
          <img
            src="https://www.healthifyme.com/blog/wp-content/uploads/2023/01/shutterstock_2222605563-1.jpg"
            alt="/"
            className="w-full md:h-[500px] rounded-lg "
          />
          {/* info  */}
          <div className="mx-20 absolute top-0 flex flex-col justify-center h-full md:h-[500px] ">
            <h1 className="text-white font-bold">100% Original Dry Fruits</h1>
            <p className="font-bold text-white text-3xl">
              Dried Fruits Best <br /> <span>Healthy</span>
            </p>
            <p className="text-white pt-4">Starting At</p>
            <p className="text-red-500 font-extrabold">$15.36</p>
            <button className="text-white text-sm mt-3 bg-green-500 flex items-center gap-2 px-2 py-1 w-fit rounded-full">
              Shop Now <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col justify-between  lg:w-[25%] ">
          {/* first image */}
          <div className="h-[49%] relative hover:scale-105 transition-all duration-1000">
            <img
              src="https://imgs.search.brave.com/7HI2fLkt9yc3vCvIkZmsNlM2QsnKFVpeAZ-rBSKkF9o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA1/NjYzMzMwL3Bob3Rv/L3BpenphLXRpbWUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXdncDJJRW9DYl9a/WlhnYnJRNWtwdFV4/QV8wYUJRWjQ3X3V0/M0tOMHluSEE9"
              alt="/"
              className="object-cover w-full h-full  rounded-lg mb-4 lg:mb-0"
            />
            <div className="absolute top-0 flex flex-col justify-center h-full  px-10 ">
              <p className=" text-1xl font-bold text-white">Best Yummy Pizza</p>
              <p className=" pt-2 text-white">Starting At</p>
              <p className="text-red-500 font-extrabold">$15.36</p>
              <button className="text-white text-sm mt-3 bg-green-500 flex items-center gap-2 px-2 py-1 w-fit rounded-full  ">
                Shop Now <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          {/* second image */}
          <div className="h-[49%] relative hover:scale-105 transition-all duration-1000">
            <img
              src="https://stripedspatula.com/wp-content/uploads/2015/01/flour-tortilla-chips-e1441677554471-480x270.jpg"
              alt="/"
              className="object-cover w-full  h-full  rounded-lg grayscale-0 "
            />
            <div className="absolute top-0 flex flex-col justify-center h-full  px-10 ">
              <p className=" text-1xl font-bold text-white">Best Yummy Chip</p>
              <p className=" pt-2 text-white">Starting At</p>
              <p className="text-red-500 font-extrabold">$15.36</p>
              <button className="text-white text-sm mt-3 bg-green-500 flex items-center gap-2 px-2 py-1 w-fit rounded-full ">
                Shop Now <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
