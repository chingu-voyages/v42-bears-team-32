
import { configureStore, getDefaultMiddleware , combineReducers } from "@reduxjs/toolkit";
import authReducer from './store/authSlice'
import foodReducer from './store/foodSlice'
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/Orders/orderSlice";
import foodReducer from "./features/Food/foodSlice";
import singleFoodReducer from "./features/Food/singleFoodSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  user: authReducer,
  order: orderReducer,
  food: foodReducer,
  singleFood: singleFoodReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware(),
})

const persistor = persistStore(store);

export { store, persistor };

