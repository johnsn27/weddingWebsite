/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { storyPageStyle, titleStyle, paragraphStyle } from '../styles/pageStyles';
import Accommodation from './accommodation';
import FindingTheVenue from './findingTheVenue';
import Parking from './parking';
import Taxis from './taxis';

const GuestInformation = () => {
  return (
    <div css={storyPageStyle}>
      <h1 css={titleStyle}>Guest Information</h1>
      <p css={paragraphStyle}>
      Nathan and Megan are getting married on Saturday July 26th 2025 at High House Weddings
      </p>
      {Accommodation()}
      {FindingTheVenue()}
      {Parking()}
      {Taxis()}
    </div>
  );
};

export default GuestInformation;
