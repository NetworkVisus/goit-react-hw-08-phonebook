import { createSelector } from '@reduxjs/toolkit';

export const contactsSelector = state => state.contacts.items;
export const contactsLoadingSelector = state => state.contacts.isLoading;
export const contactsErrorSelector = state => state.contacts.error;

export const filterSelector = state => state.filter;

export const matchingContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
