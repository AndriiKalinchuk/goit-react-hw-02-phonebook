import React from 'react';
import { nanoid } from 'nanoid';

const ContactList = props => {
  const { contacts } = props;
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
