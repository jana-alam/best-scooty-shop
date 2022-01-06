import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../SharedComponents/Spinner/Spinner";

const AddProduct = () => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const productInfo = { ...product };
    productInfo[field] = value;
    setProduct(productInfo);
  };
  const handleAddProduct = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(" https://mysterious-falls-26048.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          e.target.reset();
          alert("New Product Added");
        }
        console.log(result);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mt-10 sm:mt-0 md:w-10/12 mx-auto ">
      {/* form */}
      <form onSubmit={handleAddProduct} className="px-6">
        <div className="shadow">
          <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
            {/* inputs grid container */}
            <div className="grid grid-cols-6 gap-6">
              {/* personal information */}
              <div className="col-span-6 text-gray-700 text-sm font-medium">
                Add New Product Information
              </div>
              {/*  product name */}
              <div className="col-span-6 sm:col-span-2">
                <input
                  required
                  onBlur={handleInput}
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/*  product short description */}
              <div className="col-span-6 sm:col-span-4">
                <input
                  required
                  onBlur={handleInput}
                  type="text"
                  name="shortDescription"
                  placeholder="Product Short Description"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* product details description */}
              <div className="col-span-6">
                <textarea
                  required
                  onBlur={handleInput}
                  type="text"
                  name="productDetails"
                  placeholder="Product Details..."
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* price */}
              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    required
                    onBlur={handleInput}
                    name="price"
                    className="px-6 py-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                    placeholder="Price"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <p className="h-full pt-2 pl-2 pr-10 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      USD
                    </p>
                  </div>
                </div>
              </div>
              {/* Power */}
              <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                <input
                  required
                  onBlur={handleInput}
                  name="power"
                  placeholder="Power"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>

              {/* phone image link */}
              <div className="col-span-6">
                <input
                  required
                  onBlur={handleInput}
                  type="text"
                  name="imageUrl"
                  placeholder="Provide Image URL Here"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* submit button */}

              <div className="col-span-6 text-gray-700 text-sm font-medium">
                <button
                  disabled={isLoading}
                  type="submit"
                  className={`${
                    isLoading && `opacity-50 cursor-not-allowed`
                  } inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
