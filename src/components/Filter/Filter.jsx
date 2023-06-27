import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from 'redux/contacts/filterSlice';
import { getFilterValue } from 'redux/contacts/selectors';

import css from './Filter.module.css';
import { FilterInput, FilterLabel } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  return (
    <FilterLabel className={css.filter_input}>
      <FilterInput
        type="text"
        value={filterValue}
        placeholder="Find contact by name"
        onChange={e => dispatch(changeValue(e.target.value))}
      />
    </FilterLabel>
  );
}
