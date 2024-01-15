import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme/Theme.jsx';
import { CartProvider } from './context/CartContext/CartContext.jsx';
import { LoginProvider } from './context/LoginContext/LoginContext.jsx';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginProvider>
          <CartProvider>
            <Router>
              <Header />
              <AppRoutes />
              <Footer />
            </Router>
          </CartProvider>
        </LoginProvider>
      </ThemeProvider>
    </>
  )
}

export default App
