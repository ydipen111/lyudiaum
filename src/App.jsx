import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import CreateChanel from './components/CreateChanel'
import './App.css';

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'createchannel',
        element: <CreateChanel />
      }



    ]
  }





  ])
  return <RouterProvider router={router} />
}

export default App
