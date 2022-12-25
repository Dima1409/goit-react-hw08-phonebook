import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//! add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; 
};

//! remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

//? POST REGISTRATION
export const register = createAsyncThunk(
    'users/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
        // successful registration -> add the token to HTTP header
        setAuthHeader(response.data.token);
        return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//? POST LOGIN
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
        // successful logIn -> add the token to HTTP header
        setAuthHeader(response.data.token);
        return response.data; 
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//? POST LOGOUT
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
        // successful logout -> remove the token from the HTTP header
        clearAuthHeader();
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//? GET USER CURRENT
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if(persistedToken === null) {
        // if there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
    // if there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    }
);
