import React from 'react';
import "../../assets/css/Hero.css"; 
import { FaPlane } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/tours');
  };

  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Swaarnabhoomi Tours and Travels</h1>
        <h2 className="hero-subheading">Join with us and explore the world</h2>
        <button className="explore-btn" onClick={handleExploreClick}>
          Explore Tours <FaPlane className="plane-icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
