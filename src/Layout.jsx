import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/MAN/Header/Header'

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />

    </div>
  )
}

export default Layout
