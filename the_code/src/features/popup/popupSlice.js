import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  message: "Set the message...",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggle: (state, actions) => {
      state.visible = !state.visible;
      state.message = actions.payload;
    },
  },
});

export const { toggle } = popupSlice.actions;
export default popupSlice.reducer;
