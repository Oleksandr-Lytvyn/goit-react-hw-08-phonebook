import Filter from 'components/Filter/Filter';
import styled from 'styled-components';
import MyLoader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import ContactList from 'components/ContactList/ContactList';
import { Header } from './ContactsSection.styled';
import { Button } from 'components/Button/Button';

const Box = styled.section`
  display: flex;

  height: 100vh;
  background-color: #8399ac;
  gap: 10px;
`;

const Topline = styled.div`
  display: flex;
  background-color: #c0c9d1;
  justify-content: space-between;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ContactSection = ({ setIsModal }) => {
  const { isLoading, error } = useSelector(state => state.contacts);

  return (
    <Section>
      <Topline>
        <Header>Contacts</Header>
        <Button
          type="button"
          onClick={() => {
            setIsModal(true);
          }}
        >
          new contact
        </Button>
      </Topline>

      <Filter />
      <Box>
        <ContactInfo />
        <ContactList />
      </Box>
      {isLoading && <MyLoader />}
      {error && <h2>An error: {error}</h2>}
    </Section>
  );
};
