import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick, type }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
