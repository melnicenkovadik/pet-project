import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SERVER_URL } from 'shared/const/server';

interface LoginByUserName {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserName, {
    rejectValue: {
        status?: number;
    };
}>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        console.log('authData', authData);
        try {
            const response = await axios
                .post('http://localhost:8080/login', {
                    username: authData.username,
                    password: authData.password,
                }, {
                    withCredentials: true,
                    headers: {
                        Authorization: 'Bearer',
                    },
                });

            const { data } = response;
            console.log('Auth data', data);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));
            return data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue({
                status: error.response?.status,
            });
        }
    },
);
