import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    auth: false,
  },

  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      state.auth = true;
      console.log(state.auth);

      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logOut: (state) => {
      state.user = null;
      state.auth = false;
      localStorage.clear();
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
