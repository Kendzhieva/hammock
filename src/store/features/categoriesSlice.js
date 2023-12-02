import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getAccessToken from 'utils/getAccessToken';

export const getCategories = createAsyncThunk(
    'categories/get',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'http://localhost:4430/categories')
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);


export const createCategories = createAsyncThunk(
    'categories/create',
    async (data, { rejectWithValue }) => {
        try {
            const token = getAccessToken()
            const response = await axios.post(
                'http://localhost:4430/categories', data, {
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

export const editCategories = createAsyncThunk(
    'categories/edit',
    async ({ name, id }, { rejectWithValue }) => {
        try {
            const token = getAccessToken()
            const response = await axios.patch(
                `http://localhost:4430/categories/${id}`, { name }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const deleteCategory = createAsyncThunk(
    'categories/delete',
    async (id, { rejectWithValue }) => {
        try {
            const token = getAccessToken()
            const response = await axios.delete(
                `http://localhost:4430/categories/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);



const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(createCategories.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(createCategories.fulfilled, (state, action) => {
            state.categories = [...state.categories, action.payload];
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(createCategories.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(editCategories.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(editCategories.fulfilled, (state, action) => {
            state.categories[action.payload.id].name = action.payload.name;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(editCategories.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(deleteCategory.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload);
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

    },
});

export default categoriesSlice.reducer;