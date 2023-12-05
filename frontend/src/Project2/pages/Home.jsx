import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Acticity from "../components/Acticity";
import ImageGrid from "../components/ImageGrid";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Acticity />
      {/*gallery*/}
      <ImageGrid />
      <Contact />
    </div>
  );
}

export default Home;
