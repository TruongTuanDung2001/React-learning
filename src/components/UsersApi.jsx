import { useState, useEffect } from "react";

//
const API_URL = "http://localhost:3001/users";

//
export default function UsersCRUD() {
  //
  const [users, setUsers] = useState([]);
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState("");

  //
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  // get users api
  async function getUsersApi() {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) throw new Error("Get api users fails");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  // fetch api local
  useEffect(() => {
    getUsersApi();
  }, []);

  // edit or create users
  async function handleSubmit(e) {
    e.preventDefault();
    //
    const userData = {
      name: name, // nếu đặt là name: { name } là sai vì không phải là truyền biến name của useState bên trên mà là kiểu dữ liệu name: {name: ...}
      email: email,
      age: Number(age),
      city: city,
      avatar: avatar,
    };
    /*
        name → JavaScript hiểu là name: name (shorthand).
        name: value → bạn đang tự chỉ định giá trị.
        name: { name } → giá trị của name là một object có key name.
        - nếu như giống tên nhau thì sử dụng shorthand ok, nếu như khác như là fullName và biến đặt const name thì kh sử dụng được, phải sử dụng fullName: name
        vd1: const name = "Dung";
            const age = 22;

            const user = {
            name,
            age,
        };

        vd2: const price = 100;
            const product = {
            cost: price,
        };
        {
            cost: 100
        }
    */
    try {
      //
      if (editingId) {
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) throw new Error("Edit user fails");
        else console.log("Edit user success");
      } else {
        const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) throw new Error("Create user fails");
        else console.log("Create user success");
      }

      // fetch again api and reset form
      getUsersApi();
      resetForm();
    } catch (error) {
      throw new Error(error);
    }
  }

  // delete user
  async function handleDelete(id) {
    const isConfirm = confirm("Do you want delete this user ?");
    try {
      if (!isConfirm) return console.log("You was cancel delete");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Delete user fails");
      else console.log("Delete user success");
    } catch (error) {
      throw new Error(error);
    }
  }

  // get data in form
  function clickEdit(users) {
    setName(users.name);
    setEmail(users.email);
    setAge(users.age);
    setCity(users.city);
    setAvatar(users.avatar);
    //
    setEditingId(users.id);
  }

  // reset form
  function resetForm() {
    setName("");
    setEmail("");
    setAge(0);
    setCity("");
    setAvatar("");
    //
    setEditingId(null);
  }

  // render all user jsx
  return (
    <div className="inputUser">
      {/* input user */}
      {/* name */}
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* email */}
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* age */}
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      {/* city */}
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      {/* avatar */}
      <input
        type="text"
        placeholder="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        required
      />
      {/* button */}
      {!editingId ? (
        <button type="submit" onClick={handleSubmit}>
          Create User
        </button>
      ) : (
        <div>
          <button onClick={handleSubmit}>Edit User</button>
          <button onClick={resetForm}>Clear Form</button>
        </div>
      )}
      {/* all data users */}
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="listUser">
          {users.map((user) => (
            <div className="userItem" key={user.id}>
              <hr />
              <p>
                Name: {user.name} - Email: {user.email}
              </p>
              <p>
                Age: {user.age} - City: {user.city}
              </p>
              <p>Avatar: {user.avatar}</p>
              <br />

              {/* button */}
              <button onClick={() => clickEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  //end
}
