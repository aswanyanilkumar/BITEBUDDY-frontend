//src/pages/Home.jsx
// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#bbcac8]"></div>
      <div 
        className="flex-grow bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1617201835175-aab7b1d71d87?q=80&w=1419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Welcome to BiteBuddy</h1>
         <p className="mt-2 text-white text-lg">Your Foodie Partner, Anytime. Anywhere.</p>
         <Link to="/restaurants" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Explore Restaurants
         </Link>

        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default HomePage;

