import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import "../assets/css/Tours.css";
import { useLocation, Navigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

const SearchResult = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const destination = params.get('destination');
    const people = params.get('numberOfPeople');
    const checkin = params.get('checkinDate');
    const checkout = params.get('checkoutDate');

    setSearchParams({ destination, people, checkin, checkout });
  }, [location.search]);

  useEffect(() => {
    if (searchParams) {
      const { destination, people, checkin, checkout } = searchParams;

      const queryParams = new URLSearchParams();
      if (destination) queryParams.append('destination', destination);
      if (people) queryParams.append('numberOfPeople', people);
      if (checkin) queryParams.append('checkinDate', checkin);
      if (checkout) queryParams.append('checkoutDate', checkout);

      const queryString = queryParams.toString();
      setUrl(`http://localhost:4000/api/tours/search?${queryString}`);
    }
  }, [searchParams]);

  const { data, loading, error } = useFetch(url);

  if (!searchParams) {
    // Redirect to home if search parameters are not available
    return <Navigate to="/" />;
  }

  // Handle loading and error states

  return (
    <div className="search-result">
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
        <div>No Tours Found</div>
      )}
    </div>
  );
};

export default SearchResult;
