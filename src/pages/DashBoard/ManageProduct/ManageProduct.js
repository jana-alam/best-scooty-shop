import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

const ManageProduct = ({ product, handleDeleteProduct }) => {
  const { _id, productName, price, power, stock, imageUrl } = product;

  const deleteProduct = (id) => {
    const confirmation = window.confirm("Are you sure to delete");
    if (confirmation) {
      handleDeleteProduct(id);
    }
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {productName}
            </div>
            <div className="text-sm text-gray-500"></div>
            <div className="text-sm text-gray-500">Power: {power} kw</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{stock}</div>
        <div className="text-sm text-gray-500">$ {price}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <img src={imageUrl} className="w-12" alt="product" />
      </td>
      <td className="">
        <div className="flex justify-center">
          <button onClick={() => deleteProduct(_id)}>
            <TrashIcon className="h-6 w-6 text-red-600 cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageProduct;
