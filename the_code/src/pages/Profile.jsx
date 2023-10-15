import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCard from "../components/UsersCard";
import UserDetail from "../components/UserDetail";
import { toggle } from "../features/popup/popupSlice";

function Profile() {
  const data = useSelector((state) => state.auth);
  const user = data.user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggle("Yeeeeyyyy! Добро пожаловать на свой профиль 🤩"));
  });
  return (
    <main className=" w-full h-full min-h-[100vh] flex items-start justify-center">
      <div className=" flex h-full w-full max-w-[1120px] items-start justify-center min-h-[100vh] mt-10">
        <div className=" w-24 h-24 bg-yellow-500 rounded-full">
          <img
            className="w-full h-full object-cover"
            src={user.image}
            alt=""
            srcset=""
          />
        </div>
        <div className="  flex-grow grid grid-cols-3 gap-4 ml-10">
          <UserDetail label={"Имя"} name={user.firstName} />
          <UserDetail label={"Фамилия"} name={user.firstName} />
          <UserDetail label={"Email"} name={user.email} />
          <UserDetail label={"Логин"} name={user.username} />
          <UserDetail label={"ID"} name={user.id} />
          <UserDetail label={"Пол"} name={user.gender} />
        </div>
      </div>
    </main>
  );
}

export default Profile;
