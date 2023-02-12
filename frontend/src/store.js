import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/Orders/orderSlice";
import foodReducer from "./features/Food/foodSlice";
import singleFoodReducer from "./features/Food/singleFoodSlice";
const store = configureStore({
  reducer: {
    order: orderReducer,
    food: foodReducer,
    singleFood: singleFoodReducer,
  },
});
export default store;
