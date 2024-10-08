
import React from 'react';
import "../assets/css/style.css";
import HeroPage from '../components/HeroPages/HeroPage.jsx';
import TourSearch from '../components/TourSearch/TourSearch.jsx';
import PopularDestinations from "../components/PopularDestinations/PopularDestinations.jsx";
import CTA from "../components/CTA/Cta.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import PackageSection from '../components/Packages/Packages.jsx';


function Home() {
  return(
    <>
   
    <article>
    {/* Hero */}
    <HeroPage/>
    {/* TourSearch */}
    <TourSearch/>
    {/* popular destinations */}
    <PopularDestinations/>
    {/* packages */}
    <PackageSection/>
    {/* gallary */}
    <Gallery/>
      {/* cta */}
      <CTA/>
    </article>
      
    
      
    </>
  );
}

export default Home;
