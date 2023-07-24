import React from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts, getStatusFilter, getIsLoading } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ol>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ol>
      {isLoading && <p>update list...</p>}
    </ContactListContainer>
  );
};

export default ContactList;