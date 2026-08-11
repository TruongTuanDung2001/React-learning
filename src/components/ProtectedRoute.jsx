import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(!isLoggedIn) return <Navigate to ="/login" replace/>
    return <Outlet /> // render ra route con của nó, nhớ nho
}