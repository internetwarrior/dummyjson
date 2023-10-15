import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate, history } from "react-router";
import { redirect } from "react-router-dom";
const initialState = {
  loading: false,
  user: false,
};

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (user = {}, { rejectWithValue }) => {
    return fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return rejectWithValue("fail");
        }
      })
      .catch((err) => {
        console.log(err);
        return {};
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = false;
      localStorage.removeItem("user");
    },

    checkUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != "null") {
        state.user = user;
      } else {
        state.user = false;
      }
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    [fetchUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setUser, checkUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
