import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [api, setApi] = useState([]);
  const fetchApi = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    setApi(result.products);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="mx-auto container px-20">
      <h1>All Products</h1>
      <div className="grid grid-cols-4 gap-5 my-4">
        {api.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:scale-105 ease-in duration-500 flex flex-col items-center bg-white h-[360px] rounded-md shadow-lg shadow-red-200"
            >
              <img
                src={item.thumbnail}
                alt="/"
                className="h-[70%] w-[100%] object-cover object-left-bottom rounded-t-md "
              />
              <h1 className="text-black py-1 text-1xl font-bold ">
                {item.title}
              </h1>

              <Link
                to={`detail/${item.title}`}
                state={item}
                className="text-white font-semibold bg-red-500 p-2 text-sm w-[70%] text-center rounded-full"
              >
                Add to Cart
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
