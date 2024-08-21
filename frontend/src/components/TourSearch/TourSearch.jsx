import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/Tours.css";

const TourSearch = () => {
  const [formData, setFormData] = useState({
    destination: '',
    people: '',
    checkin: '',
    checkout: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.destination || !formData.people || !formData.checkin || !formData.checkout) {
      alert("Please fill out all fields.");
      return;
    }

    const queryParams = new URLSearchParams();
    if (formData.destination) queryParams.append('destination', formData.destination);
    if (formData.people) queryParams.append('numberOfPeople', formData.people);
    if (formData.checkin) queryParams.append('checkinDate', formData.checkin);
    if (formData.checkout) queryParams.append('checkoutDate', formData.checkout);

    const queryString = queryParams.toString();
    navigate(`/tours/search?${queryString}`);
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
      </div>
    </section>
  );
};

export default TourSearch;
