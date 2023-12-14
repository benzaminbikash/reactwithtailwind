import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cartSlice";

function Detail() {
  const location = useLocation();
  const item = location.state;
  // reduc toolkit
  const dispatch = useDispatch();
  const ADDCART = (d) => {
    dispatch(addCart({ ...d, qty: 1 }));
  };
  const state = useSelector((state) => state.cart.carts);

  return (
    <div className="container mx-auto px-20">
      {/* grid */}
      <div className="grid grid-cols-3 gap-10 ">
        {/* left */}
        <div>
          <img
            src={item.thumbnail}
            alt="/"
            className="w-full rounded-xl h-[500px] object-cover"
          />
        </div>
        {/* right */}
        <div>
          <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
          <h1 className="">{item.description}</h1>
          <div>
            <p>Price: ${item.price}</p>
            <p>Discount Percentage: {item.discountPercentage}%</p>
          </div>
          <p className="text-red-500 underline">rating: {item.rating}</p>
          {/* button */}
          <div className="space-x-4 mt-4">
            {state.find((d) => d.id === item.id) ? (
              <button
                onClick={() => ADDCART(item)}
                className="bg-red-500 p-2  rounded-3xl"
              >
                Remove Cart
              </button>
            ) : (
              <button
                onClick={() => ADDCART(item)}
                className="bg-red-500 p-2  rounded-3xl"
              >
                Add to Cart
              </button>
            )}
            <button className="bg-red-500 p-2  rounded-3xl">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
