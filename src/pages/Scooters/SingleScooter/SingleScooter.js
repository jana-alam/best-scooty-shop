import React from "react";
import { useHistory } from "react-router";
// import scooty1 from "../../../images/scooty-2.png";
import scooty1 from "../../../images/scooty-1.jpg";

const SingleScooter = ({ scooter }) => {
  const { _id, productName, shortDescription, price, power, stock, imageUrl } =
    scooter;
  const history = useHistory();
  const handleBuyNow = (id) => {
    history.push(`/purchase/${id}`);
  };
  return (
    <div className="flex flex-col sm:space-x-6 space-y-6 sm:space-y-2 items-center p-2 sm:p-4 bg-white">
      <img src={imageUrl} className="w-48" alt="product" />
      <div className="text-gray-900 mt-4">
        <h2 className=" text-xl sm:text-2xl font-semibold text-gray-800 h-16">
          {productName}
        </h2>
        <p className="text-gray-600 mb-4 h-20">{shortDescription}</p>
        <div>
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
        </div>

        <button
          onClick={() => handleBuyNow(_id)}
          className="px-6 py-2 mt-8 bg-red-600 text-white rounded-full"
        >
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default SingleScooter;
