import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getAccessToken from 'utils/getAccessToken';

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

export const getUserInfo = createAsyncThunk(
    'auth/get-user-info',
    async (_, { rejectWithValue }) => {
        try {

            const token = getAccessToken()

            const response = await axios.get(
                'http://localhost:4430/users/user-info', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const editUser = createAsyncThunk(
    'auth/edit',
    async (data, { rejectWithValue }) => {
        try {

            const token = getAccessToken()

            const response = await axios.patch(
                `http://localhost:4430/users`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const changeAvatar = createAsyncThunk(
    'auth/change-avatar',
    async (blobUrl, { rejectWithValue }) => {
        try {

            const formData = new FormData()
            formData.append('avatar', blobUrl)

            const token = getAccessToken()

            const response = await axios.post(
                `http://localhost:4430/users/upload-avatar`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
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
        user: null,
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

        builder.addCase(editUser.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(editUser.fulfilled, (state, action) => {
            state.user = { ...state.user, ...action.payload };
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(editUser.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(changeAvatar.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(changeAvatar.fulfilled, (state, action) => {
            state.user.avatar = action.payload?.avatarPath;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(changeAvatar.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.user = { ...state.user, ...action.payload };
            state.status = 'success';
            state.error = null;
        });
    },
});

export default authSlice.reducer;
export const { authLogOut } = authSlice.actions
