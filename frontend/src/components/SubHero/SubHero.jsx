import React from 'react';
import "../../assets/css/SubHero.css";

const SubHero = ({ imageUrl, heading, subheading }) => {
  return (
    <div className="subhero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay"></div>
      <div className="subhero-content">
        <h2 className="subhero-heading">{heading}</h2>
        <p className="subhero-subheading">{subheading}</p>
      </div>
    </div>
  );
};

export default SubHero;
