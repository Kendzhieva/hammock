import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import authSlice from "./features/authSlice";
import categoriesSlice from "./features/categoriesSlice";
import productsSlice from "./features/productsSlice";
import cartSlice from "./features/cartSlice";
import blogsSlice from "./features/blogsSlice";


const rememberedKeys = ['authSlice']

const store = configureStore({
    reducer: rememberReducer({
        authSlice: authSlice,
        categoriesSlice: categoriesSlice,
        productsSlice: productsSlice,
        cartSlice: cartSlice,
        blogsSlice: blogsSlice,
    }),
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]

})

export default store