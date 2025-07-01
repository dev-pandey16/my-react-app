import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat(apiSlice.middleware),
})