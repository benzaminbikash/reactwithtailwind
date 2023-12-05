import React from "react";

function News() {
  return (
    <div className="container mx-auto px-20">
      <p className="text-2xl font-bold my-1">Latest News</p>
      <p className="text-sm">
        Present posts in a best way to highlight intersting moments of your
        blog.
      </p>
      {/* images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-4">
        <div>
          <img
            src="https://imgs.search.brave.com/xr2TyR3HP6tWn3bHlyCN7QTA_WSLLs9kFPBe9_l6Oso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/Mzc2Mzc1L3Bob3Rv/L2ZydWl0LWp1aWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ESHBvdDBhNjdv/Ti04bFNXMENNSTdZ/NHZMTS1UbE1CQnFB/N2M1a0Nmck5vPQ"
            alt="/"
            className="h-[200px] w-full rounded-md"
          />
          <div className="my-1">
            <h1 className="text-green-400 ">Aug 27, 2023/ 8 Comments</h1>
            <p className="text-sm">Healthy Food Healthy Life</p>
          </div>
        </div>
        <div>
          <img
            src="https://imgs.search.brave.com/6w-X631eDDK3t4TwKnXe-_FblxJ-nXFRiInBOK63EwU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYmxvZy5n/YXJkZW51aXR5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wMi90dW1ibHJf/aW5saW5lX3AzdW02/Z1hkN2ExczV0dDli/XzU0MC0xLmpwZz93/PTg3MCZzc2w9MQ"
            alt="/"
            className="h-[200px] w-full rounded-md"
          />
          <div className="my-1">
            <h1 className="text-green-400 ">Aug 27, 2023/ 8 Comments</h1>
            <p className="text-sm">Healthy Food Healthy Life</p>
          </div>
        </div>
        <div>
          <img
            src="https://imgs.search.brave.com/xr2TyR3HP6tWn3bHlyCN7QTA_WSLLs9kFPBe9_l6Oso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/Mzc2Mzc1L3Bob3Rv/L2ZydWl0LWp1aWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ESHBvdDBhNjdv/Ti04bFNXMENNSTdZ/NHZMTS1UbE1CQnFB/N2M1a0Nmck5vPQ"
            alt="/"
            className="h-[200px] w-full rounded-md"
          />
          <div className="my-1">
            <h1 className="text-green-400 ">Aug 27, 2023/ 8 Comments</h1>
            <p className="text-sm">Healthy Food Healthy Life</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
