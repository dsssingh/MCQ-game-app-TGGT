import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Questions from './Components/Questions.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"quiz",
    element:<Questions></Questions>
  },
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/",
    element:<App></App>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
