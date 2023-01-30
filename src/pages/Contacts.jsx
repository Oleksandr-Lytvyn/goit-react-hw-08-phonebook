import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import MyLoader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

import css from './Contacts.module.css';

export default function Contacts() {
  const { isLoading, error } = useSelector(state => state.contacts);
  return (
    <>
      <div className={css.page_wrapper}>
        <h1>contacts</h1>
        <ContactForm />
        {/* <h2 style={styles.subtitle}>Contacts</h2> */}
        <Filter />
        {isLoading && <MyLoader />}
        {error && <h2>An error: {error}</h2>}
        <ContactList />
      </div>
    </>
  );
}
