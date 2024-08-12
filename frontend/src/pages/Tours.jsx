import React from 'react';
import SubHero from "../components/SubHero/SubHero";
import TourSection from "../components/Tours/ToursSection";


const Tours = () => {
  return (
    <>
     <SubHero 
imageUrl="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
heading="_Our Tours_"
subheading="Experience the highlights and key information about your next Adventure...!"
/>
<TourSection/>
    </>
  )
}

export default Tours
