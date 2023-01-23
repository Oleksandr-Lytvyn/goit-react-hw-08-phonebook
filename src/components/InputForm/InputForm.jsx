import css from './InputForm.module.css';
import { addContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const InputForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.data);
  const onSubmit = event => {
    const newCont = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    if (contactList.find(cont => cont.name === newCont.name)) {
      alert(`${newCont.name} is already`);
      return;
    }
    dispatch(addContact(newCont));
  };
  return (
    <>
      <form
        className={css.form_wraper}
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event, addContact);
          event.target.reset();
        }}
      >
        <h2>add contact</h2>
        <div className={css.form_inputs}>
          <div>
            {/* <h2>Name</h2> */}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="name"
            />
          </div>
          <div>
            {/* <h2>tel</h2> */}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="phone number"
            />
          </div>

          <button className={css.button_form}>add contact</button>
        </div>
      </form>
    </>
  );
};
