import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance, instanceWithToken } from 'configs/instance';

export const createProduct = createAsyncThunk(
    'product/create',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instanceWithToken.post(
                'products', data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const getAllProduct = createAsyncThunk(
    'product/get-all',
    async ({ rejectWithValue }) => {
        try {
            const response = await instance.get(
                'products')
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);



const ProductsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
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
        builder.addCase(createProduct.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.products = [...state.products, action.payload];
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(getAllProduct.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(getAllProduct.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

    },
});

export default ProductsSlice.reducer;
