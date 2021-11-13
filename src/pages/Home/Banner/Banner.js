import React from "react";
import { useHistory } from "react-router";
import banner from "../../../images/banner-removebg-preview.png";
import SectionDivider from "../../SharedComponents/SectionDivider/SectionDivider";

const Banner = () => {
  const history = useHistory();
  const shopNow = () => {
    history.push("/scooters");
  };
  return (
    <section className="relative bg-red-600 bg-gradient-to-b from-red-600 to-red-500 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left py-12 sm:py-0 sm:items-center">
        {/* banner left */}
        <div className="px-4 sm:px-16 space-y-4">
          <h1 className=" text-4xl sm:text-7xl font-semibold text-white">
            Best Scooty!
          </h1>
          <p className="text-lg text-gray-100 w-60 mx-auto sm:mx-0">
            Powerful,Economical & stylish scoty is waiting for you
          </p>
          <button
            onClick={shopNow}
            className="bg-white text-red-600 font-lg font-bold p-2 w-32 rounded-full"
          >
            Shop Now
          </button>
        </div>
        {/* banner image right */}
        <div className="flex justify-center items-center">
          <img src={banner} alt="Banner" />
        </div>
      </div>
      {/* angle divider */}
      <SectionDivider transform={180} />
    </section>
  );
};

export default Banner;
