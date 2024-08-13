
import React from 'react';
import useFetch from '../../Hooks/useFetch'; 
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import "../../assets/css/Tours.css";
import { Link } from 'react-router-dom';

const PackageSection = () => {
  const { data, error, loading } = useFetch('http://localhost:4000/api/tours/packages');
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className='package' id='package'>
        {data && data.success && data.data ? (
          <div className='container'>
            <ul className='package-list'>
              {data.data.map((pkg) => (
                <li key={pkg._id}>
                  <Link to={`/tours/${pkg._id}`}>
                    <div className="package-card">
                      <figure className="card-banner">
                        <img src={pkg.image} alt={pkg.name} loading="lazy" />
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
                              <p className="text">min: {pkg.maxGroupSize}</p>
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
                          Rs {pkg.fare}
                          <span>/ per person</span>
                        </p>
                        <button className="btn btn-secondary">Book Now</button>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No Packages available</div>
        )}
      </section>
    </>
  );
};

export default PackageSection;
