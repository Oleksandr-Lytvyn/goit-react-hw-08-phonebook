import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 5px 0;
  width: 140px;
  height: 40px;
  border-radius: 5px;
  background-color: #55c875;
  &&:hover,
  :focus {
    background-color: #84e09d;
  }
`;
export const ButtonCloseModal = styled(ButtonStyled)`
  position: absolute;
  top: 0;
  right: 0;

  /* width: 10px;
  height: 10px; */
`;
