import React from "react";
import scooty1 from "../../../images/scooty-2.png";

const SingleProduct = () => {
  return (
    <div className="flex space-x-6 items-center p-6">
      <img src={scooty1} className="w-4/12" alt="product" />
      <div className="text-gray-900">
        <h2 className="text-3xl font-semibold text-gray-800">
          Mini Electric Scooter
        </h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          iusto.
        </p>
        <p className="grid grid-cols-2 font-semibold">
          <span>Price</span> <span className="text-red-600">$600</span>
        </p>
        <p className="grid grid-cols-2 font-semibold">
          <span>Power</span> <span className=" ">250 W</span>
        </p>
        <p className="grid grid-cols-2 font-semibold">
          <span>Availibility</span>{" "}
          <span className="text-green-600 ">In Stock!</span>
        </p>
        <button className="px-6 py-2 mt-4 bg-red-600 text-white rounded-full">
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
