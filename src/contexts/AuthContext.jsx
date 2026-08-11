import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
