import { nanoid } from '@reduxjs/toolkit';
import AddForm from 'components/addContactForm/addContactForm';
import ContactList from 'components/contactList/contactList';
import Filter from 'components/filter/filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  filterContacts,
} from 'reduxstore/contacts/slice';
import {
  addContactThunk,
  delContactThunk,
  getContactsThunk,
} from 'reduxstore/contacts/thunk';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contactInfo);
  const isLoading = useSelector(state => state.isLoading);
  console.log('isLoading', isLoading);
  const dispatch = useDispatch();

  const addContactF = (name, number) => {
    const newContact = { name, number, id: nanoid() };
    dispatch(addContact(newContact));
    dispatch(addContactThunk(newContact));
  };
  const filter = filterName => {
    dispatch(filterContacts(filterName));
  };

  const delBtn = evt => {
    const id = evt.target.id;
    dispatch(deleteContact(id));
    dispatch(delContactThunk(id));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <AddForm addContact={addContactF} />

      <h2>Contacts</h2>
      <Filter filter={filter} />
      {isLoading ? (
        <h2>is P R O C E S S I N G . . . . </h2>
      ) : (
        contacts && <ContactList arr={contacts} delBtn={delBtn} />
      )}
    </div>
  );
};

export default ContactsPage;
