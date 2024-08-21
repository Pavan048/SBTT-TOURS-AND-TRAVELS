import React, { useState } from 'react';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { callOutline, mailOutline, locationOutline } from 'ionicons/icons';
import TourlyLogoSvg from "../../assets/images/logo.svg";
import "../../assets/css/style.css";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/newsletters', { email });

      if (response.data.success) {
        setMessage('Subscription successful!');
        setEmail(''); // Clear the input field after successful submission
        alert('Thanks for subscribing . you will get our emails soon..');
      } else {
        setMessage(response.data.message || 'Subscription failed.');
        alert(response.data.message || 'Subscription failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      alert('An error occurred. Please try again.');
    }

    // Clear the message after a few seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">

          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={TourlyLogoSvg} alt="Tourly logo" />
            </a>
            <p className="footer-text">
              Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia
              at perferendis, pretium, aenean aut ultrices.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-text">
              Feel free to contact and reach us !!
            </p>
            <ul>
              <li className="contact-item">
                <IonIcon icon={callOutline} />
                <a href="tel:+01123456790" className="contact-link">8073317047, 9964153888</a>
              </li>
              <li className="contact-item">
                <IonIcon icon={mailOutline} />
                <a href="mailto:swarnabhoomi3888@gmail.com" className="contact-link">swarnabhoomi3888@gmail.com</a>
              </li>
              <li className="contact-item">
                <IonIcon icon={locationOutline} />
                <address>#65, 1st Floor, Vinayaka Tower, 8th 'B' Main</address>
              </li>
            </ul>
          </div>

          <div className="footer-form">
            <p className="form-text">
              Subscribe to our newsletter for more updates & news !!
            </p>
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>
            {message && <p className="alert-message">{message}</p>}
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="/">SBTT TOURS & TRAVELS</a>. All rights reserved.
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="footer-bottom-link">Terms & Conditions</a>
            </li>
            <li>
              <a href="/faq" className="footer-bottom-link">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
