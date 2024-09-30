import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  token: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Store username and token in Redux state
    },
    logout: (state) => {
      state.user = null; // Clear user on logout
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
