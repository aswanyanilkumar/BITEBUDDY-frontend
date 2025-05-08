// src/pages/AboutUs.jsx
const AboutUs = () => {
    return (
      <div className="p-6 max-w-3xl mx-auto" style={{ backgroundColor: '#bbcac8' }}>
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-4">
          Welcome to BiteBuddy, your go-to destination for delicious and quality food delivered right to your door. 
          Our mission is to provide the best culinary experience, making it convenient for you to enjoy your favorite meals.
        </p>
        <p className="mb-4">
          Our team consists of passionate food lovers dedicated to sourcing fresh ingredients and preparing meals that 
          satisfy your cravings. We believe that good food brings people together, and we strive to create memorable 
          dining experiences for our customers.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Our Values</h3>
        <ul className="list-disc pl-6">
          <li><strong>Quality:</strong> We prioritize high-quality ingredients and culinary excellence.</li>
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority.</li>
          <li><strong>Community:</strong> We support local farmers and businesses to bring you the freshest produce.</li>
        </ul>
        <p className="mt-4">Thank you for choosing BiteBuddy. We look forward to serving you!</p>
      </div>
    );
  };
  
  export default AboutUs;
  