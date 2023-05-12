/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        password: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email;
        },
        logout: (state, action) => {
            console.log("You logged out.");
        },
        checkingCredentials: (state, action) => {
            console.log("Checking...");
        }
    }
})

export const { register, logout, checkingCredentials } = authSlice.actions;