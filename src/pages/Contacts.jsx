import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import MyLoader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

import css from './Contacts.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export default function Contacts() {
  const { isLoading, error } = useSelector(state => state.contacts);

  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className={css.page_wrapper}>
        <h1>contacts</h1>
        {isModal && (
          <Modal setIsModal={setIsModal}>
            <ContactForm setIsModal={setIsModal} />
          </Modal>
        )}
        <button
          type="button"
          onClick={() => {
            setIsModal(true);
          }}
        >
          add new contact
        </button>

        <Filter />
        {isLoading && <MyLoader />}
        {error && <h2>An error: {error}</h2>}
        <ContactList />
      </div>
    </>
  );
}
