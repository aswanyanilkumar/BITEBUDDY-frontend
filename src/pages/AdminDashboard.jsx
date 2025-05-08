///src/pages/AdminDashboard.jsx
import { useAdmin } from "../context/AdminContext";
import { useNavigate, Link } from "react-router-dom";
import adminBg from "../assets/images/adminbg.jpg";

const AdminDashboard = () => {
  const { admin, logoutAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 font-sans bg-cover bg-center"
      style={{ backgroundImage: `url(${adminBg})` }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, Admin!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="text-center mb-12">
        <p className="text-xl font-semibold text-gray-800">Manage the platform using the tools below:</p>
      </div>

      {/* Admin Tools */}
      <div className="flex flex-wrap justify-center gap-10 font-bold">
        <Link
          to="/admin/post-restaurant"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-blue-700 transition text-lg"
        >
          Post Restaurant
        </Link>
        <Link
          to="/admin/post-food"
          className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-green-700 transition text-lg"
        >
          Post Food Item
        </Link>
        <Link
          to="/admin/manage-users"
          className="bg-yellow-500 text-white px-8 py-4 rounded-xl shadow-md hover:bg-yellow-600 transition text-lg"
        >
          Manage Users
        </Link>
        <Link
          to="/admin/manage-orders"
          className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-purple-700 transition text-lg"
        >
          Manage Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
