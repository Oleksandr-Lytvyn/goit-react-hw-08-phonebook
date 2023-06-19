import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { getFilterValue, getContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { useEffect } from 'react';

import styled from 'styled-components';

const Box = styled.div`
  flex-grow: 2;
`;

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* padding: 10px; */
`;

export default function ContactList({ onClick }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // const onClick = event => {
  //   console.log(event);
  // };

  return (
    <Box>
      {contacts.length > 0 && (
        <ListStyled>
          {visibleContacts.map(({ _id, name, phone, email }) => (
            <ContactItem
              key={_id}
              _id={_id}
              name={name}
              phone={phone}
              email={email}
              onClick={onClick}
            ></ContactItem>
          ))}
        </ListStyled>
      )}
    </Box>
  );
}
