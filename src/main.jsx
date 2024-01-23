import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Orders from './components/Orders/Orders.jsx'
import Shop from './components/Shop/Shop.jsx'
import storedProducts from './utilities/orders.js'
import Checkout from './components/Checkout/Checkout.jsx'
import Login from './components/login/login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Authprovider from './authprovider/Authprovider.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import ErrorElement from './ErrorElement/ErrorElement.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: storedProducts
      },
      {
        path: '/checkout',
        element: <ProtectedRoute><Checkout /></ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '*',
        element: <ErrorElement />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider><RouterProvider router={router} /></Authprovider>
)
