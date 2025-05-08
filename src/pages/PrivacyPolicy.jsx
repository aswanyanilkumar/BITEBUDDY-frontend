// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6" style={{ backgroundColor: '#bbcac8' }}>
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        At BiteBuddy, we are committed to protecting your privacy. This policy outlines how we collect and use your data:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>We collect personal information such as name, email, and payment details for order processing.</li>
        <li>Your information is securely stored and never shared with third parties without your consent.</li>
        <li>We use cookies to enhance your browsing experience on our website.</li>
      </ul>
      <p>By using our service, you consent to the collection and use of your data as described in this policy.</p>
    </div>
  );
};

export default PrivacyPolicy;
