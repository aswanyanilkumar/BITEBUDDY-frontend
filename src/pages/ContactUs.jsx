// src/pages/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6" style={{ backgroundColor: '#bbcac8' }}>
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-6">
        We would love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out:
      </p>
      <ul className="mb-4">
        <li>Email: <a href="mailto:support@bitebuddy.com" className="text-blue-500">support@bitebuddy.com</a></li>
        <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234-567-890</a></li>
      </ul>
      <p>Our customer service team is available from 9 AM to 5 PM every day.</p>
    </div>
  );
};

export default ContactUs;
