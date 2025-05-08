// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import FoodMenu from './pages/FoodMenu';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import AdminAuth from './pages/AdminAuth';
import UserAuth from './pages/UserAuth';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import TermsPolicy from './pages/TermsPolicy';  
import PrivacyPolicy from './pages/PrivacyPolicy';  
import ContactUs from './pages/ContactUs'; 
import Payment from "./pages/Payment";
import FoodItemDetail from './pages/FoodItemDetail';
import PostRestaurant from './pages/PostRestaurant';
import PostFoodItem from './pages/PostFoodItem';
import ManageUsers from './pages/ManageUsers';
import ManageOrders from './pages/ManageOrders';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentSuccess from "./pages/PaymentSuccess";


function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#bbcac8' }}>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menu/:restaurantId" element={<FoodMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/user/auth" element={<UserAuth />} />
        <Route path="/admin/auth" element={<AdminAuth />} /> 
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-policy" element={<TermsPolicy />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/payment" element={<Payment />} />
        <Route path="/fooditem/:id" element={<FoodItemDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/admin/post-restaurant" element={<PostRestaurant />} />
        <Route path="/admin/post-food" element={<PostFoodItem />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-orders" element={<ManageOrders />} />


      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
    </div>
  );
}

export default App;
