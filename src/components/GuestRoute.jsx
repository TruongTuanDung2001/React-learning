import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoute(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn) return <Navigate to="/admin" replace />
    return <Outlet/>
    // Kiểm tra trạng thái isLoggedIn nếu như đã đăng nhập (true) thì khi người dùng vào /login thì sẽ quay lại trang admin.
    // Nếu như người trạng thái isLoggedIn chưa đăng nhập (false) thì chạy oulet là các route con (trang login)
    // Chạy outlet vì mình sẽ bao GuesRoute > loginPage, nên return outlet là giao diện login page
}