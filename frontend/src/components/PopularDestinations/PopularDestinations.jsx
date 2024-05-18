import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing the star icon from react-icons/fa
import popular1 from "../../assets/images/popular-1.jpg";
import popular2 from "../../assets/images/popular-2.jpg";
import popular3 from "../../assets/images/popular-3.jpg";

const PopularDestinations = () => {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover places</p>
        <h2 className="h2 section-title">Popular destinations</h2>
        <p className="section-text">
          Discover the allure of popular destinations and unlock a world of wonders. Your next unforgettable adventure awaits!
        </p>
        <ul className="popular-list">
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={popular1} alt="San miguel, italy" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="card-subtitle">
                  <a href="#">Italy</a>
                </p>
                <h3 className="h3 card-title">
                  <a href="#">San miguel</a>
                </h3>
                <p className="card-text">
                  Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={popular2} alt="Burj khalifa, dubai" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="card-subtitle">
                  <a href="#">Dubai</a>
                </p>
                <h3 className="h3 card-title">
                  <a href="#">Burj khalifa</a>
                </h3>
                <p className="card-text">
                  Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={popular3} alt="Kyoto temple, japan" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="card-subtitle">
                  <a href="#">Japan</a>
                </p>
                <h3 className="h3 card-title">
                  <a href="#">Kyoto temple</a>
                </h3>
                <p className="card-text">
                  Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <button className="btn btn-primary">More destinations</button>
      </div>
    </section>
  );
}

export default PopularDestinations;
