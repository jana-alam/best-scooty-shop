import React, { useState } from "react";
import { CheckIcon, TrashIcon } from "@heroicons/react/outline";

const SingleOrder = ({ order, handleDeleteOrder }) => {
  const { name, email, userEmail, productDetail, status, _id } = order;
  const [orderStatus, setOrderStatus] = useState(status);
  const [statusLoading, setStatusLoading] = useState(false);

  const handleOrderStatus = (id) => {
    setStatusLoading(true);
    fetch(`http://localhost:5000/order/status/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setOrderStatus("shipped");
        }
      })
      .finally(() => {
        setStatusLoading(false);
      });
  };
  const deleteOrder = (id) => {
    const confirmation = window.confirm("Are you sure to delete");
    if (confirmation) {
      handleDeleteOrder(id);
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
            <div className="text-sm text-gray-500">User: {userEmail}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{productDetail.productName}</div>
        <div className="text-sm text-gray-500">$ {productDetail.price}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {!statusLoading ? (
          <span className="cursor-pointer px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            {orderStatus}
          </span>
        ) : (
          "Loading..."
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-evenly">
          <button onClick={() => handleOrderStatus(_id)}>
            {" "}
            <CheckIcon className="h-6 w-6 mr-2 text-green-600 cursor-pointer" />
          </button>
          <button onClick={() => deleteOrder(_id)}>
            <TrashIcon className="h-6 w-6 text-red-600 cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleOrder;
