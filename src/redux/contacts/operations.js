import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
const response = await axios.get('/contacts');
return response.data;
    }
    catch(e) {
return thunkApi.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkApi) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);



export const editContact = createAsyncThunk('contacts/editContact', async (item, thunkApi) => {
    try {
        
        console.warn('--------------------start operation update')
        const contact = (JSON.parse(item));
        const response = await axios.patch(`/contacts/${contact.id}`)
        console.log(response)
        // console.log(response.data, 'finish operations update')
        return response.data;
    } catch (e) {
        console.log(e.message, '--------error message')
        return thunkApi.rejectWithValue(e.message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        console.log(response.data, '---------------operation delete');
        return response.data;
    }
    catch(e) {
        return thunkApi.rejectWithValue(e.message)
    }
})