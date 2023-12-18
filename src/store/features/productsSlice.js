import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance, instanceWithToken } from 'configs/instance';


export const productUploadImages = createAsyncThunk(
    'product/change-images',
    async ({ blobUrls, id }, { rejectWithValue }) => {
        try {

            const formData = new FormData()


            for (let i = 0; i < [...blobUrls].length; i++) {
                formData.append('image', blobUrls[i])
                console.count('formData');
            }

            console.log(formData.get('image'));


            const response = await instanceWithToken.post(
                `products/${id}/upload-image`, formData, {
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

export const createProduct = createAsyncThunk(
    'product/create',
    async ({ fullData, images }, { rejectWithValue, dispatch }) => {
        try {
            const response = await instanceWithToken.post(
                'products', fullData)

            dispatch(productUploadImages({ blobUrls: images, id: response.data.id }))
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const getAllProducts = createAsyncThunk(
    'product/get-all',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instance.get(
                'products')

            return response.data.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const getOneProduct = createAsyncThunk(
    'product/get',
    async (id, { rejectWithValue }) => {
        try {
            const response = await instance.get(`products/${id}`)
            return response.data[0];
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const editProduct = createAsyncThunk(
    'product/edit',
    async ({ data, id }, { rejectWithValue }) => {
        try {
            const response = await instanceWithToken.patch(
                `products/${id}`, data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'product/delete',
    async (id, { rejectWithValue }) => {
        try {
            await instanceWithToken.delete(
                `products/${id}`)
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);




const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        product: {},
        cart: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
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

        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'success';
            state.error = null;
        });

        builder.addCase(getOneProduct.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(getOneProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(getOneProduct.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(editProduct.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(editProduct.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(deleteProduct.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });
    },
});

export default ProductsSlice.reducer;
export const { addToCart, deleteFromCart } = ProductsSlice.actions
