// src/pages/UserAuth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      let res;
      if (isSignup) {
        res = await axios.post('http://localhost:3001/users/signup', { name, email, password });
      } else {
        res = await axios.post('http://localhost:3001/users/login', { email, password });
      }

      localStorage.setItem('user', JSON.stringify(res.data)); // Storing user data
      navigate('/'); // Redirect to homepage or wherever you want
    } catch (err) {
      alert(err.response?.data?.error || 'Authentication failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleAuth} className="flex flex-col gap-3">
        {isSignup && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded">{isSignup ? 'Sign Up' : 'Log In'}</button>
      </form>
      <p className="mt-4 text-center">
        {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? ' Log In' : ' Sign Up'}
        </span>
      </p>
    </div>
  );
};

export default UserAuth;
