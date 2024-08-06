/** @jsxImportSource @emotion/react */
import { storyPageStyle, titleStyle, paragraphStyle } from '../styles/pageStyles';

const Taxis = () => {
    return (
        <div css={storyPageStyle}>
          <h1 css={titleStyle}>Taxi Information</h1>
          <p css={paragraphStyle}>
            Dengie Taxis (Burnham) | 07496 609697<br />
            Arrow Taxis (Maldon) (Burnham) | 07496 609697<br />
            Banyards (Maldon) | 07496 609697<br />
            South Woodham Taxis (South Woodham Ferrers) | 07496 609697<br />
            Happicabs (South Woodham Ferrers) | 07496 609697<br />
            Fords Coaches (Althorne) | 07496 609697<br />
            Hailstone Travel (Wickford) | 07496 609697<br />
            Jackson’s Coaches (Bicknacre) | 07496 609697<br />
          </p>
          <br />
          <p css={paragraphStyle}>
          The wedding celebrations will conclude at 23:30. <br />
          Please arrange all transport for no later than 23:40. <br />
          Please book transport well in advance, it is almost impossible to arrange this on the night.
          </p>
          <p css={paragraphStyle}>
          When booking taxis to and from High House please ensure your location is noted as High House Wedding Venue. <br />
          This ensures our local neighbours are not disturbed when guests and taxis are locating the venue. <br />
          Unfortunately Google Maps and Sat Nav systems can be unclear as to our exact location and will generally take you too far. <br />
          Please look out for our entrance rather than relying on these.
          Please book transport well in advance, it is almost impossible to arrange this on the night.
          </p>
        </div>
      );
};

export default Taxis;
