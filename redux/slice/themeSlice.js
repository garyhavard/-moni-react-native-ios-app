import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
    // light: (state) => {
    //     state.value = "light"
    // },

    // incrementByAmount: (state, action) => {
    //     state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
