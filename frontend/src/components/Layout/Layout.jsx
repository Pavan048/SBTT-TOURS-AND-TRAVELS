import React from 'react';
import "../../assets/css/style.css";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.js";
import Routers from '../../router/Routers.js';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      
     
      <Routers/>

      <Footer/>
    </div>
  )
}

export default Layout
