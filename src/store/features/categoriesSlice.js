import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance, instanceWithToken } from 'configs/instance';

export const getCategories = createAsyncThunk(
    'categories/get',
    async (data, { rejectWithValue }) => {
        try {

            const response = await instance.get('categories')

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

            const response = await instanceWithToken.post('categories', data)

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

            const response = await instanceWithToken.patch(`categories/${id}`, { name })

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

            const response = await instanceWithToken.delete(`categories/${id}`)

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