import React from "react";
import { useHistory } from "react-router";
// import scooty1 from "../../../images/scooty-2.png";
import scooty1 from "../../../images/scooty-1.jpg";

const SingleScooter = () => {
  const history = useHistory();
  const handleBuyNow = () => {
    history.push("/purchase");
  };
  return (
    <div className="flex flex-col space-x-6 items-center p-4 bg-white">
      <img src={scooty1} className="w-48" alt="product" />
      <div className="text-gray-900 mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">
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
        <button
          onClick={handleBuyNow}
          className="px-6 py-2 mt-4 bg-red-600 text-white rounded-full"
        >
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default SingleScooter;
