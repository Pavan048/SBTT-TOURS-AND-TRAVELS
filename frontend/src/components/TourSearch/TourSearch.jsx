import React, { useState } from 'react';
import useFetch from '../../Hooks/useFetch'; // Adjust the import path according to your project structure
import { FaDollarSign, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import "../../assets/css/Tours.css";
const TourSearch = () => {
  const [formData, setFormData] = useState({
    destination: '',
    people: '',
    checkin: '',
    checkout: '',
  });
  const [url, setUrl] = useState('');

  const { data, loading, error } = useFetch(url);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    if (formData.destination) queryParams.append('destination', formData.destination);
    if (formData.people) queryParams.append('numberOfPeople', formData.people);
    if (formData.checkin) queryParams.append('checkinDate', formData.checkin);
    if (formData.checkout) queryParams.append('checkoutDate', formData.checkout);

    const queryString = queryParams.toString();
    setUrl(`http://localhost:4000/api/tours/search?${queryString}`);
  };

  return (
    <section className="tour-search">
      <div className="container">
        <form onSubmit={handleSubmit} className="tour-search-form">
          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label">Search Destination*</label>
            <input
              type="text"
              name="destination"
              id="destination"
              placeholder="Enter Destination"
              className="input-field"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="people" className="input-label">Number of people*</label>
            <input
              type="number"
              name="people"
              id="people"
              placeholder="No.of People"
              className="input-field"
              value={formData.people}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkin" className="input-label">Checkin Date*</label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              className="input-field"
              value={formData.checkin}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkout" className="input-label">Checkout Date*</label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              className="input-field"
              value={formData.checkout}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-secondary">Inquire now</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && data.success && data.data ? (
        <div className='tour__container'>
          {data.data.map((tour) => (
            <div key={tour._id} className="tour">
              <div className='tour__thumbnail'>
                <img src={tour.image} alt={tour.name} />
              </div>
              <div className="tour__details">
                <h2>{tour.name}</h2>
                <p className="fare"><FaDollarSign /> Fare: {tour.fare}</p>
                <p className="startDate"><FaCalendarAlt /> Start Date: {new Date(tour.startDate).toDateString()}</p>
                <p className="endDate"><FaCalendarAlt /> End Date: {new Date(tour.endDate).toDateString()}</p>
                <p><FaUsers /> Max Group Size: {tour.maxGroupSize}</p>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      </div>
    </section>
  );
};

export default TourSearch;
