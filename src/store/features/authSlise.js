import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authRegister = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4430/auth/register', data, {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const authLogin = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {

            const response = await axios.post(
                'http://localhost:4430/auth/login', data, {
                headers: { 'Content-Type': 'application/json' }
            })

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : null,
        status: 'idle',
        error: null,
    },
    reducers: {
        authLogOut: (state, action) => {
            state.status = 'idle'
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authRegister.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(authRegister.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(authRegister.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(authLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(authLogin.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });
    },
});

export default authSlice.reducer;
export const { authLogOut } = authSlice.actions
