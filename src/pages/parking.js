/** @jsxImportSource @emotion/react */
import React from 'react';
import { storyPageStyle, titleStyle, paragraphStyle } from '../styles/pageStyles';

const Parking = () => {
  return (
    <div css={storyPageStyle}>
      <h1 css={titleStyle}>Parking</h1>
      <p css={paragraphStyle}>
        Guests are welcome to leave their cars at High House overnight. Cars left overnight are done so at the owners risk and MUST be collected between 8am and 10am the following morning. There will be no access outside of these times.
      </p>
      <p css={paragraphStyle}>
        Please note that guests are not permitted to stay in the car park at High House overnight in a campervan (or similar) under any circumstances. Should you wish to stay locally, we recommend making a booking at Creeksea Place Caravan Park which is just a few minutes drive away from High House.
      </p>
    </div>
  );
};

export default Parking;
