import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, getCurrentUser } from "../auth/authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isFetchUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [logIn.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [logOut.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [getCurrentUser.pending]: (state, _) => {
      state.isFetchUser = true;
      state.isLoading = true;
    },

    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchUser = false;
      state.isLoading = false;
    },

    [getCurrentUser.rejected]: (state, _) => {
      state.isFetchUser = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
