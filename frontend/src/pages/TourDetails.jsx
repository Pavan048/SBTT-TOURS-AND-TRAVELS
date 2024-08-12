import React from 'react';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import "../assets/css/ToursDetailes.css";
import { FaCalendarAlt, FaMoneyBillAlt, FaUserFriends, FaRegListAlt, FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const TourDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`http://localhost:4000/api/tours/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const checkoutHandler = async (amount) => {
    try {
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { amount, payment_capture: 1 });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "SBTT",
        description: "SWARNABHOOMI TOURS AND TRAVELS",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#121212"
        },
        method: {
          netbanking: false,
          card: true,
          upi: true,
          wallet: false,
        }
      };

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
              <span className="tour-info-text">Fare: {data.data.fare}</span>
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
          <button className="book-now-btn" onClick={() => checkoutHandler(8000)}>Book Now</button>
        </div>
      ) : (
        <div>No tour available</div>
      )}
    </div>
  );
};

export default TourDetails;
