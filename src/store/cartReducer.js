import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct(state, action) {
      state.products.push({
        id: action.payload.id,
        image: action.payload.image,
        available: action.payload.available,
        count: action.payload.count,
        price: action.payload.price,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const {addProduct, removeProduct, setCount} = cartSlice.actions;

export default cartSlice.reducer;
