import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOb } from "../features/observe/observeSlice";

function Observe(props) {
  const observe = useSelector((state) => state.observe);
  const dispatch = useDispatch();

  return (
    observe.visible && (
      <div
        onClick={() => {
          dispatch(toggleOb("none"));
        }}
        className=" flex items-center justify-center h-full w-full  fixed min-h-full min-w-full bg-black bg-opacity-70 top-0 left-0 z-20 cursor-zoom-out"
      >
        <div className=" h-full ">
          <img className="h-full object-contain" src={observe.url} alt="" />
        </div>
      </div>
    )
  );
}

export default Observe;
