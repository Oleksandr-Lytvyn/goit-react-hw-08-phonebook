import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { addFilter } from '../../redux/filterSlice';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
import { InputForm } from 'components/InputForm/InputForm';
import css from './ContactList.module.css';

export const ContactList = () => {
  const cont = useSelector(state => state.contacts);
  const fltr = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const delCont = submit => {
    dispatch(deleteContact(submit.target.id));
  };

  const filteredContacts = cont.data.filter(cont =>
    cont.name.toLowerCase().includes(fltr.toLowerCase())
  );
  return (
    <>
      <div className={css.contacts_section}>
        <InputForm />
        <div className={css.filter_section}>
          <h2>filter</h2>
          <input
            type="text"
            name="filter"
            placeholder="search name"
            onInput={event => {
              dispatch(addFilter(event.target.value));
            }}
          />
        </div>
        {isLoading && <b>Loading contacts...</b>}
        {filteredContacts.length === 0 && <b>No contacts...</b>}
        {error && <b>{error}</b>}
        <ul className={css.contacts_list}>
          {filteredContacts.map(cont => (
            <li key={cont.id} className={css.contacts_item}>
              <span>
                {cont.name}: {cont.number}
              </span>
              <button
                id={cont.id}
                className={css.btn_contact}
                type="button"
                onClick={submit => {
                  delCont(submit);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
