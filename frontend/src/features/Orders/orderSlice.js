import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../Pages/OrderDetailsPage/cartItems';
const initialState = {
  orderItems: cartItems,
  totalPrice: 0,
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
    noOfCartItems: (state) => {
      let quantity = 0;
      let totalPrice = 0;
      state.orderItems.forEach((item) => {
        quantity += item.quantity;
        totalPrice += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.totalPrice = totalPrice;
      console.log(totalPrice);
    },
  },
});
export const { increment, removeItem, decrement, noOfCartItems } =
  orderSlice.actions;

export default orderSlice.reducer;
