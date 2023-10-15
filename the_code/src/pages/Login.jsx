import React, { useRef, useState } from "react";
import { redirect } from "react-router";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../features/popup/popupSlice";
import { fetchUser } from "../features/auth/authSlice";
function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const sendForm = async (event) => {
    event.preventDefault();

    dispatch(fetchUser({ username: username, password: password })).then(
      (res) => {
        if (res.error) {
          dispatch(toggle("Неправильный пароль или логин 👎"));
          setTimeout(() => {
            dispatch(toggle("Попап закрыт..."));
          }, 3000);
        } else {
          dispatch(toggle("Вы успешно вошли  🙌"));
          setTimeout(() => {
            dispatch(toggle("Попап закрыт..."));
          }, 3000);
          navigate("/");
        }
      }
    );
  };

  return (
    <main className=" flex justify-center w-full min-h-[100vh] items-center">
      <form
        onSubmit={sendForm}
        ref={formRef}
        className=" max-w-[1120px] flex items-center justify-center flex-col w-full h-full gap-5"
      >
        <Input
          placeholder="Например: internetWarrior"
          label="Логин"
          type="text"
          value={username}
          setValue={(e) => {
            setUsername(e.target.value);
          }}
        ></Input>

        <Input
          value={password}
          placeholder="********"
          label="Пароль"
          type="password"
          setValue={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <input
          type="submit"
          value="Войти"
          className=" px-5 py-3 bg-black text-white rounded-[4px] w-full max-w-[300px]"
        />
      </form>
    </main>
  );
}

export default Login;
