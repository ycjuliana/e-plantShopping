import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    numOfItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; 
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
        state.numOfItems ++;
      },
    removeItem: (state, action) => {
        // const item = state[action.payload];
        // if (item && item.quantity > 0) {
        //     item.quantity--;
        // }
        const { name } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
        state.numOfItems --;        
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; 
        const itemToUpdate = state.items.find(item => item.name === name);
        if(itemToUpdate.quantity > 0){
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity; 
        }}
        else{
            handleRemove();
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
