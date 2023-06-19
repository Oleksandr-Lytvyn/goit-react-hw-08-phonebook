import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/contactsOperation';
import { getContacts } from 'redux/contacts/selectors';

import css from './ContactForm.module.css';
import { ContactInput, FormBox } from './ContactForm.styled';
import { Button } from 'components/Button/Button';

export default function ContactForm({ setIsModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const type = e.target.name;
    switch (type) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();

      return Notiflix.Notify.info(`${name} is already in contacts`);
    }
    console.log({ name, email, phone });
    dispatch(addContact({ name, email, phone }));
    setIsModal(false);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <FormBox>
        <label>
          <ContactInput
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <ContactInput
            value={email}
            onChange={handleChange}
            type="tel"
            name="email"
            placeholder="Email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label>
          <ContactInput
            value={phone}
            onChange={handleChange}
            type="tel"
            name="number"
            placeholder="Number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contacts</Button>
      </FormBox>
    </form>
  );
}
