import { Outlet } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import SettingsNavbar from "../../components/seller/SettingsNavbar";

function Settings() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      {/* Top Navbar (Dashboard Stuff) */}
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Scrollable Content Section */}
      <div className="grid grid-cols-10 flex-1 p-[50px] overflow-auto">
        {/* Sidebar (2.5/10 = 25%) */}
        <div className="col-span-2">
          <SettingsNavbar />
        </div>

        {/* Main Content (7.5/10 = 75%) */}
        <div className="col-span-8 ml-[100px]   overflow-auto max-h-[calc(100vh-100px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
