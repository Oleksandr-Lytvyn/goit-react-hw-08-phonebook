import { InputForm } from './InputForm/InputForm';
import { ContactList } from './ContactList/ContactList';
import { Auth } from './Auth/Auth';

export function App() {
  return (
    <section>
      <h1>Phonebook</h1>
      <Auth />
      <InputForm />
      <ContactList />
    </section>
  );
}
