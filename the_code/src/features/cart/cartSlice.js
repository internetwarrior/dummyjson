import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  visible: false,
  price: 0,
};

const cartSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setItem: (state, actions) => {
      const localItems = JSON.parse(localStorage.getItem("cartItems"));

      state.price += actions.payload.price;

      if (state.items?.length === 0) {
        state.items = [actions.payload];
      } else {
        state.items = [...state.items, actions.payload];
      }

      if (localItems.length == 0) {
        localStorage.setItem("cartItems", JSON.stringify([actions.payload]));
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...localItems, actions.payload])
        );
      }
    },
    loadItems: (state) => {
      const items = JSON.parse(localStorage.getItem("cartItems"));
      if (items === null) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      } else {
        items.map((val, ind) => {
          state.price += val.price;
        });
        state.items = items;
      }
    },
    deleteItem: (state, actions) => {
      const items = JSON.parse(localStorage.getItem("cartItems"));
      let stop = false;
      let stop2 = false;

      state.price -= actions.payload.price;

      if (state.items?.length <= 1) {
        state.visible = false;
      }
      state.items = state.items.filter((item) => {
        if (!stop2 && item.id == actions.payload.id) {
          stop2 = true;
          return;
        }
        return item;
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          items.filter((item) => {
            if (!stop && item.id == actions.payload.id) {
              stop = true;
              return;
            }
            return item;
          })
        )
      );
    },
    toggleCart: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { setItem, deleteItem, loadItems, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
