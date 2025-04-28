// src/components/RestaurantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transition duration-300">
      {/* Restaurant Image */}
      <img
        src={
          restaurant.image ||
          'https://source.unsplash.com/400x250/?restaurant,food'
        }
        alt={restaurant.name}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-red-600">{restaurant.name}</h3>
        <p className="text-gray-600 mt-1 mb-2">{restaurant.description || 'No description available.'}</p>
        <p className="text-sm text-gray-400 mb-3">{restaurant.address || 'Address not specified'}</p>

        {/* View Menu Button */}
        <Link to={`/menu/${restaurant._id}`}>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;


