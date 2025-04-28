//src/pages/MenuPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MenuPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/restaurants/${restaurantId}`);
        setRestaurant(res.data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };
    fetchRestaurant();
  }, [restaurantId]);

  if (!restaurant) {
    return <div className="text-center mt-10 text-gray-500">Loading menu...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{restaurant.name} - Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurant.foodItems && restaurant.foodItems.length > 0 ? (
          restaurant.foodItems.map((item, index) => (
            <div key={index} className="bg-white border rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-xl" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-1 mb-2">{item.description}</p>
                <p className="text-red-600 font-bold">${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No food items available.</p>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
