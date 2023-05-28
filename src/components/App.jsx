import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: data.name.trim(),
      number: data.number.trim(),
    };
    if (newContact.name !== '' && newContact.number !== '') {
      this.setState({
        contacts: [...contacts, newContact],
      });
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <section>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <label>
          Search contacts:
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>

        {filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <p>No contacts found</p>
        )}
      </section>
    );
  }
}
