import React, { useState } from 'react';
import { css } from '@emotion/react';

// Updated styles for the story page
export const storyPageStyle = css`
  padding: 80px 20px 80px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #003366; /* Deep Greek blue for text */
  background: #f4f4f2; /* Soft white background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 280px 20px 80px;
  }
`;

// Updated styles for the title
export const titleStyle = css`
  font-family: 'Dancing Script', cursive;
  font-size: 36px;
  color: #003366; /* Deep Greek blue for title */
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px; /* Adds a bit more elegance */
`;

// Updated styles for the paragraph text
export const paragraphStyle = css`
  font-size: 18px;
  color: #006699; /* Medium Greek blue for links */
  font-family: 'Great Vibes', cursive; /* Wedding-like cursive font for links */
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  color: #5a4a3a; /* Softer brown tone for readability */
`;

// Updated styles for links
export const linkStyle = css`
  color: #006699; /* Medium Greek blue for links */
  text-decoration: none;
  font-family: 'Great Vibes', cursive; /* Wedding-like cursive font for links */
  
  &:hover {
    text-decoration: underline;
    color: #003366; /* Deep Greek blue on hover */
  }
`;
