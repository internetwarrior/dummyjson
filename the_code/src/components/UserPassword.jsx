import React, { useState } from "react";
import eyeOpen from "../svg/eye.svg";
import eyeClosed from "../svg/eye-slash.svg";
function UserPassword(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex items-center">
      <div
        onClick={() => {
          !visible && setVisible((prev) => !prev);
        }}
      >
        {visible ? props.password : "********"}
      </div>
      <img
        onClick={() => {
          setVisible((prev) => !prev);
        }}
        src={visible ? eyeOpen : eyeClosed}
        alt=""
        className=" pl-8"
      />{" "}
    </div>
  );
}

export default UserPassword;
