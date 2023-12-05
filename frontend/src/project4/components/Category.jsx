import React from "react";
import { category } from "../data/category";

function Category() {
  return (
    <div className="container mx-auto px-20 my-10">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
        {category.map((item, index) => {
          return (
            <div className="shadow-md shadow-black p-2 flex justify-between items-center rounded-md ">
              <div>
                <p>{item.name}</p>
                <p>{item.item}</p>
              </div>
              {/* image */}
              <img
                src={item.image}
                alt="/"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
