import { useState, useEffect } from "react";

// local
const API = "http://localhost:3001/users";

// Fetch api
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(API);
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

// Post api
function PostUser() {
  const userData = {
    id: "6",
    name: "Trương Tuấn Dũng",
    email: "truongtuandung2001@gmail.com",
    age: 25,
    city: "Hồ Chí Minh",
    avatar: "https://i.pravatar.cc/150?img=1",
  };

  async function post() {
    //
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    //
    if (!response.ok) {
      throw new Error("Thêm user thất bại");
    } else {
      console.log("Thêm user thành công");
    }
  }
  return (
    <div>
      <button onClick={post}>Add user</button>
    </div>
  );
}


//
export { UsersList, PostUser };
