import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Header from './Components/Header/Header';
import Root from './pages/Root/Root';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Wholesale from './pages/Wholesale/Wholesale';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/shop',
        element:<Shop></Shop>
      },
      {
        path: '/wholesale',
        element: <Wholesale></Wholesale>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
