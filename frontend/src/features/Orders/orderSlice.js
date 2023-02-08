import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../Pages/OrderDetailsPage/cartItems';
const initialState = {
  orderItems: cartItems,
  total: 0,
  quantity: 4,
  isLoading: true,
};

const orderSlice = createSlice({
  name: 'orderItems',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.orderItems = state.orderItems.filter((item) => item.id !== itemId);
    },
    increment: (state, { payload }) => {
      const orderItem = state.orderItems.find((item) => item.id === payload.id);
      orderItem.quantity = orderItem.quantity + 1;
    },
    decrement: (state, { payload }) => {
      const orderItem = state.orderItems.find((item) => item.id === payload.id);
      orderItem.quantity = orderItem.quantity - 1;
    },
  },
});
export const { increment, removeItem, decrement } = orderSlice.actions;

export default orderSlice.reducer;
