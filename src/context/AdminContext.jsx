//src/context/AdminContext/jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  // Retrieve token from localStorage on load
  const [admin, setAdmin] = useState(() => {
    const storedToken = localStorage.getItem('adminToken');
    return storedToken ? storedToken : null;
  });

  // Store the JWT token in state and localStorage
  const loginAdmin = (token) => {
    setAdmin(token);
    localStorage.setItem('adminToken', token);
  };

  // Clear the JWT token from state and localStorage on logout
  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem('adminToken');
  };

  return (
    <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

