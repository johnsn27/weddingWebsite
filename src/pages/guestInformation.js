/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const storyPageStyle = css`
  padding: 80px 20px 80px; /* Increased top padding for desktop view */
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #4a3d28;
  background: #f9f8f6; /* Subtle off-white background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
  
  @media (max-width: 768px) {
    padding: 280px 20px 80px; /* More top padding for mobile view */
  }
`;

const titleStyle = css`
  font-family: 'Dancing Script', cursive;
  font-size: 36px;
  color: #8e5a4f; /* Slightly richer color */
  margin-bottom: 30px; /* More space below title */
  text-transform: uppercase; /* Adds a touch of elegance */
`;

const paragraphStyle = css`
  font-size: 18px;
  line-height: 1.8; /* Increased line height for readability */
  margin-bottom: 30px; /* More space between paragraphs */
  text-align: left; /* Align text to the left for easier reading */
  max-width: 600px; /* Ensure paragraphs don’t stretch too wide */
  margin: 0 auto; /* Center the text block */
  color: #5a4a3a; /* Darker color for readability */
`;

const GuestInformation = () => {
  return (
    <div css={storyPageStyle}>
      <h1 css={titleStyle}>Guest Information</h1>
      <p css={paragraphStyle}>
      Nathan and Megan are getting married on Saturday July 26th 2025 at High House Weddings
      </p>
      {/* image of us? */}
    </div>
  );
};

export default GuestInformation;
