import { useState, useEffect } from "react";

// local
const API = "http://localhost:3001/users";

// Fetch api all users
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

// Post api user
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

// Put api user
function PutUser() {
  const dataUpdateUser = {
    id: "v_IEKdxfnpc", //nếu có thì id nằm ở đầu, kh thì nó cập nhật lại thì nằm cuối
    name: "Dũng Cô Đơn Da Đen",
    email: "dungcodondaden2001@gmail.com",
    age: 26,
    city: "Hồ Chí Minh",
    avatar: "https://i.pravatar.cc/150?img=1",
  };

  const id = "v_IEKdxfnpc"; //mẫu thui nho
  async function put(){
    const response = await fetch(`${API}/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdateUser)
    });

    if(!response.ok) throw new Error("Cập nhật thất bại")
    else console.log("Cập nhật thành công");
  }

  return (
    <div>
      <button onClick={put}>Put</button>
    </div>
  )
}

//
export { UsersList, PostUser, PutUser };
