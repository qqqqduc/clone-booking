import { createSlice } from "@reduxjs/toolkit";

export interface IInitialUser {
  accessToken?: string;
  refreshToken?: string;
  user?: any;
}

const initialUser: IInitialUser = {};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    loginUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    logoutUser: (state) => {
      return initialUser;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = UserSlice.actions;

export default UserSlice.reducer;
