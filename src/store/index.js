import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import authSlice from "./features/authSlise";
import categoriesSlice from "./features/categoriesSlice";
import productsSlice from "./features/productsSlice";


const rememberedKeys = ['authSlice', 'categoriesSlice', 'productsSlice']

const store = configureStore({
    reducer: rememberReducer({
        authSlice: authSlice,
        categoriesSlice: categoriesSlice,
        productsSlice: productsSlice
    }),
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]

})

export default store