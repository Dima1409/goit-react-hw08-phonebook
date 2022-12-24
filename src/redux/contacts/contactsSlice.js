import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from './operations';

const contactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, handlePending);
    // builder.addCase(getContactById.pending, handlePending);
    // builder.addCase(getContactById.rejected, handleRejected);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.rejected, handleRejected);

    builder.addCase(editContact.pending, handlePending);
    builder.addCase(editContact.rejected, handleRejected);
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items=action.payload;
      console.log('form edit')
      // state.items.push(action.payload);
    });

    
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    // builder.addCase(getContactById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   const contact = state.items.map(elem=>elem.id===action.payload.id)
    //   console.log(contact, '-------add case ')
    //   state.items = contact;
    // });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
       state.isLoading = false;
       state.error = null;
       const index = state.items.findIndex(
         contact => contact.id === action.payload.id
       );
       state.items.splice(index, 1);
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
