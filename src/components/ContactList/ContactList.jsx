import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;

const ContactItem = ({ contact, onDeleteContact }) => (
  <li key={contact.id}>
    <span>{contact.name}</span>
    <span>{contact.number}</span>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);
