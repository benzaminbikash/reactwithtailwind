import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Product from "../components/Product";
import Collection from "../components/Collection";
import BestSeller from "../components/BestSeller";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    AOS.init();
  }, []);
  return (
    <>
      <Banner />
      <Category />
      <Product />
      <Collection />
      <BestSeller />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
