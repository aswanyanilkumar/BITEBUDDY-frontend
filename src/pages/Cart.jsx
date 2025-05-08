//src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

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
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleProceedToPayment = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-[#bbcac8] p-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="text-lg text-green-600 font-bold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="mt-2 text-xs text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200 text-right">
          <p className="text-xl font-semibold text-gray-800 mb-4">Total: ₹{calculateTotal()}</p>
          <button
            onClick={handleProceedToPayment}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
