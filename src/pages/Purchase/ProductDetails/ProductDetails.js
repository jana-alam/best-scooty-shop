import React from "react";
import scooty1 from "../../../images/scooty-2.png";

const ProductDetails = () => {
  return (
    <div className="relative flex flex-col space-x-6 items-center m-4">
      <img src={scooty1} className="w-4/12 relative" alt="product" />
      <div className="text-gray-900 mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Mini Electric Scooter
          <span className="text-gray-600 text-2xl ml-4">250w</span>
        </h2>
        <p className="grid grid-cols-2 font-semibold mb-4">
          <span className="text-red-600 text-4xl">$600</span>
        </p>
        <p className="font-semibold text-green-600 p-2 rounded-full absolute border-2 border-green-600 top-6">
          In Stock!
        </p>
        <p className="text-gray-600 mb-2 text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          iusto.
        </p>
        <p className="text-gray-500 mb-2 text-lg text-justify leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          excepturi dignissimos eligendi dolorem, corrupti sequi debitis
          architecto ratione nostrum illo accusantium atque odio consequatur
          corporis beatae quos culpa earum quod! excepturi dignissimos eligendi
          dolorem, corrupti sequi debitis architecto ratione nostrum illo
          accusantium atque odio consequatur corporis beatae quos culpa earum
          quod!
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
