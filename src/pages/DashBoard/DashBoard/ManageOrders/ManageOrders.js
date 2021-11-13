import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch(" https://mysterious-falls-26048.herokuapp.com/orders", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        setAllOrders(result);
        console.log(result);
      });
  }, []);

  const handleDeleteOrder = (id) => {
    fetch(` https://mysterious-falls-26048.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remainingOrder = allOrders.filter((order) => order._id !== id);
          setAllOrders(remainingOrder);
        }
      });
  };
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              {/* table body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {allOrders.map((order) => (
                  <SingleOrder
                    key={`order-${order._id}`}
                    order={order}
                    handleDeleteOrder={handleDeleteOrder}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
