import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from './components/logo/Logo'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

import Routes from './Routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
