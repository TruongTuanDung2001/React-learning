import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Admin Products</Link>
        </li>
        <li>
          <Link to="/admin/users">Admin Users</Link>
        </li>
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
