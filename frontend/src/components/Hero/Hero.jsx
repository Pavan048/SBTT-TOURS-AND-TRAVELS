import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className="h1 hero-title">SBTT Tours & Travels</h2>
        <p className="hero-text">#65, 1st Floor Vinayaka Towers, 8th 'B' Main, 27th Cross, 4th Block, Jayanagar, Bangalore-560011</p>
        <div className="btn-group">
          <button className="btn btn-primary">Learn more</button>
          <button className="btn btn-secondary">Book now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
