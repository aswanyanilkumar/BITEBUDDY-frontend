// src/pages/FoodMenu.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import FoodCard from '../components/FoodCard'; // Make sure this import exists

function FoodMenu() {
  const { restaurantId } = useParams();
  const [foodItems, setFoodItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);

  const categories = ["All", "Main Dish", "Starters", "Drinks & Juices", "Desserts"];

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/food/restaurant/${restaurantId}`);
        setFoodItems(response.data);
        setFilteredItems(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load food items.");
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, [restaurantId]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(foodItems);
    } else {
      setFilteredItems(foodItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, foodItems]);

  if (loading) {
    return <div className="text-center mt-10 text-lg text-gray-600">Loading food items...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
        <div className="min-h-screen" style={{ backgroundColor: '#bbcac8' }}>
    <div className="p-6">
      <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">Food Menu</h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium border ${
              selectedCategory === category
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-red-500 border-red-300 hover:bg-red-100"
            } transition duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-600">No items available in this category.</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item._id} food={{ ...item, restaurant: restaurantId }} />

          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default FoodMenu;
