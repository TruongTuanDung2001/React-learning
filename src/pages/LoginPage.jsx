import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function login() {
    if (userName && password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/admin");
    }
    //
    let isLoggedIn = localStorage.getItem("isLoggedIn");
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

      <button onClick={login}>Login</button>
    </div>
  );
}
