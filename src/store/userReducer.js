import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push({
        id: action.payload.id,
        image: action.payload.image,
        available: action.payload.available,
        count: action.payload.count,
        price: action.payload.price,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeUser(state, action) {
      state.users = state.users.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const {addProduct, removeProduct, setCount} = cartSlice.actions;

export default cartSlice.reducer;
