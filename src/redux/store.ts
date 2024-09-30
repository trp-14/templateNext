import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../app/auth/redux/authSlice'; // Correct path to authSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
