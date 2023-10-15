import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" flex items-center justify-center">
      <p>
        Этот API не поддерживает Регистрацию Пожалуйста зайдите на{" "}
        <Link to="/users" className=" text-gray-500 underline">
          Список пользователей
        </Link>{" "}
        и подберите себе логин и пароль.
      </p>
    </div>
  );
}

export default Register;
