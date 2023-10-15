import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";
import { toggleCart } from "../features/cart/cartSlice";
import cartIcon from "../svg/shopping-cart.svg";

function Header() {
  const data = useSelector((state) => state.auth);
  const user = data.user;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <header className=" h-[56px] flex w-full items-center justify-between p-8 mb-[20px]">
        <Link to="/dummyjson">
          <h1 className=" text-xl font-bold">DummyJSON</h1>
        </Link>
        <div className=" flex gap-8 items-center">
          <nav className=" flex gap-4 items-center">
            <Link to="/users" className=" text-lg ">
              Пользователи
            </Link>
            <Link to="/catalog" className="text-lg">
              Каталог Товаров
            </Link>
            <Link to="/create" className="text-lg">
              Добавить продукт
            </Link>
          </nav>
          <button
            className="flex items-center gap-1"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            <img src={cartIcon} alt="" />
            {cart.items.length}
          </button>
          {user ? (
            <div className=" flex items-center gap-2 relative profile-button ">
              <div className="  bg-white font-bold absolute bg-transparent w-fullq h-full flex items-center justify-center gap-2 px-10 py- profile-child ">
                <div className=" child-circle bg-yellow-500 "></div>
                <Link className=" hover:underline" to="/profile">
                  Профиль
                </Link>

                <button
                  className=" hover:underline"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <small className=" text-black">Выйти</small>
                </button>
              </div>
              <Link to="/profile" className=" flex items-center gap-2">
                <div className=" w-12 h-12 overflow-hidden rounded-full bg-yellow-500 z-10 profile-picture">
                  <img
                    className=" w-full h-full object-cover"
                    src={user.image}
                    alt="Фотография пользователя"
                  />
                </div>
                <div className=" relative profile-button">
                  <h3 className="text-lg font-bold ">
                    {user.firstName + " " + user.lastName}
                  </h3>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to={"/register"}>Регистрация</Link>
              <Link to={"/login"}>Войти</Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
