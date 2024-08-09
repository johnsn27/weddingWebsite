/** @jsxImportSource @emotion/react */
import React from 'react';
import { storyPageStyle, titleStyle, paragraphStyle, linkStyle, containerStyle, imageStyle, textContainerStyle } from '../styles/pageStyles';
import accommodationImage from '../assets/bar1.jpg'; // Replace with the correct path to your image

const Accommodation = () => {
  return (
    <div css={storyPageStyle}>
      <div css={containerStyle}>
        <img src={accommodationImage} alt="Accommodation" css={imageStyle} />
        <div css={textContainerStyle}>
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
      </div>
    </div>
  );
};

export default Accommodation;
