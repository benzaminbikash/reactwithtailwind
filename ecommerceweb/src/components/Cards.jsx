import React from "react";
import { Link } from "react-router-dom";
function Cards({ product }) {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 "
    >
      {product.map((item, index) => (
        <div key={index} className="shadow-sm shadow-gray-400 overflow-hidden">
          <Link to={`/shop/${item.id}`} state={item}>
            <img
              src={item.image}
              alt="/"
              className="hover:scale-90  transition duration-500"
            />
          </Link>
          <div className="px-2 py-2">
            <p>{item.title}</p>
            <div className="flex justify-between items-center">
              <p> {item.category}</p>
              <p> {item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
