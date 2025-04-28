// src/pages/PostFoodItem.jsx
// src/pages/PostFoodItem.jsx
import { useState } from 'react';

const PostFoodItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    restaurantId: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    await axios.post('http://localhost:3001/food/create', formData);
    alert("Food item posted successfully!");
    setFormData({ name: '', price: '', category: '', restaurantId: '', imageUrl: '' });
  } catch (err) {
    console.error(err);
    alert("Failed to post food item");
  }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Food Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Food Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="category" placeholder="Category (e.g., Starter)" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="restaurantId" placeholder="Restaurant ID" value={formData.restaurantId} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Post Food</button>
      </form>
    </div>
  );
};

export default PostFoodItem;

  