import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { createRSVP } from '../graphql/mutations';
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: false,
    guests: 0
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.graphql({
            query: createRSVP,
            variables: {
                input: formData
            }
          });
    //   await Amplify.API.graphql((createRSVP, { input: formData }));
      alert('RSVP submitted successfully!');
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    }
  };

  return (
        <form onSubmit={handleSubmit} style={{marginTop: '100px'}}>
          <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required />
          <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required />
          <label>
              Attending:
              <input
                  type="checkbox"
                  name="attending"
                  checked={formData.attending}
                  onChange={handleChange} />
          </label>
          <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={handleChange}
              min="0" />
          <button type="submit">Submit RSVP</button>
      </form>
  );
};

export default RSVPForm;
