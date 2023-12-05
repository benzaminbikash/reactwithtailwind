import React from "react";

function Collection() {
  return (
    <div
      data-aos="zoom-out-down"
      data-aos-duration="3000"
      className="bg-[url('/images/collection-bg.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className="h-[500px] flex items-center">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <img src="/images/zara-logo.png" alt="/" />
          <p className="text-white capitalize text-lg my-5 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            pariatur excepturi doloribus sit, saepe itaque blanditiis esse alias
            a optio ducimus eaque fuga accusamus voluptate autem, cum
            accusantium magni ipsa.
          </p>
          <button className="bg-white text-black px-2 py-1 font-semibold">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
