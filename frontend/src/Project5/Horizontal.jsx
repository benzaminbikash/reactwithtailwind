import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Horizontal() {
  const url = "https://dummyjson.com/products";
  const [product, setProduct] = useState([]);
  const elementRef = useRef();
  const api = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setProduct(result.products);
  };
  useEffect(() => {
    api();
  }, []);
  const sliderRight = (element) => {
    element.scrollLeft += 800;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
  };
  return (
    <div>
      <div className="relative flex gap-5  items-center px-20">
        <FaChevronLeft
          size={100}
          onClick={() => sliderLeft(elementRef.current)}
        />
        <div
          className="flex overflow-x-auto gap-4  scroll-smooth no-scrollbar "
          ref={elementRef}
        >
          {product.map((item) => {
            return (
              <img
                src={item.thumbnail}
                alt="/"
                className="w-[200px] h-80 object-cover "
              />
            );
          })}
        </div>
        <FaChevronRight
          size={100}
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
    </div>
  );
}

export default Horizontal;
