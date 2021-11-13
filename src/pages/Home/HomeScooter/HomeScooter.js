import React from "react";
import { useHistory } from "react-router";

const HomeScooter = ({ scooter }) => {
  const { productName, shortDescription, price, power, stock, imageUrl } =
    scooter;
  const history = useHistory();
  const handleBuyNow = () => {
    history.push("/purchase");
  };
  return (
    <div className="flex flex-col lg:flex-row space-y-6 space-x-6 items-center p-6">
      <img src={imageUrl} className="w-4/12" alt="scooter" />
      <div className="text-gray-900">
        <h2 className="text-2xl font-semibold text-gray-800 leading-6 h-12">
          {productName}
        </h2>
        <p className="text-gray-600 my-4 h-20">{shortDescription}</p>
        <p className="grid grid-cols-2 font-semibold">
          <span>Price</span> <span className="text-red-600">$ {price}</span>
        </p>
        <p className="grid grid-cols-2 font-semibold">
          <span>Power</span> <span className=" ">{power} W</span>
        </p>
        <p className="grid grid-cols-2 font-semibold">
          <span>Availibility</span>{" "}
          <span className="text-green-600 ">{stock}!</span>
        </p>
        <button
          onClick={handleBuyNow}
          className="px-6 py-2 mt-8 bg-red-600 text-white rounded-full"
        >
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default HomeScooter;
