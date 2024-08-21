import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDollarSign, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import "../assets/css/Tours.css";
import useFetch from '../Hooks/useFetch';

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destination = queryParams.get('destination');
  const numberOfPeople = queryParams.get('numberOfPeople');
  const checkinDate = queryParams.get('checkinDate');
  const checkoutDate = queryParams.get('checkoutDate');

  const url = `http://localhost:4000/api/tours/search?destination=${destination}&numberOfPeople=${numberOfPeople}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}`;

  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const tours = data?.data || [];

  return (
    <>
      {tours.length > 0 ? (
        <div className='tour__container'>
          {tours.map((tour) => (
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
}

export default SearchResult;
