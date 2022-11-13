import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: 'products/new', element: <NewProduct /> },
      { path: 'products/:id', element: <ProductDetail /> },
      { path: '/carts', element: <MyCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
