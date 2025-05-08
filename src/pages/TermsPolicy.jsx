// src/pages/TermsPolicy.jsx
import React from 'react';

const TermsPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6" style={{ backgroundColor: '#bbcac8' }}>
      <h1 className="text-3xl font-semibold mb-4">Terms & Policy</h1>
      <p className="mb-6">
        Welcome to BiteBuddy. By using our services, you agree to the following terms and conditions:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>We offer food delivery services from a wide variety of restaurants.</li>
        <li>We are not responsible for the content provided by the restaurants.</li>
        <li>We reserve the right to update these terms at any time without prior notice.</li>
      </ul>
      <p>For more details, please feel free to contact us.</p>
    </div>
  );
};

export default TermsPolicy;
