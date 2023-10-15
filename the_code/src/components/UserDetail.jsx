import React from "react";

function UserDetail(props) {
  return (
    <div className="w-full">
      <small className=" text-gray-500">{props.label}:</small>
      <h3 className=" text-lg font-bold">{props.name}</h3>
    </div>
  );
}

export default UserDetail;
