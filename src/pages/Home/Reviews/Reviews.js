import React from "react";
import Review from "../Review/Review";

const Reviews = () => {
  return (
    <section className="pt-12 pb-20 bg-gradient-to-t from-gray-300">
      <div>
        <h1 className="text-center text-6xl text-gray-900 font-semibold">
          Happy Customers!
        </h1>
      </div>
      {/* Products container */}
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </section>
  );
};

export default Reviews;
