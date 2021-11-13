import React, { useEffect, useState } from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";

import ShippingDetails from "../ShippingDetails/ShippingDetails";

const Purchase = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(` https://mysterious-falls-26048.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
      });
  }, [id]);

  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <ProductDetails productDetail={productDetail}></ProductDetails>
        <ShippingDetails productDetail={productDetail}></ShippingDetails>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
