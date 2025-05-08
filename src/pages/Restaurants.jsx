// src/pages/Restaurants.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/restaurant/all') // Adjusted the endpoint to match the server
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#bbcac8] p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore Restaurants</h2>
  
      {restaurants.length === 0 ? (
        <p className="text-center text-gray-600">No restaurants available.</p>
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
    </div>
  );
  
}

export default Restaurants;
