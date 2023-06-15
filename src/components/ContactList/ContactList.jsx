import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { getFilterValue, getContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { useEffect } from 'react';

import css from './ContactList.module.css';
import styled from 'styled-components';

const Box = styled.div`
  flex-grow: 2;
  background-color: #e3ebf9;
`;

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Box>
      {contacts.length > 0 && (
        <ul>
          {visibleContacts.map(({ _id, name, phone }) => (
            <ContactItem
              key={_id}
              _id={_id}
              name={name}
              phone={phone}
            ></ContactItem>
          ))}
        </ul>
      )}
    </Box>
  );
}
