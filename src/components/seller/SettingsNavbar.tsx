import { CiLock, CiUser } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { TiFolderOpen } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/seller/settings/profile-info",
    label: "Profile",
    icon: <CiUser size={24} />,
  },
  {
    path: "/seller/settings/payment-method",
    label: "Payment Method",
    icon: <IoWalletOutline size={24} />,
  },
  {
    path: "/seller/settings/security",
    label: "Security",
    icon: <CiLock size={24} />,
  },
  {
    path: "/seller/settings/documents",
    label: "Documents",
    icon: <TiFolderOpen size={24} />,
  },
];

export default function SettingsNavbar() {
  return (
    <div className="w-64 bg-[#ffffff] p-4 rounded-lg">
      <nav className="flex flex-col">
        {navLinks.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path} // 🔥 Now uses an absolute path
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg font-inter font-bold text-[15px] leading-[22.5px] text-gray-700 hover:text-[#14199C] ${
                isActive ? "text-[#14199C]" : ""
              }`
            }
          >
            {icon} {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
