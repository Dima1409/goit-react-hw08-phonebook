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
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.rejected, handleRejected);
    builder.addCase(editContact.pending, handlePending);
    builder.addCase(editContact.rejected, handleRejected);
    
    //? update contact
    builder.addCase(editContact.fulfilled, (state, action) => {
      console.log('a')
      state.isLoading = false;
      state.error = null;
      // const newItem = state.items.map((elem)=>{
      //   if(elem.id === action.payload.id) {
      //     elem = action.payload;
      //   }
      //   return elem;
      // })
      // state.items = newItem;
      state.items = action.payload.id
    });

    //? fetch all contacts
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });

    //? add new contact
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
 
    //? delete contact
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



