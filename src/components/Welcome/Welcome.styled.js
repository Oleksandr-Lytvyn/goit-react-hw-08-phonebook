import styled from 'styled-components';

import imgBg from '../../images/Welcome-bg.jpg';

export const WelcomeSection = styled.section`
  /* width: 100vw; */
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(207, 227, 227, 0.6) 58.58%,
      rgba(207, 227, 227, 0.345172) 78.98%,
      rgba(207, 227, 227, 0) 100%
    ),
    url(${imgBg});
  background-size: cover;
`;

export const WelcomeBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;
`;
