import React, { useState } from "react";
import { data } from "../data/data";

function FoodC() {
  const [food, setFood] = useState(data);
  const [originaldata, setOriginal] = useState(data);
  const [activefilter, setActiveFilter] = useState(0);
  const filterType = (category) => {
    setFood(
      originaldata.filter((item) => {
        return item.category === category;
      })
    );
  };
  const filterPrice = (price) => {
    const data = originaldata.filter((item) => item.price === price);
    setFood(data);
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-500 md:text-4xl font-bold text-center text-2xl ">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter on category */}
        <div>
          <p className="font-bold text-lg">Filter Types</p>
          <div className="space-x-3">
            <button
              onClick={() => {
                setFood(data);
                setActiveFilter(0);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 0 ? "bg-orange-500 text-white" : null
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                filterType("burger");
                setActiveFilter(1);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 1 ? "bg-orange-500 text-white" : null
              }`}
            >
              Burgers
            </button>
            <button
              onClick={() => {
                filterType("pizza");
                setActiveFilter(2);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 2 ? "bg-orange-500 text-white" : null
              }`}
            >
              Pizza
            </button>
            <button
              onClick={() => {
                filterType("salad");
                setActiveFilter(3);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 3 ? "bg-orange-500 text-white" : null
              }`}
            >
              Salads
            </button>
            <button
              onClick={() => {
                filterType("chicken");
                setActiveFilter(4);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 4 ? "bg-orange-500 text-white" : null
              }`}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter on price */}
        <div>
          <p className="font-bold text-lg">Filter Price</p>
          <div className="space-x-3">
            <button
              onClick={() => {
                filterPrice("$");
                setActiveFilter(5);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 5 ? "bg-orange-500 text-white" : null
              }`}
            >
              $
            </button>
            <button
              onClick={() => {
                filterPrice("$$");
                setActiveFilter(6);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 6 ? "bg-orange-500 text-white" : null
              }`}
            >
              $$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$");
                setActiveFilter(7);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 7 ? "bg-orange-500 text-white" : null
              }`}
            >
              $$$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$$");
                setActiveFilter(8);
              }}
              className={` border border-orange-500 w-16 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white ${
                activefilter == 8 ? "bg-orange-500 text-white" : null
              }`}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* foods */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 pt-4 ">
        {food.map((item) => (
          <div className="transition duration-400 shadow-lg rounded-lg hover:scale-105">
            <img
              className="w-full rounded-t-lg h-[200px] object-cover"
              src={item.image}
              alt="/"
            />
            <div className="px-4 py-3 flex justify-between items-center">
              <p>{item.name}</p>
              <p className="bg-orange-500 px-5 rounded-full text-white">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodC;
