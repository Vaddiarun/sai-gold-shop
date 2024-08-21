import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";


import CategorySlice from "./Category/CategorySlice";
import CartSlice from "./Category/CartSlice";


export const store = configureStore({
    reducer: {
        products: CategorySlice,
        cart:CartSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})