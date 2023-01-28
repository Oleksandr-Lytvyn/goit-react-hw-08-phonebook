import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
};
