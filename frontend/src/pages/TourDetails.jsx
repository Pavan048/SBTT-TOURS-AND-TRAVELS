import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/ToursDetailes.css";
import { FaCalendarAlt, FaMoneyBillAlt, FaUserFriends, FaRegListAlt, FaCheck, FaTimes } from 'react-icons/fa';

const TourDetails = () => {
  const { id } = useParams();  // Tour ID from URL
  const { data, error, loading } = useFetch(`http://localhost:4000/api/tours/${id}`);
  const [numPeople, setNumPeople] = useState(1); // Default number of people is 1
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [errors, setErrors] = useState({});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePeopleChange = (e) => {
    const people = parseInt(e.target.value, 10);
    setNumPeople(people);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userDetails.name) newErrors.name = "Name is required";
    if (!userDetails.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!userDetails.contact) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(userDetails.contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }
    if (numPeople < 1) newErrors.numPeople = "At least one person is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const checkoutHandler = async (amount) => {
    if (!validateForm()) return;
  
    try {
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount,
        payment_capture: 1,
        tourId: id,
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.contact,
        numberOfPeople: numPeople
      });
  
      // Construct the callback URL with query parameters
      const callbackUrl = `http://localhost:4000/api/paymentverification?tourId=${id}&numberOfPeople=${numPeople}&amount=${amount}&name=${encodeURIComponent(userDetails.name)}&email=${encodeURIComponent(userDetails.email)}&contact=${userDetails.contact}`;
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "SBTT",
        description: "SWARNABHOOMI TOURS AND TRAVELS",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: callbackUrl,  // Use the constructed callback URL
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.contact
        },
        theme: {
          "color": "#121212"
        }
      };
  
      console.log("Razorpay options: ", options);
      const razor = new window.Razorpay(options);
      razor.open();
  
    } catch (error) {
      if (error.response) {
        console.error("Error during checkout: ", error.response.data);
      } else {
        console.error("Error during checkout: ", error.message);
      }
    }
  };
  
  

  return (
    <div className="tour-details">
      {data && data.success && data.data ? (
        <div className="tour">
          <img className="tour-image" src={data.data.image} alt={data.data.name} />
          <h2 className="tour-name">{data.data.name}</h2>
          <div className="tour-info">
            <div className="tour-info-item">
              <FaCalendarAlt className="tour-info-icon" />
              <span className="tour-info-text">Start Date: {new Date(data.data.startDate).toDateString()}</span>
            </div>
            <div className="tour-info-item">
              <FaCalendarAlt className="tour-info-icon" />
              <span className="tour-info-text">End Date: {new Date(data.data.endDate).toDateString()}</span>
            </div>
            <div className="tour-info-item">
              <FaMoneyBillAlt className="tour-info-icon" />
              <span className="tour-info-text">Fare: {data.data.fare} INR</span>
            </div>
            <div className="tour-info-item">
              <FaUserFriends className="tour-info-icon" />
              <span className="tour-info-text">Max Group Size: {data.data.maxGroupSize}</span>
            </div>
            <div className="tour-info-item">
              <FaRegListAlt className="tour-info-icon" />
              <span className="tour-info-text">Package Tour: {data.data.packageTour ? <FaCheck className="check-icon" /> : <FaTimes className="times-icon" />}</span>
            </div>
          </div>
          <h3 className="section-heading">Itinerary</h3>
          <ul className="itinerary-list">
            {data.data.itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="section-heading">Includes</h3>
          <ul className="includes-list">
            {data.data.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          {/* User Details Form */}
          <div className="user-details-form">
            <h3 className="section-heading">Your Details</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                type="tel"
                name="contact"
                value={userDetails.contact}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                required
              />
              {errors.contact && <p className="error-text">{errors.contact}</p>}
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <input
                type="number"
                min="1"
                value={numPeople}
                onChange={handlePeopleChange}
                required
              />
              {errors.numPeople && <p className="error-text">{errors.numPeople}</p>}
            </div>
          </div>

          {/* Checkout Button */}
          <button
            className="book-now-btn"
            onClick={() => checkoutHandler(data.data.fare * numPeople)}
          >
            Book Now for {data.data.fare * numPeople} INR
          </button>
        </div>
      ) : (
        <div>No tour available</div>
      )}
    </div>
  );
};

export default TourDetails;
