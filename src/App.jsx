import './App.module.css';
import ContactForm from '../src/components/ContactForm';
import ContactList from '../src/components/ContactList';
import Filter from '../src/components/Filter';
import Section from '../src/components/Section';

function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
      <Filter />
    </Section>
  );
}
export default App;