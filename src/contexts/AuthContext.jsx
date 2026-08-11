import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    // kiểm tra trạng thái login
    localStorage.getItem("isLoggedIn") === "true",
    // nếu kh có
    //      null === "true" => isLoggedIn = false => chưa login (protected xử lý và chuyển qua /login)
    //      nếu như đã login thì localStorage.setItem("isLoggedIn", "true")
    // =>   "true" === "true" => isLoggedIn = true => đã login (protected xử lý và chuyển qua outlet /admin)
  );

  // login
  function login() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  }

  // logout
  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  // Provider dùng để cung cấp dữ liệu cho các component nằm bên trong nó
  // Cái login truyền trong value là 1 function nha, log ra xem là biết
  return (
    <AuthContext.Provider value={{ name: "Dũng", isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

// Auth context là 1 cái kho lưu trữ để các component sử dụng
