//SRC/COMPONENTS/FoodCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition-transform transform hover:scale-105">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{food.category}</p>
      <div className="flex justify-between items-center">
        <span className="text-red-500 font-bold text-lg">₹{food.price}</span>
        <button
          onClick={() => addToCart(food)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
