//src/components/RestaurantList.jsx
import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList({ restaurants }) {
  return (
   
<div className="flex flex-wrap justify-center gap-x-6 mt-6">
  {restaurants.map((restaurant) => (
    <div key={restaurant._id} className="mb-8">
      <RestaurantCard restaurant={restaurant} />
    </div>
  ))}
</div>
  );
}

export default RestaurantList;

