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
        console.log(item)
        const {id, name, number} = item;
        const res = {
            name,
            number
        }
        const response = await axios.patch(`/contacts/${id}`, res)
        return response.data;
    } catch (e) {
        console.error(e.message, '--------error message CATCH EDIT')
        return thunkApi.rejectWithValue(e.message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data;
    }
    catch(e) {
        return thunkApi.rejectWithValue(e.message)
    }
})