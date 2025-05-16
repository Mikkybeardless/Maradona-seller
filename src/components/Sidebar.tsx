import { TbTruckDelivery } from "react-icons/tb";
import { LuGift } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { PiSealPercent } from "react-icons/pi";
import { TbLayoutDashboard } from "react-icons/tb";
import { SlChart } from "react-icons/sl";
import { LuWallet } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import reports from "../assets/analytics-up.svg";
import reports2 from "../assets/analytics-up2.svg";
import promotions from "../assets/discount-tag.svg";
import promotions2 from "../assets/discount-tag2.svg";
import { BsBoxSeam } from "react-icons/bs";
// import { GoGear } from "react-icons/go"

export default function Sidebar() {
  return (
    <div className="h-full basis-[15.5%] flex flex-col px-4 py-5 gap-y-3 border-r border-r-[#E6E6E6] bg-[#F5F5F5]">
      <img className="h-[45px] w-fit" src={logo} alt="logo" />

      <div className="flex flex-col gap-y-2.5 flex-1 w-full mt-7">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <TbLayoutDashboard size={24} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Dashboard</span>
        </NavLink>

        <NavLink
          to="products"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <BsBoxSeam size={20} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Products</span>
        </NavLink>

        <NavLink
          to="customers"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <HiOutlineUsers size={24} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Customers</span>
        </NavLink>

        {/* <NavLink
                    to="listings"
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "bg-defaultOrange text-white"
                                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
                        } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
                    }
                >
                    <BsBoxSeam
                        size={24}
                        className="transition-none flex-shrink-0"
                    />
                    <span className="line-clamp-1">Listings</span>
                </NavLink> */}

        <NavLink
          to="orders"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <LuGift size={24} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Orders</span>
        </NavLink>

        <NavLink
          to="reports"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          {/* <SlChart size={24} className="transition-none flex-shrink-0" /> */}
          {window.location.href.includes('seller/reports') ? <img src={reports2} alt="reports"/> : <img src={reports} alt="reports"/>}
          <span className="line-clamp-1">Reports</span>
        </NavLink>

        <NavLink
          to="promotions"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          {/* <PiSealPercent size={24} className="transition-none flex-shrink-0" /> */}
          {window.location.href.includes('seller/promotions') ? <img src={promotions2} alt="Promotions & Ads"/> : <img src={promotions} alt="Promotions & Ads"/>}
          <span className="line-clamp-1">Promotions & Ads</span>
        </NavLink>

        <NavLink
          to="/seller/wallet"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <LuWallet size={24} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Wallet</span>
        </NavLink>

        <NavLink
          to="shipments"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <TbTruckDelivery size={24} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Shipments</span>
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-defaultOrange text-white"
                : "text-[#3E3E3E] hover:bg-defaultOrange/20"
            } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
          }
        >
          <GoGear size={24} className="transition-none flex-shrink-0" />
          <span className="line-clamp-1">Settings</span>
        </NavLink>
      </div>

      <NavLink
        to="/login"
        className="w-full flex items-center gap-x-3 p-3 rounded-lg hover:bg-black/5"
      >
        <MdOutlineLogout size={24} color="crimson" />
        <span>Logout</span>
      </NavLink>
    </div>
  );
}
