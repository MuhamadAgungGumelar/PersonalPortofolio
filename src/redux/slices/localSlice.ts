import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLocale: "en",
};

export const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    setLocale: (state, action) => {
      const newLocale = state.isLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      state.isLocale = newLocale;
    },
    initializeLocale: (state, action: PayloadAction<string>) => {
      state.isLocale = action.payload;
    },
  },
});

export const { setLocale, initializeLocale } = localSlice.actions;
export default localSlice.reducer;
