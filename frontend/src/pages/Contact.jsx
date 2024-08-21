import React, { useState } from 'react';
import ContactImage from "../assets/images/contact-banner.jpeg";
import SubHero from '../components/SubHero/SubHero';
import '../assets/css/Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:4000/api/contacts/', formData);
        console.log(response);
        if (response.status === 201) {
          alert('Information received, we will communicate shortly.');
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            description: '',
          });
          setErrors({});
        }
      } catch (error) {
        console.error('There was an error sending the data:', error);
        alert('There was an error sending your information. Please try again.');
      }
    }
  };

  return (
    <>
      <SubHero 
        imageUrl="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="_Contact us_"
        subheading="Swing by for a cup of coffee, or leave us a message:"
      />
      <div className="contact-container">
        <div className="contact-row">
          <div className="contact-column contact-image-column">
            <img src={ContactImage} alt="Map" className="contact-image" />
          </div>
          <div className="contact-column contact-form-column">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name.."
              />
              {errors.name && <span className="error">{errors.name}</span>}
              
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email.."
              />
              {errors.email && <span className="error">{errors.email}</span>}
              
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number.."
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
              
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write something.."
              ></textarea>
              {errors.description && <span className="error">{errors.description}</span>}
              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
