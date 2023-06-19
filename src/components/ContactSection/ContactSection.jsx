import React, { useState } from 'react';
import Filter from 'components/Filter/Filter';
import styled from 'styled-components';
import MyLoader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import ContactList from 'components/ContactList/ContactList';
import { Button } from 'components/Button/Button';

const Box = styled.section`
  display: flex;

  height: 100vh;
  /* background-color: #8399ac; */
  gap: 10px;
`;

const Topline = styled.div`
  margin: 10px 0;
  display: flex;
  /* background-color: #c0c9d1; */
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const ContactSection = ({ setIsModal }) => {
  const { isLoading, error } = useSelector(state => state.contacts);

  const [contact, setContact] = useState(null);
  const onClick = cont => {
    setContact(cont);
  };

  return (
    <Section>
      <Topline>
        <Filter />
        <Button
          type="button"
          onClick={() => {
            setIsModal(true);
          }}
        >
          new contact
        </Button>
      </Topline>

      <Box>
        <ContactInfo contact={contact} />
        <ContactList onClick={onClick} />
      </Box>
      {isLoading && <MyLoader />}
      {error && <h2>An error: {error}</h2>}
    </Section>
  );
};
