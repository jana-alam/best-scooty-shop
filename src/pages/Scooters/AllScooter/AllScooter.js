import React from "react";
import SingleScooter from "../SingleScooter/SingleScooter";

const AllScooter = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="grid grid-cols-3 gap-8 w-10/12 mx-auto ">
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
        <SingleScooter></SingleScooter>
      </div>
    </section>
  );
};

export default AllScooter;
