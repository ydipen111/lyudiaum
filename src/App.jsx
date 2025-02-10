import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import CreateChanel from './components/CreateChanel'
import './App.css';
import Json from './components/MAN/body/Json'
import Profile from './components/Profile'
import SaveChannel from './utils/Features/CreateChannel/CreadedChannel'

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Profile />
      },
      {
        path: 'createchannel',
        element: <CreateChanel />
      },
      {
        path: 'save-channel',
        element: <SaveChannel />
      },
      {
        path: 'json',
        element: <Json />
      },




    ]
  }





  ])
  return <RouterProvider router={router} />
}

export default App
