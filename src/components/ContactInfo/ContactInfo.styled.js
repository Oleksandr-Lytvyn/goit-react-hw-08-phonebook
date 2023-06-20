import styled from 'styled-components';
import sprite from '../../images/sprite.svg';
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';
import name from '../../images/chat.svg';

const handleImageType = img => {
  switch (img) {
    case 'email':
      return email;
    case 'name':
      return name;
    case 'phone':
      return phone;
    default:
      return sprite;
  }
};

export const String = styled.li`
  display: flex;
  align-items: center;
  &:before {
    display: inline-block;
    content: '';
    margin-right: 5px;
    width: 44px;
    height: 35px;
    background-image: url(${props => handleImageType(props.icon)});
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoHeader = styled.h3`
  margin: 10px;
`;
