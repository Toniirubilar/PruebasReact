import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import './index.css'
import Footer from './components/Footer.jsx'
import Principal from './Principal.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
    <Footer />
  </React.StrictMode>,
)

