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
            state.status = 'Logged.';
            state.email = action.payload.email;
        },
        logout: (state, action) => {
            state.status = "checking..."
            state.uid = null;
            state.email = null;
            state.password = null;
            state.displayName = null;
            console.log("Usted se ha desconectado!");
        },
        checkingCredentials: (state, action) => {
            console.log("Checking...");
        },
        logIn: (state, action) => {
            state.status = action.payload.status;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { register, logout, checkingCredentials, logIn } = authSlice.actions;