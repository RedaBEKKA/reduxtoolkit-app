import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Votre Nom..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Votre pseudo..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            )
          }
        >
          Ajouter un utilisateur
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((eachUser) => {
          return (
            <>
              <h1>{eachUser.name}</h1>
              <h1>{eachUser.username}</h1>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
