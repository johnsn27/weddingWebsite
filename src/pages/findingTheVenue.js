/** @jsxImportSource @emotion/react */
import { storyPageStyle, titleStyle, paragraphStyle } from '../styles/pageStyles';

const Taxis = () => {
    return (
        <div css={storyPageStyle}>
          <h1 css={titleStyle}>Finding the venue</h1>
          <p css={paragraphStyle}>
          <b>Address: High House Weddings, Old Heath Road, Althorne, Essex CM3 6EW</b> <br />
          High House is located between the Althorne and Burnham on Crouch.
          When arriving from the direction of Maldon / Chelmsford you will approach High House via the B1010. 
          On passing through the village of Althorne turn left onto The Endway. 
          High House is on the right, approximately one mile from this point and well signposted on arrival.
          </p>
          <br />
          <p css={paragraphStyle}>
          <b>FOR DRIVERS AND TAXIS</b> - when booking taxis and driving to High House please ensure your location is noted as High House Wedding Venue. <br />
          This ensures our local neighbours are not disturbed when guests and taxis are locating the venue. 
          Unfortunately Google Maps and Sat Nav systems can be unclear as to our exact location and will generally take you too far.
          Please look out for our entrance rather than relying on these.
          </p>
        </div>
      );
};

export default Taxis;
