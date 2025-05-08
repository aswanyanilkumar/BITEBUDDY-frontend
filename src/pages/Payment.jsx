// src/pages/Payment.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [loading, setLoading] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    if (!token) {
      alert("You must be logged in");
      return;
    }

    if (!cartItems.length) {
      alert("Cart is empty.");
      return;
    }

    if (!totalAmount || isNaN(totalAmount)) {
      alert("Invalid total amount.");
      return;
    }

    try {
      setLoading(true);

      console.log("Sending payment request:", {
        amount: totalAmount,
        paymentMethod,
      });

      // 1. Process payment
      const paymentRes = await axios.post(
        "http://localhost:3001/payment/process",
        {
          amount: totalAmount,
          paymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!paymentRes.data.success) {
        alert("Payment failed.");
        return;
      }

      // 2. Place order after payment
      const restaurantId = cartItems[0]?.restaurant;
      if (!restaurantId) {
        alert("Restaurant not found in cart items.");
        return;
      }

      const orderItems = cartItems.map((item) => ({
        foodItem: item._id, // Ensure food item ID is correctly set
        quantity: item.quantity,
      }));

      if (!orderItems.length) {
        alert("Order items are missing.");
        return;
      }

      console.log("Placing order with the following data:", {
        restaurant: restaurantId,
        items: orderItems,
      });

      // Send the request to place the order
      const orderRes = await axios.post(
        "http://localhost:3001/orders/place",
        {
          restaurant: restaurantId,
          items: orderItems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Order placed successfully:", orderRes.data);


      // Redirect to success page
      clearCart();
      navigate("/payment-success");
    } catch (err) {
      console.error("Payment Error:", err?.response?.data || err.message);
      alert(err?.response?.data?.error || "Something went wrong during payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>

      <div className="mb-4">
        <label className="block font-medium mb-2">Select Payment Method:</label>
        <select
          className="w-full border p-2 rounded"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit_card">Credit Card</option>
          <option value="upi">UPI</option>
          <option value="net_banking">Net Banking</option>
        </select>
      </div>

      <p className="text-lg font-semibold mb-6">
        Total: ₹{totalAmount.toFixed(2)}
      </p>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Processing..." : "Pay & Place Order"}
      </button>
    </div>
  );
};

export default Payment;
