import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import trashIcon from "../svg/trash.svg";
import { deleteItem, toggleCart } from "../features/cart/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //ID, Title, Price
  return (
    cart.visible && (
      <div className=" w-[500px]  absolute z-30 bg-white top-[56px] right-0 shadow rounded-md flex flex-col">
        {cart?.items?.map((item) => {
          return (
            <div
              to={"/product/1"}
              className="p-5 hover:bg-gray-100 flex items-center justify-between"
            >
              <Link
                to={"/product/" + item.id}
                onClick={() => {
                  dispatch(toggleCart());
                }}
              >
                {item.title}
              </Link>
              <div className=" pr-5 font-bold">${item.price}</div>
              <button
                onClick={() => {
                  dispatch(
                    deleteItem({ id: item.id, price: item.price, piece: 1 })
                  );
                }}
              >
                <img src={trashIcon} alt="" />
              </button>
            </div>
          );
        })}

        <Link to={"/pay"} className="p-5 hover:bg-gray-100 font-bold">
          Итого: {cart?.items?.length} товаров и ${cart.price}| Перейти к оплате
        </Link>
      </div>
    )
  );
}

export default Cart;
