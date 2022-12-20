const selectContacts = state => state.contacts.items;
const selectLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

export {selectContacts, selectLoading, selectError};