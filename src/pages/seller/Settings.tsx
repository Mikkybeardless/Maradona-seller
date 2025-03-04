import { Outlet } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import SettingsNavbar from "../../components/seller/SettingsNavbar";

function Settings() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      {/* Responsive Top Bar */}
      <div className="w-full py-3.5 px-6 md:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 flex-1 p-4 md:p-8 lg:p-[50px] overflow-auto">
        {/* Sidebar - Hidden on mobile, shown on md+ */}
        <div className="hidden md:block md:col-span-3 lg:col-span-2">
          <SettingsNavbar />
        </div>

        {/* Content Section */}
        <div className="md:col-span-7 lg:col-span-8 md:ml-6 lg:ml-[100px] overflow-auto max-h-[calc(100vh-100px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
