import { createSlice } from '@reduxjs/toolkit';

const initState = {
  isLoggedIn: false,
  accessToken: '',
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setUserId(state, action) {
      state.userId = 'tvu20';
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
