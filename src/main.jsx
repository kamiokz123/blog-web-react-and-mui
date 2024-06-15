import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/About/About.jsx';
import Home from './pages/home/Home.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import MenuPage from './pages/menu/MenuPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<NotFound /> ,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"menu",
        element: <MenuPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
