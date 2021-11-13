import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import AllScooter from "../AllScooter/AllScooter";
import ScootersBanner from "../ScootersBanner/ScootersBanner";

const Scooters = () => {
  return (
    <>
      <Header></Header>
      <ScootersBanner></ScootersBanner>
      <AllScooter></AllScooter>
      <Footer></Footer>
    </>
  );
};

export default Scooters;
