import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance, instanceWithToken } from 'configs/instance';

export const getCartProducts = createAsyncThunk(
    'product/get-cart',
    async (_, { rejectWithValue, getState }) => {
        const { cart } = getState().productsSlice
        try {
            if (!cart.length) return
            const response = await Promise.all(cart.map((item) => instance.get(`products/${item.id}`)))
            console.log(response);

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);


const cartSlice = createSlice({
    name: 'products',
    initialState: {
        product: {},
        cart: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = state.cart?.find((item) => item.id === action.payload)
            if (product) {
                product.quantity = product.quantity + 1
            } else {
                state.cart = [...state.cart, { id: action.payload, quantity: 1 }]
            }
        },
        deleteFromCart: (state, action) => {
            const product = state.cart?.find((item) => item.id === action.payload)

            if (product.quantity > 1) {
                product.quantity = product.quantity - 1
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }

        }
    },
    extraReducers: (builder) => {
        // builder.addCase(createProduct.pending, (state, action) => {
        //     state.status = 'Loading';
        //     state.error = null;
        // });
        // builder.addCase(createProduct.fulfilled, (state, action) => {
        //     state.products = [...state.products, action.payload];
        //     state.status = 'success';
        //     state.error = null;
        // });
        // builder.addCase(createProduct.rejected, (state, action) => {
        //     state.status = 'error';
        //     state.error = action.payload || null;
        // });


    },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions
