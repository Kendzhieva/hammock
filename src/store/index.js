import {configureStore} from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';


const rememberedKeys = [ 'myStateIsRemembered' ]

const store = configureStore({
    reducer: rememberReducer({

    }),
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]

})

export default store