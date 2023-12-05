import React from "react";
import { Link } from "react-router-dom";

function NewsLetter() {
  return (
    <div className="bg-black/10 bg-opacity-60 max-w-screen-2xl px-28 py-16">
      <p className="title">Follow Products And Discounts On Instagram</p>
      {/* image */}
      <div className="flex gap-4 flex-wrap mt-5 justify-center">
        <Link>
          <img src="/images/instagram/img1.png" alt="/" />
        </Link>
        <Link>
          <img src="/images/instagram/img2.png" alt="/" />
        </Link>
        <Link>
          <img src="/images/instagram/img3.png" alt="/" />
        </Link>
        <Link>
          <img src="/images/instagram/img4.png" alt="/" />
        </Link>
        <Link>
          <img src="/images/instagram/img5.png" alt="/" />
        </Link>
      </div>
      {/* subscribe */}
      <div>
        <h2 className="title my-4 capitalize">
          or subscribe to the Newletters
        </h2>
        <form action="" className="md:w-1/2 mx-auto text-center ">
          <input
            type="text"
            placeholder="Email Address"
            className="outline-none mb-2 bg-transparent border-b-2 border-black w-full md:w-2/3 px-2 py-2 "
          />
          <input
            type="submit"
            value="submit"
            className="bg-black text-white px-5 py-2 ml-2"
          />
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
