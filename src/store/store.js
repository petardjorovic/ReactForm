import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeModeSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    themeModeStore: themeModeSlice,
    userStore: userSlice,
  },
});

export default store;
