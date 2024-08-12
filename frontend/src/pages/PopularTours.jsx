import React from 'react';
// import '../assets/css/PopularDestinations.css'; // Ensure you create this CSS file for styles
import PopularImage from "../assets/images/tour-img01.jpg";
const tours = [
  {
    imgSrc: PopularImage,
    alt: 'Kuala Lumpur, Malaysia',
    days: 'P12D',
    duration: '12 Days',
    price: 'From $50.00',
    rating: 4,
    reviews: 2,
    title: 'A good traveler has no fixed plans and is not intent on arriving.',
    location: 'Kuala Lumpur, Malaysia',
  },
  {
    imgSrc: PopularImage,
    alt: 'Kuala Lumpur, Malaysia',
    days: 'P12D',
    duration: '12 Days',
    price: 'From $50.00',
    rating: 4,
    reviews: 2,
    title: 'A good traveler has no fixed plans and is not intent on arriving.',
    location: 'Kuala Lumpur, Malaysia',
  },
  {
    imgSrc:PopularImage,
    alt: 'Kuala Lumpur, Malaysia',
    days: 'P12D',
    duration: '12 Days',
    price: 'From $50.00',
    rating: 4,
    reviews: 2,
    title: 'A good traveler has no fixed plans and is not intent on arriving.',
    location: 'Kuala Lumpur, Malaysia',
  },
  // Add more tours as needed
];

const PopularTours = () => {
  return (
    <section className="section popular">
      <div className="container">
        <p className="section-subtitle">Featured Tours</p>
        <h2 className="h2 section-title">Most Popular Tours</h2>
        <ul className="popular-list">
          {tours.map((tour, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href="/">
                    <img
                      src={tour.imgSrc}
                      width="740"
                      height="518"
                      loading="lazy"
                      alt={tour.alt}
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime={tour.days}>{tour.duration}</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">{tour.price}</div>
                    <div className="card-rating">
                      {[...Array(5)].map((star, i) => (
                        <ion-icon
                          key={i}
                          name={i < tour.rating ? "star" : "star-outline"}
                        ></ion-icon>
                      ))}
                      <data value={tour.reviews}>({tour.reviews})</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="/">{tour.title}</a>
                  </h3>
                  <address className="card-location">{tour.location}</address>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularTours;
