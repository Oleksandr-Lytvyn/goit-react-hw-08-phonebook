import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  width: 50%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const InputStyled = styled.input`
  border-color: ${props => props.color};
`;
