import React, { useEffect, useState } from "react";
import HomeScooter from "../HomeScooter/HomeScooter";

const HomeScooters = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    fetch(" https://mysterious-falls-26048.herokuapp.com/home/products")
      .then((res) => res.json())
      .then((data) => {
        setHomeProducts(data);
      });
  }, []);

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
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xl mt-8 py-8">
        {homeProducts.map((scooter) => (
          <HomeScooter key={scooter._id} scooter={scooter} />
        ))}
      </div>
    </section>
  );
};

export default HomeScooters;
