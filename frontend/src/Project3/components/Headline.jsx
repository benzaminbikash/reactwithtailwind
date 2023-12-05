import React from "react";

function Headline() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      <div className="rounded-lg relative">
        <div className="absolute w-full  h-full bg-black/30 ">
          <h1 className="text-white px-4 pt-4 text-xs  md:text-2xl font-semibold">
            Sun's Out, Bogo's Out
          </h1>
          <h1 className="text-white px-4 pt-1 md:text-1xl text-xs ">
            Through 8/26
          </h1>
          <button className="bg-white mx-4 md:mt-4 px-2 rounded-3xl font-semibold  text-xs md:text-[15px] md:py-2 ">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="rounded-lg max-h-[160px] md:max-h-[200px] object-cover w-full"
        />
      </div>
      <div className="rounded-lg relative">
        <div className="absolute w-full  h-full bg-black/30 ">
          <h1 className="text-white px-4 pt-4 text-xs  md:text-2xl font-semibold">
            Sun's Out, Bogo's Out
          </h1>
          <h1 className="text-white px-4 pt-1 md:text-1xl text-xs ">
            Through 8/26
          </h1>
          <button className="bg-white mx-4 md:mt-4 px-2 rounded-3xl font-semibold  text-xs md:text-[15px] md:py-2 ">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="rounded-lg max-h-[160px] md:max-h-[200px] object-cover w-full"
        />
      </div>
      <div className="rounded-lg relative">
        <div className="absolute w-full  h-full bg-black/30 ">
          <h1 className="text-white px-4 pt-4 text-xs  md:text-2xl font-semibold">
            Sun's Out, Bogo's Out
          </h1>
          <h1 className="text-white px-4 pt-1 md:text-1xl text-xs ">
            Through 8/26
          </h1>
          <button className="bg-white mx-4 md:mt-4 px-2 rounded-3xl font-semibold  text-xs md:text-[15px] md:py-2 ">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="rounded-lg max-h-[160px] md:max-h-[200px] object-cover w-full"
        />
      </div>
    </div>
  );
}

export default Headline;
