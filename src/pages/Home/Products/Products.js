import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  return (
    // Products section homepage
    <section className="py-8 pb-24 relative">
      <div className="space-y-4">
        <h1 className="text-center text-6xl text-gray-600 font-semibold">
          Our <span className="text-red-600">Scooty</span>
        </h1>
        <p className="text-center text-lg font-medium text-gray-700">
          We have the best quality scooters with 24 hour support accross the
          country
        </p>
      </div>
      {/* Products container */}
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 shadow-xl mt-8 bg-gray-100 py-8">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </section>
  );
};

export default Products;
