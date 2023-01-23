// import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { addFilter } from '../../redux/filterSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactListWrap } from './ContactsList.styled';
import { InputForm } from 'components/InputForm/InputForm';
import css from './ContactList.module.css';

export const ContactList = () => {
  const cont = useSelector(state => state.contacts);
  const fltr = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delCont = submit => {
    dispatch(deleteContact(submit.target.id));
  };

  const filteredContacts = cont.data.filter(cont =>
    cont.name.toLowerCase().includes(fltr.toLowerCase())
  );
  return (
    <>
      <ContactListWrap>
        <div className={css.contacts_section}>
          <div className={css.filter_section}>
            <h2>filter</h2>
            <input
              type="text"
              name="filter"
              onInput={event => {
                dispatch(addFilter(event.target.value));
              }}
            />
          </div>
          <InputForm />
          {isLoading && <b>Loading contacts...</b>}
          {error && <b>{error}</b>}
          <ul className={'contacts_list'}>
            {filteredContacts.map(cont => (
              <li key={cont.id} className={'contacts_item'}>
                <span>
                  {cont.name}: {cont.number}
                </span>
                <button
                  id={cont.id}
                  className={'btn_contact'}
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
      </ContactListWrap>
    </>
  );
};
