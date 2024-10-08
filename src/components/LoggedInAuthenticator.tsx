import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"
import AdminSidebar from "./AdminSidebar"

export default function LoggedInAuthenticator() {
    const location = useLocation()
    const { pathname } = location

    return (
        <div className="flex h-screen w-screen">
            {pathname.split("/")[1] === "admin" &&
            pathname.split("/")[2] !== "login" ? (
                <AdminSidebar />
            ) : pathname.split("/")[1] === "seller" ? (
                <Sidebar />
            ) : null}
            <div className="flex-1 overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}
