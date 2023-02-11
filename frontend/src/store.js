import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/Orders/orderSlice";
import foodReducer from "./features/Food/foodSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
    food: foodReducer,
  },
});
export default store;
