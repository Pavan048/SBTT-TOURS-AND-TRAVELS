import React from 'react';
import "../../assets/css/style.css";
import {useNavigate} from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta" id="contact">
      <div className="container">

        <div className="cta-content">
          <p className="section-subtitle">Call To Action</p>

          <h2 className="h2 section-title">Ready For Unforgettable Travel. Remember Us!</h2>

          <p className="section-text">
            " Remember us as your gateway to unforgettable adventures! Book now and let the journey begin."
          </p>
        </div>

        <button className="btn btn-secondary"  onClick={() => { navigate('/contact')}}>Contact Us!</button>

      </div>
    </section>
  );
}

export default CTA;
