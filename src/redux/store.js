import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";


import CategorySlice from "./Category/CategorySlice";


export const store = configureStore({
    reducer: {
        products:CategorySlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})