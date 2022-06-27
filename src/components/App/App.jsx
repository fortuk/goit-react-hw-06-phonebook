import '../App/App.module.css';
import ContactForm from '../ContactForm';
import Filter from '../ContactList';
import Section from '../Section';

function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
    </Section>
  );
}
export default App;