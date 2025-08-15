import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileBottomNav from "./seller/MobileBottomNav";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cookies from "js-cookie";

export default function LoggedInAuthenticator() {
  const location = useLocation();
  const { pathname } = location;
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  // const token = Cookies.get("token");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Determine which sidebar to use (or hide on mobile)
  const isSeller = pathname.startsWith("/seller");
  const isOrderTracking = pathname.includes("/seller/shipments/track");
  useEffect(() => {
    const token = Cookies.get("token");
    // console.log("Checking authentication status...");
    // console.log("Token exists:", !!token);

    if (!isAuthenticated || (!token && location.pathname !== "/login")) {
      navigate("/login");
    }
  }, [isAuthenticated, pathname]);

  // Listen for screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen">
      {/* Show Sidebar only on desktop screens */}
      {!isMobile && (
        <>{isSeller ? !isOrderTracking ? <Sidebar /> : null : null}</>
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
