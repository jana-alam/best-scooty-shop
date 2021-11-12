import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";

import ShippingDetails from "../ShippingDetails/ShippingDetails";

const Purchase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <ProductDetails></ProductDetails>
      <ShippingDetails></ShippingDetails>
    </div>
  );
};

export default Purchase;
