import { configureStore, getDefaultMiddleware , combineReducers } from "@reduxjs/toolkit";
import authReducer from './store/authSlice'
import foodReducer from './store/foodSlice'



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
  food: foodReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware(),
})

const persistor = persistStore(store);

export { store, persistor };