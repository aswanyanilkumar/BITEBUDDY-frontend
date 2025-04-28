///src/pages/AdminDashboard.jsx
import { useAdmin } from "../context/AdminContext";
import { useNavigate, Link } from "react-router-dom";

const AdminDashboard = () => {
  const { admin, logoutAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin!</h1>
      <p className="text-gray-600 mb-6">Manage the platform using the tools below:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/admin/post-restaurant" className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
          Post Restaurant
        </Link>
        <Link to="/admin/post-food" className="bg-green-500 text-white p-4 rounded shadow hover:bg-green-600">
          Post Food Item
        </Link>
        <Link to="/admin/manage-users" className="bg-yellow-500 text-white p-4 rounded shadow hover:bg-yellow-600">
          Manage Users
        </Link>
        <Link to="/admin/manage-orders" className="bg-purple-500 text-white p-4 rounded shadow hover:bg-purple-600">
          Manage Orders
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
