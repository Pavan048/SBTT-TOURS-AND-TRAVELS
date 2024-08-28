import React from 'react';
import useFetch from '../../Hooks/useFetch'; 
import { FaDollarSign, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import "../../assets/css/Tours.css";
import { Link } from 'react-router-dom';

const TourSection = () => {
  const { data, error, loading } = useFetch('https://sbtt-tours-and-travels.onrender.com/api/tours/');
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data && data.success && data.data ? (
        <div className='tour__container'>
          {data.data.map((tour) => (
            <Link to={`/tours/${tour._id}`} key={tour._id} className="tour">
              <div className='tour__thumbnail'>
                <img src={tour.image} alt={tour.name} />
              </div>
              <div className="tour__details">
                <h2>{tour.name}</h2>
                <p className="fare"><FaDollarSign /> Fare: {tour.fare}</p>
                <p className="startDate"><FaCalendarAlt /> Start Date: {new Date(tour.startDate).toDateString()}</p>
                <p className="endDate"><FaCalendarAlt /> End Date: {new Date(tour.endDate).toDateString()}</p>
                <p><FaUsers /> Max Group Size: {tour.maxGroupSize}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No tours available</div>
      )}
    </>
  );
};

export default TourSection;
