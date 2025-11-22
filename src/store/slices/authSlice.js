import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "John Doe", email: "johndoe@gmail.com", avatar: "" },
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

    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { logIn, logOut, setUser } = userSlice.actions;
export default userSlice.reducer;
