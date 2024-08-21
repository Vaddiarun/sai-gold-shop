import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems: [],
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartitems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if item already exists
            } else {
                state.cartitems.push({ ...action.payload, quantity: 1 });
            }
            console.log(state.cartitems); // Debug log
        },
        removeCartItem: (state, action) => {
            state.cartitems = state.cartitems.filter(item => item.id !== action.payload);
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartitems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1; // Decrease quantity if greater than 1
            } else {
                state.cartitems = state.cartitems.filter(item => item.id !== action.payload); // Remove item if quantity is 1
            }
        },
    },
});

export const { addToCart, removeCartItem, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;
