import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { getFilterValue, getContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { useEffect } from 'react';
import { ContactListStyled } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ContactListStyled>
      {contacts.length > 0 && (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
            ></ContactItem>
          ))}
        </ul>
      )}
    </ContactListStyled>
  );
}
