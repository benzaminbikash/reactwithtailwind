import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Headline from "../components/Headline";
import FoodC from "../components/FoodC";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Headline />
      <FoodC />
    </div>
  );
}

export default Home;
