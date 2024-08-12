import React from 'react';
import SubHero from '../components/SubHero/SubHero';
import Package from '../components/Packages/Packages';

const PacakgesPage = () => {
  return (
    <>
       <SubHero 
    imageUrl="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    heading=" _Our Packages_"
    subheading=" its always worthyyy...!"
    />
    <Package/>
    </>
  )
}

export default PacakgesPage
