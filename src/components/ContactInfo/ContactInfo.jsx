import styled from 'styled-components';
import { InfoHeader, List, String } from './ContactInfo.styled';
import contactImage from '../../images/contact.png';

const Box = styled.div`
  flex-grow: 1;

  height: 250px;
  /* padding: 0 10px; */
  border: 1px solid #d6d6d6;
  border-radius: 10px;
`;

export const ContactInfo = ({ contact }) => {
  return (
    <Box>
      <InfoHeader>contact information</InfoHeader>
      {contact && (
        <List>
          <li style={{ width: '50px', height: '50px', alignSelf: 'center' }}>
            <img src={contactImage} alt="contactimage" />
          </li>
          <String icon="name">{contact.name}</String>
          <String icon="email">{contact.email}</String>
          <String icon="phone">{contact.phone}</String>
        </List>
      )}
    </Box>
  );
};
