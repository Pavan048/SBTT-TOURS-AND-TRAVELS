import React from 'react';
import "../../assets/css/style.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Routers from '../../router/Routers.js';

const Layout = () => {
  return (
    <div>
      <Header/>
     
      <Routers/>

      <Footer/>
    </div>
  )
}

export default Layout
