import React from 'react';
import { Routes , Route , Navigate} from "react-router-dom";
import Home from "../pages/Home";
import TourDetails from "../pages/TourDetails";
import Contact from "../pages/Contact";
import NewsLetters from "../pages/NewsLetters";

import PackagesPage from "../pages/PacakgesPage";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/packages' element={<PackagesPage/>} />
        <Route path='/newsletters' element={<NewsLetters/>} />
        <Route path='/tours/:id' element ={<TourDetails/>}/>
        <Route path='/contact' element={<Contact/>} />
       
      </Routes>
    </div>
  )
}

export default Routers;
