import { useState, useEffect } from "react";

// local
const API = "http://localhost:3001/users";

// Fetch api all users
function UsersList() {
  const [users, setUsers] = useState([]);
  // search
  const [keyword, setKeyword] = useState("");

  //
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

  // result search
  const filteredUsers = users.filter(
    (u) => u.name.toLowerCase().includes(keyword.toLocaleLowerCase()),
    // nếu có user thiếu name:  (user.name ?? "").toLowerCase().includes(keyword.toLowerCase())
  );
  /*
  Người dùng gõ input
  → onChange chạy
  → setKeyword(giá trị mới)
  → state keyword đổi
  → React render lại UsersList
  → filteredUsers chạy lại với keyword mới
  → .map(filteredUsers) tạo UI mới
  → trình duyệt hiển thị kết quả phù hợp
  */
  //
  return (
    <div>
      <input
        type="text"
        placeholder="Tìm theo tên..."
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <h1>Users</h1>

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => DeleteUser(user.id)}>Delete</button>
        </div>
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
  async function put() {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT", //phải đủ dữ liệu nha, nếu thiếu 1 dữ liệu thì trừ id ra, sẽ xóa luôn dữ liệu đó
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdateUser),
    });

    if (!response.ok) throw new Error("Cập nhật thất bại");
    else console.log("Cập nhật thành công");
  }

  return (
    <div>
      <button onClick={put}>Put</button>
    </div>
  );
}

// Patch api user
function PatchUser() {
  const dataUpdateUser = {
    name: "Lệnh Hồ Xung",
    email: "xungbangchu@gmail.com",
  };
  const id = "T4y9YpWuClw"; // mẫu nữa nho
  //
  async function patch() {
    const response = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify(dataUpdateUser),
    });

    //
    if (!response.ok) throw new Error("Cập nhật thất bại");
    else console.log("Cập nhật thành công");
  }

  //
  return (
    <div>
      <button onClick={patch}>Patch</button>
    </div>
  );
}

// Delete api user
async function DeleteUser(id) {
  // chỗ này nếu truyền {id} thì bên nút delete phải truyền vào {id: user.id}, có thể để {} hoặc không nhưng phải khớp dữ liệu
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Xóa thất bại");
  }

  console.log("Xóa thành công");
}

//
export { UsersList, PostUser, PutUser, PatchUser };
