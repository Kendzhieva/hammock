import { configureStore } from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import authSlice from "./features/authSlise";


const rememberedKeys = ['authSlice']

const store = configureStore({
    reducer: rememberReducer({
        authSlice: authSlice,

    }),
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]

})

export default store