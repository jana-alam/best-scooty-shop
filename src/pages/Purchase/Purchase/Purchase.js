import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import ProductDetails from "../ProductDetails/ProductDetails";

import ShippingDetails from "../ShippingDetails/ShippingDetails";

const Purchase = () => {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <ProductDetails></ProductDetails>
        <ShippingDetails></ShippingDetails>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
