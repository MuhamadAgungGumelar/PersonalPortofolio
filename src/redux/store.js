import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import localReducer from "./slices/localSlice";
import loadingReducer from "./slices/loadingSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    local: localReducer,
    loading: loadingReducer,
  },
});

store.subscribe(() => {
  console.log("store change: ", store.getState());
});

export default store;
