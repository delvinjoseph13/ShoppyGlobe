import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        //additem function is used to add the item into the cart
        additem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); 
            }
        },

        //remove the particular item in the cart
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        

        //increase in the count of the product which is selected
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) item.quantity += 1;
        },

        //decrease in the count of the product which is selected
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(cartItem => cartItem.id !== action.payload.id);
                }
            }
        },
        
        //clear all the items
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { additem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
