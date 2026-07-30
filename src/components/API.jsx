import { useState, useEffect } from "react";

//
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "http://localhost:3001/users",
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    getUsers();
  }, []);
  //
  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export { UsersList };
