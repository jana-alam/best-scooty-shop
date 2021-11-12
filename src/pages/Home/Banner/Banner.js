import React from "react";
import "./Banner.css";
import banner from "../../../images/banner-removebg-preview.png";

const Banner = () => {
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
          <button className="bg-white text-red-600 font-lg font-bold p-2 w-32 rounded-full">
            Shop Now
          </button>
        </div>
        {/* banner image right */}
        <div className="flex justify-center items-center">
          <img src={banner} alt="Banner" />
        </div>
      </div>
      {/* angle divider */}
      <div class="custom-shape-divider-bottom-1636688281 hidden sm:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
