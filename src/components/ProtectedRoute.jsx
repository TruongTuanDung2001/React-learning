import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const isLoggedIn = true;
    if(!isLoggedIn) return <Navigate to ="/login"/>
    return <Outlet /> // render ra route con của nó, nhớ nho
}