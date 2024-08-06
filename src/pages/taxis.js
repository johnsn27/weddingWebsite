/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
        </div>
      );
};

export default Taxis;
