import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";

import Header from "./components/Header";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Popup from "./components/Popup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./features/auth/authSlice";
import Profile from "./pages/Profile";
import DetailedProduct from "./pages/DetailedProduct";
import CreateProduct from "./pages/CreateProduct";
import Cart from "./components/Cart";
import { loadItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
    dispatch(loadItems());
  });
  return (
    <>
      <Router>
        <Popup />
        <Header />
        <Cart />
        <Routes>
          <Route path="/dummyjson" element={<Main />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/product/:id" element={<DetailedProduct />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<CreateProduct />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
