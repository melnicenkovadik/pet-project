import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

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
        try {
            // axios
            //                 .post('http://localhost:8000/login', {
            //                     username: authData.username,
            //                     password: authData.password,
            //                 });
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: authData.username,
                    password: authData.password,
                }),
            });
            if (!response.ok) {
                throw new Error('Server response is not ok');
            }
            const data = await response.json();
            if (!data) {
                throw new Error('Server response is empty');
            }

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
