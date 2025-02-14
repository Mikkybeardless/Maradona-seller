import { Outlet } from "react-router-dom";

export default function LoggedOutAuhtenticator() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Outlet />
    </div>
  );
}
