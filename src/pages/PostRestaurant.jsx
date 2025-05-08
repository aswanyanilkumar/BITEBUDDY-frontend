// src/pages/PostRestaurant.jsx
import { useState } from 'react';
import axios from 'axios';

const PostRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    image: '',
    description: ''
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
      await axios.post('http://localhost:3001/restaurant/add', formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token}` // Assuming you store token like this
        }
      });
      alert("Restaurant posted successfully!");
      setFormData({ name: '', address: '', image: '', description: '' });
    } catch (err) {
      console.error(err);
      alert("Failed to post restaurant");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5de0e6] to-[#004aad] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Restaurant Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Post Restaurant</button>
      </form>
    </div>
  );
};

export default PostRestaurant;
