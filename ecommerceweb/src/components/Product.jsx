import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "./Cards";
import { data } from "../data/data";

function Product() {
  const [product, setProduct] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [select, setSelect] = useState(0);
  const filterCategory = (d) => {
    if (d === "All") {
      setProduct(data);
    } else {
      setProduct(filterData.filter((item) => item.category === d));
    }
  };
  const hanldeSort = (d) => {
    let sortedData;
    switch (d) {
      case "default":
        sortedData = data;
        break;
      case "A-Z":
        sortedData = [...product].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "Z-A":
        sortedData = [...product].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "low-high":
        sortedData = [...product].sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedData = [...product].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProduct(sortedData);
  };

  return (
    <div className="max-w-screen-2xl px-28 py-16">
      <p className="title">Or Subscribe to The Newletters</p>
      {/* title */}
      <div className="flex justify-between items-center  mt-5">
        {/* left */}
        <div className="space-x-4">
          <button
            className={`${select === 0 ? "text-red-500 underline" : ""}`}
            onClick={() => {
              filterCategory("All");
              setSelect(0);
            }}
          >
            All Products
          </button>
          <button
            className={`${select === 1 ? "text-red-500 underline" : ""}`}
            onClick={() => {
              filterCategory("Dress");
              setSelect(1);
            }}
          >
            Clothing
          </button>
          <button
            className={`${select === 2 ? "text-red-500 underline" : ""}`}
            onClick={() => {
              filterCategory("Hoodies");
              setSelect(2);
            }}
          >
            Hoodies
          </button>
          <button
            className={`${select === 3 ? "text-red-500 underline" : ""}`}
            onClick={() => {
              filterCategory("Bag");
              setSelect(3);
            }}
          >
            Bag
          </button>
        </div>
        {/* right */}
        <div className="bg-black px-2 py-1 flex items-center gap-2 rounded-md ">
          <div>
            <FaFilter color="white" size={14} />
          </div>
          <select
            id="bikash"
            onChange={(e) => hanldeSort(e.target.value)}
            className=" bg-black text-white text-sm border-collapse border-black"
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>
      {/* product display */}
      <Cards product={product} />
    </div>
  );
}

export default Product;
