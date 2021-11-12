import React from "react";

const Features = () => {
  return (
    <section className="py-8 mb-12">
      <h1 className="text-center text-6xl text-gray-600 font-semibold mb-6 sm:mb-20">
        Smart <span className="text-red-600">Features</span>
      </h1>
      <div className="text-center w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mb-10">
        <div>
          <p>
            <span className="text-6xl font-bold text-gray-800">25</span>
            <span className="text-2xl font-bold text-gray-700">km/h</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Speed</p>
        </div>
        <div>
          <p>
            <span className="text-6xl font-bold text-gray-800">16</span>
            <span className="text-2xl font-bold text-gray-700">km</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Charge</p>
        </div>
        <div>
          <p>
            <span className="text-6xl font-bold text-gray-800">5.6</span>
            <span className="text-2xl font-bold text-gray-700">in</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Tyre Size</p>
        </div>
        <div>
          <p>
            <span className="text-6xl font-bold text-gray-800">30</span>
            <span className="text-2xl font-bold text-gray-700">deg</span>
          </p>
          <p className="text-4xl font-bold text-gray-500">Climbing</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
