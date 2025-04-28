// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#bbcac8] text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* New Text */}
        <p className="text-sm mb-4">
          Discover our passion for providing high-quality food delivered right to your door.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm mb-4">
          <Link to="/about-us" className="hover:text-red-500">About Us</Link>
          <Link to="/terms-policy" className="hover:text-red-500">Terms & Policy</Link>
          <Link to="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link>
          <Link to="/contact-us" className="hover:text-red-500">Contact Us</Link>
          <Link to="/admin/auth" className="hover:text-red-500">Signup/Login as Admin</Link>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-4">
          © {new Date().getFullYear()} <span className="text-red-500 font-semibold">BiteBuddy</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
