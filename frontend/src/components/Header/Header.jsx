import React from 'react';
import { FaPhone, FaBars, FaTimes, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons
import BlueLogo from "../../assets/images/logo-blue.svg";
import TourlyLogo from "../../assets/images/logo.svg";

// Header Top Component
const HeaderTop = () => (
  <div className="header-top">
    <div className="container">
      <a href="tel:+01123456790" className="helpline-box">
        <div className="icon-box">
          <FaPhone /> {/* Use FaPhone icon */}
        </div>
        <div className="wrapper">
          <p className="helpline-title">For Further Inquires :</p>
          <p className="helpline-number">8073317047 , 9964153888</p>
        </div>
      </a>
      <a href="/" className="logo">
        <img src={TourlyLogo} alt="Tourly logo" />
      </a>
      <div className="header-btn-group">
        {/* Add buttons here if needed */}
        {/* <button className="search-btn" aria-label="Search">
            <ion-icon name="search"></ion-icon>
          </button> */}
        <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
          <FaBars /> {/* Use FaBars icon */}
        </button>
      </div>
    </div>
  </div>
);

// Header Bottom Component
const HeaderBottom = () => (
  <div className="header-bottom">
    <div className="container">
      <ul className="social-list">
        {/* Social Media Icons */}
        <li>
          <a href="/" className="social-link">
            <FaFacebook /> {/* Use FaFacebook icon */}
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaTwitter /> {/* Use FaTwitter icon */}
          </a>
        </li>
        <li>
          <a href="/" className="social-link">
            <FaYoutube /> {/* Use FaYoutube icon */}
          </a>
        </li>
      </ul>
      {/* Navbar Component */}
      <Navbar />
      {/* Add any other elements/buttons here if needed */}
    </div>
  </div>
);

// Navbar Component
const Navbar = () => (
  <nav className="navbar" data-navbar>
    <div className="navbar-top">
      <a href="/" className="logo">
        <img src={BlueLogo} alt="Tourly logo" />
      </a>
      <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
        <FaTimes /> {/* Use FaTimes icon */}
      </button>
    </div>
    <ul className="navbar-list">
      {/* Navbar Links */}
      <li>
        <a href="#home" className="navbar-link" data-nav-link>Home</a>
      </li>
      <li>
        <a href="/" className="navbar-link" data-nav-link>About Us</a>
      </li>
      <li>
        <a href="#destination" className="navbar-link" data-nav-link>Destination</a>
      </li>
      <li>
        <a href="#package" className="navbar-link" data-nav-link>Packages</a>
      </li>
      <li>
        <a href="#gallery" className="navbar-link" data-nav-link>Gallery</a>
      </li>
      <li>
        <a href="#contact" className="navbar-link" data-nav-link>Contact Us</a>
      </li>
    </ul>
  </nav>
);

// Header Component combining HeaderTop and HeaderBottom
const Header = () => (
  <header className="header" data-header>
    <div className="overlay" data-overlay></div>
    <HeaderTop />
    <HeaderBottom />
  </header>
);

export default Header;
