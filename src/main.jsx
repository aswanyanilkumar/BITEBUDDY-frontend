//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { AdminProvider } from './context/AdminContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
     <CartProvider> 
     <AdminProvider>
    <App />
    </AdminProvider>
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
