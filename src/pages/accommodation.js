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

const linkStyle = css`
  color: #8e5a4f; /* Consistent color with title */
  text-decoration: none;
  &:hover {
    text-decoration: underline; /* Underline on hover for better user experience */
  }
`;

const Accommodation = () => {
  return (
    <div css={storyPageStyle}>
      <h1 css={titleStyle}>Local Accommodation</h1>
      <p css={paragraphStyle}>
        <a href="http://www.theoystersmackinn.co.uk" css={linkStyle}>The Oyster Smack Inn</a> | 01621 782141<br />
        <a href="http://www.theshipinnburnham.co.uk" css={linkStyle}>The Ship Inn</a> | 01621 785057<br />
        <a href="http://www.peaberriescoffee.co.uk" css={linkStyle}>Mrs Watsons Accommodation</a> | 01621 929477<br />
        <a href="http://www.burntmillcottagebandb.com" css={linkStyle}>Burnt Mill Cottage</a> | 01621 783712<br />
        <a href="http://www.homeaway.co.uk/p6492691" css={linkStyle}>Town House</a> | 07867538875<br />
        <a href="http://www.ferryboatinnessex.com" css={linkStyle}>The Ferry Boat Inn</a> | 01621 738844<br />
        <a href="http://www.travelodge.co.uk/hotels/669/Maldon-hotel" css={linkStyle}>Travelodge Maldon</a>
      </p>
      <br />
      <p css={paragraphStyle}>
        A very thorough accommodation list for the area can be found on the Maldon District Council website: <a href="http://www.visitmaldondistrict.co.uk/places-to-stay" css={linkStyle}>www.visitmaldondistrict.co.uk/places-to-stay</a>.<br />
        The area is popular for weekend breaks, we recommend reserving accommodation as soon as possible.
      </p>
    </div>
  );
};

export default Accommodation;
