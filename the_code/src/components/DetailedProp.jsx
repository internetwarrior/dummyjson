import React from "react";

function DetailedProp(props) {
  return (
    <div className=" mb-5">
      <small className=" text-gray-400">{props.label}:</small>
      <h4 className=" text-xl">{props.description}</h4>
    </div>
  );
}

export default DetailedProp;
