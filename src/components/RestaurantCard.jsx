//src/components/RestaurantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden mb-6">

      {/* Restaurant Image */}
      <img
        src={
          restaurant.image?.startsWith('http')
            ? restaurant.image
            : 'https://source.unsplash.com/300x170/?restaurant,food'
        }
        alt={restaurant.name}
        className="w-full h-[250px] object-cover"
      />

      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-800 truncate">{restaurant.name}</h3>
        <p className="text-sm text-gray-500 mt-1">⭐ 4.3 • 25–35 mins</p>
        <p className="text-sm text-gray-600 truncate">{restaurant.cuisine || restaurant.description}</p>
        <p className="text-xs text-gray-400 mt-1">{restaurant.address || 'Kollam'}</p>

        <Link to={`/menu/${restaurant._id}`}>
          <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 text-sm">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;
