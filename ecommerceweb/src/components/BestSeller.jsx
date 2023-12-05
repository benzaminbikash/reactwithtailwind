import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { data } from "../data/data";
function BestSeller() {
  const [product, setProduct] = useState(data);
  const bestProduct = product.filter((item) => item.status === "Best Selers");
  console.log(bestProduct);
  return (
    <div className="max-w-screen-2xl px-28 py-14">
      {/* text */}
      <div className="text-center">
        <p className="title mb-2">Best Sellers</p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia
          dolor modi ut labore, reprehenderit hic iure recusandae nulla ipsa
          consequatur. Consectetur dignissimos corporis ratione facilis?
        </p>
      </div>
      {/* slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          type: "bullets",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {bestProduct.map((item) => (
          <SwiperSlide>
            <img
              src={item.image}
              alt="/"
              className="mx-auto mt-4 hover:scale-95 duration-700  transition-all "
            />
            <div className="px-4">
              <p className="mt-4 font-bold ">{item.title}</p>
              <div className="flex justify-between">
                <p>{item.category}</p>
                <p>${item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSeller;
