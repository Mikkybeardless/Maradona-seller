import { TbTruckDelivery, TbLayoutDashboard } from "react-icons/tb";
import { LuGift } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import reports from "../assets/analytics-up.svg";
import reports2 from "../assets/analytics-up2.svg";
import promotions from "../assets/discount-tag.svg";
import promotions2 from "../assets/discount-tag2.svg";
import authService from "../api/services/auth.service";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const navigationItems = [
  {
    path: "dashboard",
    label: "Dashboard",
    icon: TbLayoutDashboard,
    iconSize: 24,
  },
  {
    path: "products",
    label: "Products",
    icon: BsBoxSeam,
    iconSize: 20,
  },
  {
    path: "customers",
    label: "Customers",
    icon: HiOutlineUsers,
    iconSize: 24,
  },
  {
    path: "orders",
    label: "Orders",
    icon: LuGift,
    iconSize: 24,
  },
  {
    path: "reports",
    label: "Reports",
    customIcon: true,
    activeImage: reports2,
    inactiveImage: reports,
  },
  {
    path: "promotions",
    label: "Promotions & Ads",
    customIcon: true,
    activeImage: promotions2,
    inactiveImage: promotions,
  },
  {
    path: "shipments",
    label: "Shipments",
    icon: TbTruckDelivery,
    iconSize: 24,
  },
  {
    path: "settings",
    label: "Settings",
    icon: GoGear,
    iconSize: 24,
  },
];

const NavItem = ({ item }: { item: (typeof navigationItems)[number] }) => {
  const renderIcon = (isActive: boolean) => {
    if (item.customIcon) {
      const imageSrc = isActive ? item.activeImage : item.inactiveImage;
      return <img src={imageSrc} alt={item.label} className="flex-shrink-0" />;
    }

    const IconComponent = item.icon;
    if (!IconComponent) return null;
    return (
      <IconComponent
        size={item.iconSize}
        className="transition-none flex-shrink-0"
      />
    );
  };

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-defaultOrange text-white"
            : "text-[#3E3E3E] hover:bg-defaultOrange/20"
        } rounded-[8px] p-2.5 px-3 flex items-center gap-x-3 text-sm w-full`
      }
    >
      {({ isActive }) => (
        <>
          {renderIcon(isActive)}
          <span className="line-clamp-1">{item.label}</span>
        </>
      )}
    </NavLink>
  );
};

export default function Sidebar() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await authService.logout();
      if (response.status === 200) {
        toast.success("Logout successful");
        setTimeout(() => {
          dispatch(logout());
          Cookies.remove("token");
        }, 500);
      }
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="h-full basis-[15.5%] flex flex-col px-4 py-5 gap-y-3 border-r border-r-[#E6E6E6] bg-[#F5F5F5]">
      <Link to="/" className="flex items-center gap-x-2">
        <img className="h-[45px] w-fit" src={logo} alt="logo" />
      </Link>

      <div className="flex flex-col gap-y-2.5 flex-1 w-full mt-7">
        {navigationItems.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-x-3 p-3 rounded-lg hover:bg-black/5"
      >
        <MdOutlineLogout size={24} color="crimson" />
        <span>Logout</span>
      </button>
    </div>
  );
}
