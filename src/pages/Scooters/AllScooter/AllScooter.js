import React, { useEffect, useState } from "react";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import SingleScooter from "../SingleScooter/SingleScooter";

const AllScooter = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(" https://mysterious-falls-26048.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  if (!allProducts.length) {
    return <Spinner />;
  }
  return (
    <section className="py-12 bg-gray-50 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {allProducts.map((scooter) => (
          <SingleScooter key={scooter._id} scooter={scooter}></SingleScooter>
        ))}
      </div>
    </section>
  );
};

export default AllScooter;
