// src/pages/FoodItemDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewSection from '../components/ReviewSection';

const FoodItemDetail = () => {
  const { id } = useParams(); // From URL: /fooditem/:id
  const [foodItem, setFoodItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/food/${id}`);
        setFoodItem(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching food item:", err);
        setLoading(false);
      }
    };
    fetchFoodItem();
  }, [id]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (!foodItem) return <div className="text-center p-8 text-red-500">Food item not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={foodItem.image}
          alt={foodItem.name}
          className="w-full h-64 object-cover rounded-lg"
          onError={(e) => (e.target.src = "https://via.placeholder.com/400x300?text=Image+Unavailable")}
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{foodItem.name}</h1>
          <p className="text-gray-700 mb-1">Category: {foodItem.category}</p>
          <p className="text-gray-700 mb-4">{foodItem.description}</p>
          <p className="text-2xl text-green-600 font-bold mb-4">₹{foodItem.price}</p>
        </div>
      </div>

      {/* Review Section Component */}
      <ReviewSection foodItemId={foodItem._id} />
    </div>
  );
};

export default FoodItemDetail;
