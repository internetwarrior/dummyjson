import React from "react";
import close from "../svg/close-circle-white.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../features/popup/popupSlice";

function Popup({ visible }) {
  const dispatch = useDispatch();

  const popup = useSelector((state) => state.popup);

  return (
    <>
      {popup.visible && (
        <div
          className={
            " fixed  left-[50%] translate-x-[-50%]  bottom-[50px] text-white bg-black p-5 pr-[64px] shadow rounded-[10px] min-w-[200px] fade-animation z-30"
          }
        >
          {popup.message}
          <button
            className=" absolute top-4 right-4"
            onClick={() => {
              dispatch(toggle("Closed!"));
            }}
          >
            <img src={close} alt="закрыть" />
          </button>
        </div>
      )}
    </>
  );
}

export default Popup;
