import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  url: "",
};

const observeSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleOb: (state, actions) => {
      state.visible = !state.visible;
      state.url = actions.payload;
    },
  },
});

export const { toggleOb } = observeSlice.actions;
export default observeSlice.reducer;
