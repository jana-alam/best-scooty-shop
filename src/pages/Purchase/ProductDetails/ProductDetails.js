import React from "react";
import Spinner from "../../SharedComponents/Spinner/Spinner";

const ProductDetails = ({ productDetail }) => {
  const {
    productName,
    shortDescription,
    productDetails,
    price,
    power,
    stock,
    imageUrl,
  } = productDetail;
  if (!imageUrl) {
    return <Spinner />;
  }
  return (
    <div className="relative flex flex-col sm:space-x-6 items-center m-4">
      <img src={imageUrl} className="w-4/12 relative" alt="product" />
      <div className="text-gray-900 mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {productName}
          <span className="text-gray-600 text-2xl ml-4">{power} w</span>
        </h2>
        <p className="grid grid-cols-2 font-semibold mb-4">
          <span className="text-red-600 text-4xl">$ {price}</span>
        </p>
        <p className="font-semibold text-green-600 p-2 rounded-full absolute border-2 border-green-600 top-6">
          {stock}!
        </p>
        <p className="text-gray-600 mb-2 text-lg text-justify">
          {shortDescription}
        </p>
        <p className="text-gray-900 text-lg mb-3 font-semibold">Details: </p>
        <p className="text-gray-500 mb-2 text-sm   text-justify leading-5">
          {productDetails}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
