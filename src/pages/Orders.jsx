// src/pages/Orders.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3001/orders/my-orders", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch your orders");
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="min-h-screen bg-[#bbcac8] max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order._id} className="border rounded-lg p-4 shadow-md bg-white">
              <div className="mb-2">
                <span className="text-sm text-gray-500">Ordered on:</span>{" "}
                <span className="text-sm font-medium text-gray-700">{new Date(order.createdAt).toLocaleString()}</span>
              </div>

              <h3 className="text-lg font-semibold mb-1">
                Restaurant: <span className="text-green-600">{order.restaurant.name}</span>
              </h3>

              <ul className="mb-2">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <span>{item.foodItem.name} x {item.quantity}</span>
                    <span>₹{(item.foodItem.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center pt-2 border-t mt-2">
                <p className="font-medium">Total: ₹{order.totalPrice.toFixed(2)}</p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Status:</span> {order.orderStatus}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
