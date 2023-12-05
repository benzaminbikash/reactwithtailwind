import React from "react";

const companyLogo = [
  {
    id: 1,
    img: "/images/company/brand1.png",
  },
  {
    id: 2,
    img: "/images/company/brand2.png",
  },
  {
    id: 3,
    img: "/images/company/brand3.png",
  },
  {
    id: 4,
    img: "/images/company/brand4.png",
  },
  {
    id: 5,
    img: "/images/company/brand5.png",
  },
];

function Category() {
  return (
    <divd className="max-w-screen-2xl px-28 pt-10">
      {/* category title */}
      <div className="flex justify-around items-center gap-5 flex-wrap py-5">
        {companyLogo.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="/" />
          </div>
        ))}
      </div>
      {/* category grid */}
      <div className="mt-8  flex flex-col md:flex-row gap-4 items-center ">
        <p className="bg-black text-white w-fit p-2  md:p-1 text-center font-semibold md:-rotate-90  uppercase">
          Explore new and popular systems
        </p>
        <div>
          <img src="/images/category/image1.png" alt="/" />
        </div>
        {/* grid image */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/images/category/image2.png"
              alt="/"
              className="hover:scale-105 duration-300 transition"
            />
            <img
              src="/images/category/image3.png"
              alt="/"
              className="hover:scale-105 duration-300 transition"
            />
            <img
              src="/images/category/image4.png"
              alt="/"
              className="hover:scale-105 duration-300 transition"
            />
            <img
              src="/images/category/image5.png"
              alt="/"
              className="hover:scale-105 duration-300 transition"
            />
          </div>
        </div>
      </div>
    </divd>
  );
}

export default Category;
