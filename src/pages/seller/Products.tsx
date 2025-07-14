import {
  Popper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useRef, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaChevronRight, FaNairaSign, FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { TbCurrencyNaira } from "react-icons/tb";
import { HiSortDescending } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import Car from "../../assets/Dashboard-Car-3.png";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import MuiTableComponent from "../../components/seller/TableComponent";
import { generateRandomNumber } from "../../helper/helperFunctions";
import { IoMdAdd } from "react-icons/io";

type ProductTableType = {
  id: any;
  img: string;
  productName: string;
  category: string;
  price: number;
  location: string;
  description: string;
  stock: number;
  status: string;
};

const rows = (): ProductTableType[] => {
  const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const returnArray: ProductTableType[] = [];
  loopArray.forEach((num) => {
    const statusPicker = generateRandomNumber(3, 1);
    returnArray.push({
      id: num,
      img: Car,
      productName: "Toyota Camry LE (2024)",
      category: "Cars",
      price: generateRandomNumber(5000000, 100000),
      location: "Lagos, Nigeria",
      description:
        "A well-maintained 2019 Toyota Corolla with low mileage and excellent fuel efficiency.",
      stock: generateRandomNumber(10, 0),
      status:
        statusPicker === 1
          ? "Published"
          : statusPicker === 2
          ? "Archived"
          : statusPicker === 3
          ? "Draft"
          : "",
    });
  });
  return returnArray;
};

function renderStatusColor(status: string) {
  if (status.toLowerCase() === "published")
    return "bg-[#E8F8E8] text-[#0C560B]";
  else if (status.toLowerCase() === "archived")
    return "bg-[#FEF3B8] text-[#D7B813]";
  else if (status.toLowerCase() === "draft")
    return "bg-[#DAE9FB] text-[#0B283E]";
}

export default function Products() {
  const location = useLocation();
  const { pathname } = location;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dotsPopupRef = useRef(null);

  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  useClickAway(dotsPopupRef, () => {
    setAnchorEl(null);
  });

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const columns: GridColDef[] = [
    { field: "productName", headerName: "Product", type: "string", flex: 0.35 },
    {
      field: "price",
      headerName: "Price(₦)",
      renderCell: ({ row }) => {
        return (
          <div className="w-full h-full items-center flex justify-center">
            <span className="flex items-center gap-y-3 text-sm">
              ₦{row.price}
            </span>
          </div>
        );
      },
    },
    { field: "location", headerName: "Location", type: "string", flex: 0.35 },
    { field: "category", headerName: "Category" },
    { field: "description", headerName: "Description", flex: 0.5 },
    {
      field: "status",
      headerName: "Status",
      renderCell: ({ row }) => {
        return (
          <div className="w-full h-full items-center flex justify-center">
            <span
              className={`${renderStatusColor(
                row.status
              )} rounded-[100px] !text-xs px-2.5 py-1`}
            >
              {row.status}
            </span>
          </div>
        );
      },
      flex: 0.25,
    },
    {
      field: "Action",
      renderCell: () => {
        return (
          <div className="h-full w-full relative z-10 flex justify-center items-center overflow-visible">
            <BsThreeDotsVertical
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              size={16}
              className="cursor-pointer"
            />
            <Popper
              ref={dotsPopupRef}
              className="p-3 text-sm z-10 flex gap-x-4 items-center rounded-lg border border-primaryBorder bg-white"
              id={id}
              open={open}
              anchorEl={anchorEl}
            >
              <Link to={`/${pathname.split("/")[1]}/products/product`}>
                <FaRegEye size={18} />
              </Link>

              <BiEditAlt size={18} />
              <GoTrash size={18} />
            </Popper>
          </div>
        );
      },
    },
  ];

  const filteredRows = rows().filter((row) => {
    return (
      (activeTab === "All" ||
        row.status.toLowerCase() === activeTab.toLowerCase()) &&
      row.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-10 bg-[#FAFAFA]">
      <div className="w-full py-3 px-6 md:px-12 lg:px-24 border-b border-b-[#E3E3E3]">
        <DashboardSearchBar />
      </div>

      <div className="px-6 md:px-12 lg:px-24 w-full mt-6 flex flex-col flex-1">
        <div className="flex gap-x-2 md:gap-x-4 items-center flex-wrap">
          <Link to={`/${pathname.split("/")[1]}/dashboard`} className="text-xs">
            Dashboard
          </Link>
          <FaChevronRight size={14} className="hidden sm:inline" />
          <span className="text-xs">Products</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 gap-y-3">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold">Products</h1>

          {/* Add Product Button */}
          <Link
            to={`/${pathname.split("/")[1]}/products/add-product`}
            className="flex items-center rounded-lg px-6 sm:px-6 py-3 sm:py-3 text-white text-sm bg-defaultOrange hover:bg-defaultOrangeHover w-full sm:w-auto text-center"
          >
            <span className="text-lg mr-4">
              <IoMdAdd />
            </span>{" "}
            Add product
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-2 sm:gap-x-4 mt-4 border-b border-[#E6E6E6]">
          {[`All`, `Published`, `Draft`].map((tab) => (
            <button
              key={tab}
              className={`px-3 sm:px-4 py-2 rounded-t-md text-sm font-medium ${
                activeTab === tab
                  ? "border-b-4 border-[#14199C]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} <span className="ml-1">23</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center mt-5 w-full gap-4">
          {/* Filters Section */}
          <div className="flex flex-wrap gap-3 sm:gap-x-5 items-center">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="category-label">
                <span className="text-[#040421]">Category</span>
              </InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                className="text-[#040421]"
              >
                <MenuItem value="Cars">Cars</MenuItem>
                <MenuItem value="Houses">Houses</MenuItem>
                <MenuItem value="Lands">Lands</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Search Input */}
          <div className="flex gap-x-2 px-3 w-full sm:w-auto rounded-lg border border-primaryBorder">
            <CiSearch className="h-fit w-fit my-auto" size={24} />
            <input
              className="flex-1 py-2.5 outline-none border-none text-sm bg-transparent"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-1 w-full overflow-hidden bg-white">
          <MuiTableComponent
            columns={columns}
            rows={filteredRows}
            paginationActive={true}
            rowHeight={60}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
}
