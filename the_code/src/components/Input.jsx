import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col w-full max-w-[300px]">
      <label className="text-gray-400" htmlFor="input">
        {props.label}
      </label>
      <input
        className=" py-3 px-5 shadow w-full"
        name="input"
        type={props.type}
        value={props.value}
        onChange={(e) => {
          props.setValue(e);
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
