import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About_page from './pages/about/About_page.jsx'
import Contact_page from './pages/contact/Contact_page.jsx' 
import Practice_page from './pages/practice_area/Practice_page.jsx'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About_page/>
  },
  {
    path: "/contact",
    element: <Contact_page/>
  },
  {
    path: '/practice-area',
    element: <Practice_page/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
);