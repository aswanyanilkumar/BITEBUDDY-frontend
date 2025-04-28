//src/components/Navbar.jsx
// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Navbar() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-[#bbcac8] p-4 flex justify-between items-center">
      {/* Left: Brand Logo */}
      <Link to="/" className="text-2xl font-bold text-red-500">BiteBuddy</Link>

      {/* Right: Nav Links */}
      <ul className="flex items-center gap-4 sm:gap-6 text-gray-700 font-medium">

        <li><Link to="/" className="hover:text-red-500 px-3">Home</Link></li>
        <li><Link to="/restaurants" className="hover:text-red-500 px-3">Restaurants</Link></li>
        <li><Link to="/cart" className="hover:text-red-500 px-3">Cart</Link></li>
        <li><Link to="/orders" className="hover:text-red-500 px-3">Orders</Link></li>
        {!user ? (
          <>
            <Link to="/user/auth" className="text-white hover:text-red-500">Log In / Sign Up</Link>
          </>
        ) : (
          <>
            <li className="text-sm text-gray-500">Hi, {user.name}</li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
