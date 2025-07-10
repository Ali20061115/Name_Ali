import React, { useState } from "react";
// import useFilterUsers from "./useFilterUsers"
import "./UserList.css"; 

function UserList() {
  const [users, setUsers] = useState(["Amina", "Daniyar", "Aliya"]);
  const [nameInput, setNameInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { filteredUsers } = useFilterUsers(users, searchTerm);

  const handleAdd = () => {
    if (nameInput.trim() === "") return;
    setUsers([...users, nameInput]);
    setNameInput("");
  };

  return (
    <div className="container">
      <h2>👥 Пайдаланушылар тізімі</h2>

      <input
        type="text"
        placeholder="Пайдаланушы аты"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className="input"
      />
      <button onClick={handleAdd} className="btn">Қосу</button>

      <input
        type="text"
        placeholder="Іздеу..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />

      <ul className="list">
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
))}
      </ul>
    </div>
  );
}

export default UserList;