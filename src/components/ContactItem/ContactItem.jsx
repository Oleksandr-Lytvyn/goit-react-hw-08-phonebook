import PropTypes from 'prop-types';
import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperation';

import { DeleteItemSvg, ItemStyled } from './ContactItem.styled';

import svgSprite from '../../images/sprite.svg';

export default function ContactItem({ _id, name, phone, email, onClick }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(_id));
  };
  return (
    <ItemStyled
      onClick={() => {
        onClick({ name, phone, email });
      }}
    >
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <button
        type="button"
        style={{ backgroundColor: 'transparent', padding: '0' }}
        onClick={handleDelete}
      >
        <DeleteItemSvg style={{}}>
          <use href={`${svgSprite}#icon-new-contact`}></use>
        </DeleteItemSvg>
      </button>
    </ItemStyled>
  );
}
ContactItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
