import MyForm from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import ContactList from "../Components/ContactList/ContactList";
import Section from "../Components/Section/Section";

function ContactsPage() {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <MyForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList></ContactList>
      </Section>
    </>
  );
}

export default ContactsPage;
