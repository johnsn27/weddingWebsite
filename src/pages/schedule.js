/** @jsxImportSource @emotion/react */
import { storyPageStyle, titleStyle, paragraphStyle } from '../styles/pageStyles';

const Schedule = () => {
    return (
        <div css={storyPageStyle}>
          <h1 css={titleStyle}>Schedule of the Day</h1>
          <p css={paragraphStyle}>
          <b>Please arrive at the venue at 12:30 for a 13:00 ceremony</b> <br />
          </p>
        </div>
      );
};

export default Schedule;
