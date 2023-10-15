import React from "react";
import { Link } from "react-router-dom";
import cartAddIcon from "../svg/shop-add.svg";
import { useDispatch } from "react-redux";
import { setItem } from "../features/cart/cartSlice";
import { toggle } from "../features/popup/popupSlice";

function Item(props) {
  const dispatch = useDispatch();
  return (
    <div
      to={"/product/" + props.data.id}
      className=" shadow p-3 rounded-[10px] relative item-parent overflow-hidden"
    >
      <div className=" item-circle bg-yellow-500"></div>
      <div className="h-[250px]">
        <Link to={"/product/" + props.data.id}>
          <img
            src={props.data.thumbnail}
            className=" w-full h-full object-cover rounded-md"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to={"/product/" + props.data.id} className=" text-2xl mt-5">
          {props.data.title}
        </Link>
        <div>
          <div className=" text-lg font-bold flex items-center justify-between">
            <Link to={"/product/" + props.data.id}>
              {"$" + props.data.price}
              <small className=" font-thin">
                {" | Скидка: " + "$" + props.data.discountPercentage}
              </small>
            </Link>
            <button
              className=" z-20"
              onClick={() => {
                dispatch(toggle("Добавлено в карзину."));
                dispatch(
                  setItem({
                    id: props.data.id,
                    title: props.data.title,
                    price: props.data.price,
                    pieces: 1,
                  })
                );
              }}
            >
              <img src={cartAddIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
