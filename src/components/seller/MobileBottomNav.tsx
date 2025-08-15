import { useEffect, useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import {
  FaChevronUp,
  FaCog,
  FaCreditCard,
  FaFileAlt,
  FaLock,
  FaUser,
} from "react-icons/fa";
// import { LuUsers2 } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { CgMenuRight } from "react-icons/cg";
import { RiLineChartLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function MobileBottomNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        moreMenuRef.current &&
        event.target &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {/* Dashboard */}
        <NavLink
          to="/seller/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#e65800]" : "text-gray-700"
            }`
          }
        >
          <RxDashboard size={22} />
          <span className="text-xs">Dashboard</span>
        </NavLink>

        {/* Products */}
        {/* <NavLink
          to="/seller/products"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#e65800]" : "text-gray-700"
            }`
          }
        >
          <BsBoxSeam size={22} />
          <span className="text-xs">Products</span>
        </NavLink> */}

        {/* Customers */}
        {/* <NavLink
          to="/seller/customers"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#e65800]" : "text-gray-700"
            }`
          }
        >
          <LuUsers2 size={22} />
          <span className="text-xs">Customers</span>
        </NavLink> */}

        {/* Orders */}
        <NavLink
          to="/seller/orders"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#e65800]" : "text-gray-700"
            }`
          }
        >
          <BsCart3 size={22} />
          <span className="text-xs">Orders</span>
        </NavLink>

        {/* Wallet  */}
        <NavLink
          to="/seller/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#e65800]" : "text-gray-700"
            }`
          }
        >
          <LuWallet size={22} />
          <span className="text-xs">Wallet</span>
        </NavLink>

        {/* Reports  */}
        <NavLink
          to="/seller/reports"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#e65800]" : "text-gray-700"
            }`
          }
        >
          <RiLineChartLine size={22} />
          <span className="text-xs">Reports</span>
        </NavLink>

        {/* More Button */}
        <button
          className="flex flex-col items-center text-gray-700"
          onClick={() => setMoreOpen(!moreOpen)}
        >
          <CgMenuRight size={22} />
          <span className="text-xs">More</span>
        </button>
      </div>

      {/* More Menu Dropdown */}
      {moreOpen && (
        <div
          ref={moreMenuRef}
          className="absolute bottom-[55px] right-4 bg-white shadow-lg border rounded-md w-48 p-3 space-y-2"
        >
          <NavLink
            to="/seller/profile"
            className={({ isActive }) =>
              `flex items-center gap-x-2 py-2 ${
                isActive ? "text-[#e65800]" : "text-gray-700"
              }`
            }
          >
            <FaUser />
            Profile
          </NavLink>

          {/* Settings with Children */}
          <button
            className="flex items-center justify-between w-full text-gray-700 py-2"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <span className="flex items-center gap-x-2">
              <FaCog />
              Settings
            </span>
            <FaChevronUp
              className={`${settingsOpen ? "rotate-180" : ""}`}
              size={14}
            />
          </button>

          {settingsOpen && (
            <div className="ml-5 mt-1 flex flex-col gap-y-2">
              <NavLink
                to="/seller/settings/profile-info"
                className="flex items-center gap-x-2 py-2 text-gray-700"
              >
                <FaUser /> Profile settings
              </NavLink>
              <NavLink
                to="/seller/settings/payment-method"
                className="flex items-center gap-x-2 py-2 text-gray-700"
              >
                <FaCreditCard /> Payment Method
              </NavLink>
              <NavLink
                to="/seller/settings/documents"
                className="flex items-center gap-x-2 py-2 text-gray-700"
              >
                <FaFileAlt /> Document
              </NavLink>
              <NavLink
                to="/seller/settings/security"
                className="flex items-center gap-x-2 py-2 text-gray-700"
              >
                <FaLock /> Security
              </NavLink>
            </div>
          )}

          <NavLink
            to="/seller/reports"
            className={({ isActive }) =>
              `flex items-center gap-x-2 py-2 ${
                isActive ? "text-[#e65800]" : "text-gray-700"
              }`
            }
          >
            📊 Reports
          </NavLink>

          <NavLink
            to="/seller/promotions"
            className={({ isActive }) =>
              `flex items-center gap-x-2 py-2 ${
                isActive ? "text-[#e65800]" : "text-gray-700"
              }`
            }
          >
            🎉 Promo & Ads
          </NavLink>

          <NavLink
            to="/seller/shipments"
            className={({ isActive }) =>
              `flex items-center gap-x-2 py-2 ${
                isActive ? "text-[#e65800]" : "text-gray-700"
              }`
            }
          >
            📦 Shipments
          </NavLink>

          <NavLink
            to="/"
            className="flex items-center gap-x-2 py-2 text-gray-700"
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/login"
            className="flex items-center gap-x-2 py-2 text-gray-700"
          >
            🚪 Logout
          </NavLink>
        </div>
      )}
    </div>
  );
}
