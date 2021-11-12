import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import HomeScooters from "../HomeScooters/HomeScooters";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner />
      <HomeScooters />
      <Features />
      <Reviews />
      <Footer></Footer>
    </>
  );
};

export default Home;
