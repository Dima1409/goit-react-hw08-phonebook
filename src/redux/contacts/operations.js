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



export const editContact = createAsyncThunk('contacts/editContact', async (id, thunkApi) => {
    try {
        const response = await axios.patch(`/contacts/${id}`);
        console.log(response.data, 'from operations edit')
        return response.data;
    } catch (e) {
        console.log(e, '--------error message')
        return thunkApi.rejectWithValue(e.message)
    }
})

// export const getContactById = createAsyncThunk('contacts/getContactById', async (id, thunkApi) => {
//     try {
// const response = await axios.get(`/contacts/${id}`);
// console.log(response.data, '--------ID RESPONSE')
// return response.data;
//     }
//     catch(e) {
// return thunkApi.rejectWithValue(e.message, '-------ID ERROR');
//     }
// });

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        console.log(response.data);
        return response.data;
    }
    catch(e) {
        return thunkApi.rejectWithValue(e.message)
    }
})