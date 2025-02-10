import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/MAN/Header/Header'

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif',
  },
  palette: {
    background: {
      default: "white", // Sets the default background to white
    },
    primary: {
      main: "#ffffff", // Sets AppBar background to white
    },
  },
});


const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default Layout;
