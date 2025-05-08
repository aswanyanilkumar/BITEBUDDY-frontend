// src/pages/PostFoodItem.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostFoodItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    restaurant: '', 
    image: ''
  });

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("http://localhost:3001/restaurant/all");
        console.log("Restaurants fetched:", res.data);
        setRestaurants(res.data);
      } catch (err) {
        console.error("Error fetching restaurants", err);
      }
    };
    fetchRestaurants();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/food/create', formData, {
        headers: {
          Authorization:  `Bearer ${localStorage.getItem("adminToken")}`

        }
      });
      alert("Food item posted successfully!");
      setFormData({ name: '', price: '', description: '', category: '', restaurant: '', image: '' });
    } catch (err) {
      console.error(err);
      alert("Failed to post food item");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5de0e6] to-[#004aad] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Add New Food Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Food Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Category</option>
          <option value="Main Dish">Main Dish</option>
          <option value="Starters">Starters</option>
          <option value="Drinks & Juices">Drinks & Juices</option>
          <option value="Desserts">Desserts</option>
        </select>

        <select name="restaurant" value={formData.restaurant} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Restaurant</option>
          {restaurants.map((rest) => (
            <option key={rest._id} value={rest._id}>{rest.name}</option>
          ))}
        </select>

        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Post Food</button>
      </form>
    </div>
  );
};

export default PostFoodItem;

