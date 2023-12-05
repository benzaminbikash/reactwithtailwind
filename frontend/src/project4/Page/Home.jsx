import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FruitsVegitable from "../components/FruitsVegitable";
import News from "../components/News";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <FruitsVegitable />
      <News />
    </div>
  );
}

export default Home;
