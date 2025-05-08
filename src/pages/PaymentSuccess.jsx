//src/pages/PaymentSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#bbcac8' }}>
      <div className="bg-white p-10 rounded shadow-lg text-center max-w-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h2>
        <p className="text-gray-700 mb-6">
          Your order has been placed and will be delivered soon.
        </p>
        <Link
          to="/orders"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          View My Orders
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
