import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance, instanceWithToken } from 'configs/instance';
import getAccessToken from 'utils/getAccessToken';
import parsJWT from 'utils/parsJWT';

export const authRegister = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance.post('auth/register', data)
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

            const response = await instance.post('auth/login', data)

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

            const response = await instanceWithToken.get('users/user-info')

            return response.data;
        } catch (error) {
            if (error.response.status == '401') {
                const token = getAccessToken()
                const decodedToken = parsJWT(token)
                const currentTime = Date.now()
                if (decodedToken?.exp * 1000 < currentTime) {
                    return rejectWithValue("endSession")
                }

            }
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const editUser = createAsyncThunk(
    'auth/edit',
    async (data, { rejectWithValue }) => {
        try {

            const response = await instanceWithToken.patch('users', data)


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


            const response = await instanceWithToken.post(
                `http://localhost:4430/users/upload-avatar`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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
        builder.addCase(getUserInfo.rejected, (state, action) => {
            state.status = 'error';
            if (action.payload === "endSession") {
                state.user = null
            }
            state.error = action.payload || null;
        });
    },
});

export default authSlice.reducer;
export const { authLogOut } = authSlice.actions
