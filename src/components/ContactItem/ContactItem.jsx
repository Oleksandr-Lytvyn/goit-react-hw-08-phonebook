import PropTypes from 'prop-types';
import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperation';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      <p>
        {name} {number}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
