import React from "react";
import banner from "/images/banner.png";
import { FaBagShopping } from "react-icons/fa6";

function Banner() {
  return (
    <div className="bg-gray-100 lg:px-28 px-10 pt-10 ">
      <div className="md:flex items-center gap-10">
        {/* left */}
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="md:w-1/2  order-last md:order-none"
        >
          <h2 className="text-4xl font-semibold">Collections</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos
            impedit quia incidunt aliquam molestias? Reprehenderit nam quod
            molestias eum.
          </p>
          <button className=" shadow-xl bg-black text-white px-4 py-2 rounded-full flex gap-2 items-center">
            <FaBagShopping className="" />
            Shop Now
          </button>
        </div>
        {/* right */}
        <div className="md:w-1/2" data-aos="zoom-in" data-aos-duration="3000">
          <img src={banner} alt="/" className="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
