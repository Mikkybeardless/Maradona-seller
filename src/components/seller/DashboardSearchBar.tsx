import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import img1 from "../../assets/discount-bg.png";

export default function DashboardSearchBar() {
  const location = useLocation();
  const pathName = location.pathname;

  const pageTitle =
    pathName
      .split("/")
      .filter(Boolean)
      .slice(-1)[0]
      ?.replace("-", " ")
      ?.replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard";

  return (
    <div className="w-full h-full flex justify-between items-center">
      {pathName === "/seller/dashboard" && (
        <div className="md:flex hidden items-stretch gap-x-4 w-[100%] md:w-[60%] ">
          <div className="flex  items-stretch gap-x-4 pl-4 flex-1 rounded-lg border border-primaryBorder">
            <CiSearch className="h-fit w-fit my-auto" size={24} />
            <input
              className="flex-1 py-3 outline-none border-none text-sm"
              placeholder="Property type, location, price range"
              type="text"
            />
            <select className="px-3 border text-sm border-primaryBorder">
              <option>All</option>
            </select>
          </div>
          <button className="px-7 rounded-lg text-sm font-semibold text-white bg-defaultOrange hover:bg-defaultOrangeHover">
            Search
          </button>
        </div>
      )}
      {[
        "/seller/reports",
        "/seller/reports/sale-report",
        "/seller/reports/revenue-report",
        "/seller/reports/expenses-report",
        "/seller/reports/financial-tracking",
      ].includes(pathName) && (
        <div className="hidden md:flex justify-center items-center border border-[#1137D080] rounded-md px-7 py-2 bg-white w-[513px] h-[60ox]">
          <FaSearch size={24} className="text-[#1137D0] mr-2" />
          <input
            type="text"
            placeholder="Search Here..."
            className="outline-none w-full bg-transparent"
          />
        </div>
      )}
      <div className="md:hidden flex justify-center items-center border  rounded-md px-7 py-2 bg-white w-[70%] ">
        <FaSearch size={24} className="text-[#1137D0] mr-2" />
        <input
          type="text"
          placeholder="Search Here..."
          className="outline-none w-full bg-transparent"
        />
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <FaRegBell
          className="cursor-pointer hover:text-defaultOrange"
          size={22}
        />
        <NavLink to={"/seller/profile"} className={"md:flex hidden"}>
          <img
            className="w-[36px] h-[36px] rounded-full object-fill"
            src={img1}
            alt="Profile"
          />
        </NavLink>
      </div>
    </div>
  );
}
