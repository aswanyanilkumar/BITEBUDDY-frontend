// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleIncrement = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrement = (id) => {
    updateQuantity(id, -1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = async () => {
    try {
      if (!token) return alert("You must be logged in to place an order.");

      const restaurantId = cartItems[0]?.restaurantId; // Assuming all items are from same restaurant
      if (!restaurantId) return alert("Invalid restaurant info.");

      const orderItems = cartItems.map(item => ({
        foodItem: item._id,
        quantity: item.quantity
      }));

      const response = await axios.post(
        'http://localhost:3001/orders/place',
        {
          restaurant: restaurantId,
          items: orderItems
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Order placed successfully!");
      clearCart();
      navigate('/orders');
    } catch (err) {
      console.error(err);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item._id} className="flex justify-between items-center border p-4 rounded-lg">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-2 py-1 bg-gray-300 rounded-full"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-2 py-1 bg-gray-300 rounded-full"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <p className="text-red-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-sm text-white bg-gray-500 hover:bg-gray-700 px-3 py-1 rounded-full mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 border-t pt-4 text-right">
          <p className="font-semibold text-lg mb-4">Total: ${calculateTotal()}</p>
          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

