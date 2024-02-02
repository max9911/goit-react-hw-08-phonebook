import { createSlice, nanoid } from '@reduxjs/toolkit';

import { getContactsThunk } from './thunk';

const initialState = {
  contactInfo: [],
  filterName: null,
};

const contactsSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    addContact: (state, { payload: { name, number } }) => {
      const contacts = state.contactInfo;

      const newContact = { name, number, id: nanoid() };

      const ifExist = contacts?.find(
        el => el.name.toLowerCase() === name.toLowerCase()
      );
      if (ifExist) {
        return alert(`${name} is already in contacts.`);
      } else {
        state.contactInfo.push(newContact);

        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    filterContacts: (state, { payload }) => {
      state.filterName = payload;
    },
    deleteContact: (state, { payload }) => {
      const contacts = state.contactInfo;

      state.contactInfo = contacts.filter(elm => elm.id !== payload);
      localStorage.setItem('contacts', JSON.stringify(state.contactInfo));
    },
  },
  extraReducers: builder => {
    builder.addCase(getContactsThunk.fulfilled, (state, { payload }) => {
      state.contactInfo = payload;
    });
  },
});

export const { addContact, filterContacts, deleteContact } =
  contactsSlice.actions;

export const contacsR = contactsSlice.reducer;
