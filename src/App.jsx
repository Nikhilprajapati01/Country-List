import React from 'react'
import  "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Country from './Pages/Country';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import { Errorpage } from './Pages/Errorpage';

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"country",
        element: <Country/>
      },
      {
        path:"contact",
        element: <Contact/>
      }

    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}> </RouterProvider>
  )
}

export default App