import React from 'react';
import "../../assets/css/style.css";
import Package1 from "../../assets/images/packege-1.jpg";
import Package2 from "../../assets/images/packege-2.jpg";
import Package3 from "../../assets/images/packege-3.jpg";
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const packages = [
  {
    id: 1,
    image: Package1,
    title: "Experience The Great Holiday On Beach",
    description: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    duration: "7D/6N",
    pax: 10,
    location: "Malaysia",
    reviews: 25,
    rating: 5,
    price: 750
  },
  {
    id: 2,
    image: Package2,
    title: "Summer Holiday To The Oxolotan River",
    description: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    duration: "7D/6N",
    pax: 10,
    location: "Malaysia",
    reviews: 20,
    rating: 5,
    price: 520
  },
  {
    id: 3,
    image: Package3,
    title: "Santorini Island's Weekend Vacation",
    description: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    duration: "7D/6N",
    pax: 10,
    location: "Malaysia",
    reviews: 40,
    rating: 5,
    price: 660
  }
];

const PackageCard = ({ pkg }) => (
  <li>
    <div className="package-card">
      <figure className="card-banner">
        <img src={pkg.image} alt={pkg.title} loading="lazy" />
      </figure>
      <div className="card-content">
        <h3 className="h3 card-title">{pkg.title}</h3>
        <p className="card-text">{pkg.description}</p>
        <ul className="card-meta-list">
          <li className="card-meta-item">
            <div className="meta-box">
              <FaClock />
              <p className="text">{pkg.duration}</p>
            </div>
          </li>
          <li className="card-meta-item">
            <div className="meta-box">
              <FaUsers />
              <p className="text">pax: {pkg.pax}</p>
            </div>
          </li>
          <li className="card-meta-item">
            <div className="meta-box">
              <FaMapMarkerAlt />
              <p className="text">{pkg.location}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-price">
        <div className="wrapper">
          <p className="reviews">({pkg.reviews} reviews)</p>
          <div className="card-rating">
            {Array.from({ length: pkg.rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
        <p className="price">
          ${pkg.price}
          <span>/ per person</span>
        </p>
        <button className="btn btn-secondary">Book Now</button>
      </div>
    </div>
  </li>
);

const PackageSection = () => {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Checkout Our Packages</h2>
        <p className="section-text">
          Embark on an unforgettable journey with our meticulously crafted packages designed for every traveler's dream. Whether adventure, relaxation, or cultural immersion, we have the perfect package for you.
        </p>
        <ul className="package-list">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </ul>
        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
}

export default PackageSection;
