
import React from 'react';
import "./assets/css/style.css";
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import TourSearch from './components/TourSearch/TourSearch.jsx';
import PopularDestinations from "./components/PopularDestinations/PopularDestinations.jsx";
import CTA from "./components/CTA/Cta.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PackageSection from './components/Packages/Packages.jsx';


function App() {
  return(
    <>
    {/* Header */}
    <Header/>
    <article>
    {/* Hero */}
    <Hero/>
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
      <Footer/>
    
      
    </>
  );
}

export default App;
