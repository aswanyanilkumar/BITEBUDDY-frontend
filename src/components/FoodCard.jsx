//SRC/COMPONENTS/FoodCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg p-3 transition-transform transform hover:scale-105 overflow-hidden">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-[250px] object-cover rounded-md mb-3"
        onError={(e) => (e.target.src = "https://via.placeholder.com/300x170?text=No+Image")}
      />
      <h3 className="text-base font-semibold text-gray-800 truncate">{food.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{food.category}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-red-500 font-bold text-lg">₹{food.price}</span>
        <button
          onClick={() => addToCart(food)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

