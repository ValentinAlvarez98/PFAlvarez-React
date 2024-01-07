import React from 'react'
import Header from './components/Header/Header.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme/Theme.jsx';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
