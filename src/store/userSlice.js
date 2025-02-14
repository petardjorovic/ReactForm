import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    handleSaveUserAction: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("redux_user", JSON.stringify(action.payload));
    },

    restoreUserAction: (state, action) => {
      state.userData = action.payload;
    },

    handleLogoutUserAction: (state, action) => {
      state.userData = {};
      localStorage.removeItem("redux_user");
    },
  },
});

export const {
  handleSaveUserAction,
  handleLogoutUserAction,
  restoreUserAction,
} = userSlice.actions;
export default userSlice.reducer;
