import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from 'redux/contacts/filterSlice';
import { getFilterValue } from 'redux/contacts/selectors';
import { FilterStyled } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  return (
    <label>
      Find contact by name
      <input
        type="text"
        value={filterValue}
        onChange={e => dispatch(changeValue(e.target.value))}
      />
    </label>
  );
}
