import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Orders from './components/Orders/Orders.jsx'
import Shop from './components/Shop/Shop.jsx'
import storedProducts from './utilities/orders.js'
import Checkout from './components/Checkout/Checkout.jsx'

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
        element: <Checkout />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
