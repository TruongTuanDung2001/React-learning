import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdminLayoutPage(){
    return (
        <div className="adminLayout">
            <Navbar/> 
            {/* cái chỗ navbar này thì: mỗi trang như user hay admin sẽ có 1 cái navbar riêng. Nên sau này có thể thay đổi chỗ navbar là của thiết kế riêng navbar cho từng trang sử dụng nó */}

            {/* outlet */}
            <Outlet/>
        </div>
    )
}