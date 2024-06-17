// redux/slices/themeSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
      }
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
