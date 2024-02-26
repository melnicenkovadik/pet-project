import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types';
import {
    loginByUserName,
} from '../services/loginByUserName';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};

export const index = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = index;
export const { reducer: loginReducer } = index;
