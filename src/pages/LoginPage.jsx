import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // function login() {
  //   if (userName && password) {
  //     localStorage.setItem("isLoggedIn", true);
  //     navigate("/admin");
  //   }
  // }

  // use auth context
  const { login } = useContext(AuthContext); // lấy theo kiểu destructuring, thay vì lấy auth.login() thì làm cách này để lấy property có tên login từ object auth trả về
  
  // ở đây login kh phải là jsx mà là cú pháp để sử dụng destructuring object

  function handleLogin() {
    if (userName && password) {
      login();
      navigate("/admin");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
