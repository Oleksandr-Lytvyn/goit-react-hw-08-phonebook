import PropTypes from 'prop-types';
import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { deleteContact } from 'redux/contacts/contactsOperation';

import css from './ContactItem.module.css';

export default function ContactItem({ _id, name, phone }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(_id));
  };
  return (
    <li className={css.contact_item}>
      <p>
        {name} {phone}
      </p>
      <button className={css.button_del} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
