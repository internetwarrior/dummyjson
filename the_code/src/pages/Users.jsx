import React, { useEffect, useState } from "react";
import UsersCard from "../components/UsersCard";
import close from "../svg/close-circle.svg";
import { toggle } from "../features/popup/popupSlice";
import { useDispatch } from "react-redux";
function Users() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      setUsers(data.users);
    } catch (err) {
      dispatch(toggle("Проверьте подлючение к интернету. Код ощибки: " + err));
    }
  };
  const dispatch = useDispatch();

  return (
    <main className="flex items-center justify-start flex-col">
      <div className=" flex items-start flex-col gap-2 justify-start max-w-[1120px]  min-h-[100vh] w-full ">
        {message && (
          <div className=" grid-col-full mb-[40px] shadow p-5 w-full rounded-[20px] relative">
            <h1 className=" text-2xl font-bold text-red-600 ">Внимание!!!</h1>
            <p>
              Все данные пользователей не реальные! Они были сделаны в
              оброзовательных целях от <b>dummyjson.com</b>
            </p>
            <button
              className=" absolute top-4 right-4"
              onClick={() => {
                setMessage((prev) => !prev);
              }}
            >
              <img src={close} alt="закрыть" />
            </button>
          </div>
        )}

        {users.map((user, ind) => {
          return <UsersCard key={user.id} data={user} />;
        })}
      </div>
    </main>
  );
}

export default Users;
