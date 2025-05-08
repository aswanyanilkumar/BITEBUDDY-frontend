// src/pages/AdminAuth.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAuth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? 'http://localhost:3001/admin/register'
      : 'http://localhost:3001/admin/login';

    try {
      const payload = isSignup
        ? { name, email, password } // Include name during signup
        : { email, password };

      const res = await axios.post(url, payload);
      localStorage.setItem("adminToken", res.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      alert(err.response?.data?.error || 'Authentication failed');
    }
  };

  return (
    <div className="p-4 min-h-screen" style={{ backgroundColor: '#bbcac8' }}>
      <div className="max-w-md mx-auto">
      </div>
      <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>
      <form onSubmit={handleAuth} className="flex flex-col gap-3">
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
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


