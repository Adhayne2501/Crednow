import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './src/components/pages/Home';
import Login from './src/components/pages/Login';
import App from './src/App';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element:  <Home/>,
  }
  // {
  //   path: "/cadastro",
  //   element:  <Cadastro />,
  // },
  // {
  //   path: "/produto",
  //   element:  <Produto />,
  // },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
