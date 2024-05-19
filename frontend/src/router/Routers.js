import React from 'react';
import { Routes , Route , Navigate} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";
import Contact from "../pages/Contact";
import PaymentSuccess from "../pages/PaymentSuccess";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/tours' element ={<Tours/>}/>
        <Route path='/tours/:id' element ={<TourDetails/>}/>
        <Route path='/tours/search' element ={<SearchResultList/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </div>
  )
}

export default Routers;
