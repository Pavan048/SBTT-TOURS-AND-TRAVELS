import React, { useState } from 'react';
import axios from 'axios';
import './AddTour.css';

const AddTour = () => {
  const [tourData, setTourData] = useState({
    name: '',
    description: '',
    duration: '',
    itinerary: '',
    startDate: '',
    endDate: '',
    reviewDistance: '',
    image: '',
    maxGroupSize: '',
    packageTour: false,
    fare: '',
    reviews: '',
    ratings: '',
    location: '',
    includes: '',
    topRated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTourData({
      ...tourData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/tours/', {
        ...tourData,
        itinerary: tourData.itinerary.split(','), // Convert itinerary string to array
        includes: tourData.includes.split(','), // Convert includes string to array
      });
      alert('Tour added successfully!');
    } catch (error) {
      console.error('Error adding tour:', error);
      alert('Failed to add tour. Please try again.');
    }
  };

  return (
    <div className="add-tour-container">
      <h1>Add a New Tour</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={tourData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={tourData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={tourData.duration}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="itinerary"
          placeholder="Itinerary (comma-separated)"
          value={tourData.itinerary}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          value={tourData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={tourData.endDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="reviewDistance"
          placeholder="Review Distance"
          value={tourData.reviewDistance}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={tourData.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="maxGroupSize"
          placeholder="Max Group Size"
          value={tourData.maxGroupSize}
          onChange={handleChange}
          required
        />
        <label>
          Package Tour:
          <input
            type="checkbox"
            name="packageTour"
            checked={tourData.packageTour}
            onChange={handleChange}
          />
        </label>
        <input
          type="text"
          name="fare"
          placeholder="Fare"
          value={tourData.fare}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="reviews"
          placeholder="Reviews"
          value={tourData.reviews}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ratings"
          placeholder="Ratings"
          value={tourData.ratings}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={tourData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="includes"
          placeholder="Includes (comma-separated)"
          value={tourData.includes}
          onChange={handleChange}
          required
        />
        <label>
          Top Rated:
          <input
            type="checkbox"
            name="topRated"
            checked={tourData.topRated}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
};

export default AddTour;
