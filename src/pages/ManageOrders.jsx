// src/pages/ManageOrders.jsx
// src/pages/ManageOrders.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/orders/all");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5de0e6] to-[#004aad] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Items</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border-b">
                <td className="px-4 py-2">{order.user?.name || "Unknown"}</td>
                <td className="px-4 py-2">
                {order.items.map(item => `${item.name} (${item.quantity})`).join(", ")}

                </td>
                <td className="px-4 py-2">${order.total.toFixed(2)}</td>
                <td className="px-4 py-2 capitalize">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;


