// src/pages/FoodMenu.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

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
        const response = await axios.get(`http://localhost:3001/fooditems/restaurant/${restaurantId}`);
        setFoodItems(response.data);
        setFilteredItems(response.data); // Initially show all
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=Image+Unavailable")}
              />
              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{item.category}</p>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold text-lg">₹{item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodMenu;
