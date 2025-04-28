// src/pages/AdminAuth.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Toggle between signup and login
  const navigate = useNavigate();

  // Handle form submission for either login or signup
  const handleAuth = async (e) => {
    e.preventDefault();
    const url = isSignup ? 'http://localhost:3001/admin/signup' : 'http://localhost:3001/admin/login'; // API URL based on the form state

    try {
      const res = await axios.post(url, { email, password });
      // On successful login or signup, store admin info in localStorage
      localStorage.setItem('admin', JSON.stringify(res.data)); 
      navigate('/admin/dashboard'); // Redirect to admin dashboard on success
    } catch (err) {
      alert(err.response?.data?.error || 'Authentication failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>
      <form onSubmit={handleAuth} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white p-2 rounded">
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          className="text-blue-500 mt-2"
        >
          {isSignup ? 'Already have an account? Log In' : 'New admin? Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AdminAuth;

