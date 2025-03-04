import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Sidebar from "./Sidebar";
import MobileBottomNav from "./seller/MobileBottomNav";

export default function LoggedInAuthenticator() {
  const location = useLocation();
  const { pathname } = location;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Listen for screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine which sidebar to use (or hide on mobile)
  const isAdmin = pathname.startsWith("/admin") && !pathname.includes("/login");
  const isSeller = pathname.startsWith("/seller");

  return (
    <div className="flex h-screen w-screen">
      {/* Show Sidebar only on desktop screens */}
      {!isMobile && (
        <>{isAdmin ? <AdminSidebar /> : isSeller ? <Sidebar /> : null}</>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>

      {/* Show Bottom Navigation only on mobile screens */}
      {isMobile && <MobileBottomNav />}
    </div>
  );
}
