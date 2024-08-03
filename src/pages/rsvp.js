/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createRSVP } from '../graphql/mutations';
import { getRSVPByEmail } from '../graphql/queries';

const client = generateClient();

const formContainerStyle = css`
  padding: 60px 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #4a3d28;
  background: #fff; /* Clean white background */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
  border: 2px solid #e8d4c1; /* Soft border */
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const titleStyle = css`
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
  color: #8e5a4f;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const inputStyle = css`
  width: calc(100% - 20px);
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #d0b8a4;
  font-size: 16px;
  color: #4a3d28;
  box-sizing: border-box;
  
  &:focus {
    border-color: #8e5a4f;
    outline: none;
  }
`;

const buttonStyle = css`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #8e5a4f;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #7a4c43;
  }
`;

const errorMessageStyle = css`
  color: #c62828;
  margin-top: 10px;
  font-size: 16px;
`;

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: false,
    guests: 0
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // Check if RSVP already exists
      const result = await client.graphql({
        query: getRSVPByEmail,
        variables: { email: formData.email }
      });

      if (result.data.getRSVPByEmail) {
        setErrorMessage('You have already submitted an RSVP.');
        setLoading(false);
        return;
      }

      // Submit new RSVP
      await client.graphql({
        query: createRSVP,
        variables: { input: formData }
      });

      alert('RSVP submitted successfully!');
      setFormData({
        name: '',
        email: '',
        attending: false,
        guests: 0
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setErrorMessage('An error occurred while submitting your RSVP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div css={formContainerStyle}>
      <h1 css={titleStyle}>RSVP to Our Wedding</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          css={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          css={inputStyle}
          required
        />
        <label>
          Attending:
          <input
            type="checkbox"
            name="attending"
            checked={formData.attending}
            onChange={handleChange}
            css={inputStyle}
          />
        </label>
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
          min="0"
          css={inputStyle}
        />
        <button type="submit" css={buttonStyle} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit RSVP'}
        </button>
        {errorMessage && <p css={errorMessageStyle}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RSVPForm;
