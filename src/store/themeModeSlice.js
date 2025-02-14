import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    handleDarkMode: (state, action) => {
      state.darkMode = action.payload;
      console.log(state.darkMode);
    },
  },
});

export const { handleDarkMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
