import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  user: IUser;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
    },
    login: (state, action: PayloadAction<IUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { logout, login } = AuthSlice.actions;

export default AuthSlice.reducer;
