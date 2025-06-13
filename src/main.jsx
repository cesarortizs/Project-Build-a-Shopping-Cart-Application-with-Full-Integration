import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductListing } from './components/ProductListing.jsx'
import { Cart } from './components/Cart.jsx'
import { Checkout } from './components/Checkout.jsx'

const router = new createBrowserRouter([
  {path: '/', element: <App/>, children: [
    {path: '/', element: <ProductListing/>},
    {path: '/cart', element: <Cart/>},
    {path: '/checkout', element: <Checkout/>},
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
