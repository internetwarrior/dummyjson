import React, { useState } from "react";
import UserDetail from "./UserDetail";
import UserPassword from "./UserPassword";

function UsersCard(props) {
  const [visible, setVisible] = useState(false);
  const {
    address,
    age,
    bank,
    birthDate,
    bloodGroup,
    domain,
    ein,
    email,
    eyeColor,
    firstName,
    gender,
    hair,
    height,
    image,
    id,
    ip,
    lastName,
    macAddress,
    maidenName,
    password,
    phone,
    ssn,
    university,
    userAgent,
    username,
    weight,
  } = props.data;
  return (
    <>
      <div className=" w-full flex flex-col shadow rounded-[4px] p-[20px] ">
        <div className=" flex w-full">
          <div className="w-full flex items-center">
            <h4 className=" text-lg font-bold">
              {firstName} {lastName}
            </h4>
          </div>
          <div className="w-full flex flex-grow items-center justify-end">
            <button
              onClick={() => {
                setVisible((prev) => !prev);
              }}
              className={
                " py-3 px-5 rounded-full " +
                (visible ? " bg-red-600 text-white" : " bg-amber-400")
              }
            >
              {visible ? "Закрыть" : "Показать больше"}
            </button>
          </div>
        </div>
        {visible && (
          <div className=" min-h-[200px] flex w-full gap-10 mt-5">
            <div>
              <div className=" w-28 h-28 overflow-hidden">
                <img
                  src={image}
                  alt=""
                  srcset=""
                  className=" h-full w-full object-cover shadow rounded-full  bg-yellow-400"
                />
              </div>
            </div>
            <div className=" flex-grow grid grid-cols-3 gap-5">
              <h1 className="grid-col-full text-2xl text-gray-500 ">
                Личная информация:
              </h1>

              <UserDetail label={"Имя"} name={firstName} />
              <UserDetail label={"Фамилия"} name={lastName} />
              <UserDetail label={"Эл. Почта"} name={email} />
              <UserDetail label={"Возраст"} name={age} />
              <UserDetail label={"Middle name"} name={maidenName} />
              <UserDetail label={"Дата рождение"} name={birthDate} />

              <h1 className="grid-col-full text-2xl text-gray-500 mt-5">
                База данных:
              </h1>
              <UserDetail label={"ID"} name={id} />
              <UserDetail label={"Логин"} name={username} />
              <UserDetail
                label={"Пароль"}
                name={<UserPassword password={password} />}
              />
              <UserDetail
                label={"Адрес"}
                name={
                  address.address + ", " + address.city + ", " + address.state
                }
              />
              <UserDetail label={"Ip-адрес"} name={ip} />
              <UserDetail label={"Домен"} name={domain} />
              <UserDetail label={"Университет"} name={university} />
              <UserDetail label={"Телефон"} name={phone} />
              <UserDetail label={"Банк"} name={bank.cardNumber} />
              <UserDetail label={"ssn"} name={ssn} />
              <UserDetail label={"ein"} name={ein} />
              <UserDetail label={"Цвет волос"} name={hair.color} />
              <UserDetail label={"Цвет глаз"} name={eyeColor} />
              <UserDetail label={"Группа крови"} name={bloodGroup} />
              <UserDetail label={"Вес"} name={weight} />
              <UserDetail label={"Браузер Клиента"} name={userAgent} />
              <UserDetail label={"Mac-адрес"} name={macAddress} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UsersCard;
