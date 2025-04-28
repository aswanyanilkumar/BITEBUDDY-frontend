// src/pages/PostRestaurant.jsx
// src/pages/PostRestaurant.jsx
import { useState } from 'react';

const PostRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cuisine: '',
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
      await axios.post('http://localhost:3001/restaurant/add', formData);
      alert("Restaurant posted successfully!");
      setFormData({ name: '', address: '', cuisine: '', imageUrl: '' });
    } catch (err) {
      console.error(err);
      alert("Failed to post restaurant");
    }
  };
  

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Restaurant Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="cuisine" placeholder="Cuisine Type" value={formData.cuisine} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Post Restaurant</button>
      </form>
    </div>
  );
};

export default PostRestaurant;
