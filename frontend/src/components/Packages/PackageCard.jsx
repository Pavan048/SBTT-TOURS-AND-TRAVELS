import React from 'react';
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ pkg }) => {
  const navigate = useNavigate();

  return (
    <li>
      <div className="package-card">
        <figure className="card-banner">
          <img src={pkg.image} alt={pkg.name} loading="lazy" />
        </figure>
        <div className="card-content">
          <h3 className="h3 card-title">{pkg.name}</h3>
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
                <p className="text">Max: {pkg.maxGroupSize}</p>
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
            <p className="reviews">({parseInt(pkg.reviews)} reviews)</p>
            <div className="card-rating">
              {Array.from({ length: parseInt(pkg.ratings) }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>
          <p className="price">
            Rs {pkg.fare}
            <span>/ per person</span>
          </p>
          <button className="btn btn-secondary" onClick={() => navigate(`/tours/${pkg._id}`)}>Read More</button>
        </div>
      </div>
    </li>
  );
};

export default PackageCard;
