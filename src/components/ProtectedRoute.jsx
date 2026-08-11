import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function ProtectedRoute(){
    // const isLoggedIn = localStorage.getItem("isLoggedIn"); // nếu sử dụng như v thì bên auth context sẽ kh sử dụng state của context

    const { isLoggedIn } = useContext(AuthContext);
    console.log(isLoggedIn);
    
    if(!isLoggedIn) return <Navigate to ="/login" replace/>
    return <Outlet /> // render ra route con của nó, nhớ nho
}