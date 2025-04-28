//src/components/RestaurantList.jsx
import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList({ restaurants }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
