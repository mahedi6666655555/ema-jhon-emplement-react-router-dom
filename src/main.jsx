import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './layouy/Home';
import Order from './components/Order';
import Login from './components/Login';
import Inventory from './components/Inventory';

let router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home></Home>,
     children:[
      {
        path:'Shop',  
        element:<Shop></Shop>

      },
      
      {
        path:'order',  
        element:<Order></Order>

      },
      {
        path:'Login',  
        element:<Login></Login>

      },
      {
        path:'Inventory',  
        element:<Inventory></Inventory>

      },

     ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
