import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import popupSlice from "../features/popup/popupSlice";
import observeSlice from "../features/observe/observeSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    popup: popupSlice,
    observe: observeSlice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
