import { GridColDef } from "@mui/x-data-grid";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { FaRegEye } from "react-icons/fa6";
import { HiSortDescending } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import MuiTableComponent from "../../components/table/TableComponent";
import { formatPrice } from "../../helper/helperFunctions";
import { IoMdAdd } from "react-icons/io";
import { ExportModal } from "../../components/modals/export-modal";

type UserTableType = {
  id: number;
  name: string;
  phone: string;
  location: string;
  orders: number;
  totalSpent: number;
  status: string;
};

// Sample Data
const generateRows = (): UserTableType[] => {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    phone: "07071234323",
    location: ["Lugbe", "Garki", "Maitama", "Wuse"][i % 4] + ", Abuja",
    orders: Math.floor(Math.random() * 50),
    totalSpent: Math.floor(Math.random() * 500000),
    status: ["Active", "Inactive"][i % 2],
  }));
};

export default function Customers() {
  const location = useLocation();
  const { pathname } = location;
  const [exportModal, setExportModal] = useState(false);
  const [selectedData, setSelectedData] = useState<UserTableType[]>([]);
  const [sortCriteria, setSortCriteria] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const exportModalRef = useRef(null);
  useClickAway(exportModalRef, () => setExportModal(false));

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  // Sorting function
  const sortedRows = generateRows().sort((a, b) => {
    const valueA = a[sortCriteria as keyof UserTableType];
    const valueB = b[sortCriteria as keyof UserTableType];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    }

    return sortOrder === "asc"
      ? String(valueA).localeCompare(String(valueB))
      : String(valueB).localeCompare(String(valueA));
  });

  const columns: GridColDef[] = [
    { field: "name", headerName: "Customer Name", flex: 1 },
    { field: "id", headerName: "ID", flex: 0.2, sortable: false },
    { field: "phone", headerName: "Phone", flex: 1, sortable: false },
    { field: "location", headerName: "Location", flex: 1, sortable: false },
    { field: "orders", headerName: "Order(s)", flex: 0.5 },
    {
      field: "totalSpent",
      headerName: "Total Spent",
      flex: 0.8,
      renderCell: ({ row }) => <span>₦{formatPrice(row.totalSpent)}</span>,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: ({ row }) => (
        <div
          className={
            row.status == "Active" ? "text-[#008000]" : "text-[#FF0000]"
          }
        >
          {row.status}
        </div>
      ),
      flex: 0.5,
      sortable: false,
    },
    {
      field: "Action",
      renderCell: () => (
        <div className="h-full text-[#0000FF] relative flex justify-center items-center">
          <Link to={`/${pathname.split("/")[1]}/customers/customer`}>View</Link>
        </div>
      ),
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-7 bg-[#F5F5F5]">
      <ExportModal
        isOpen={exportModal}
        onClose={() => setExportModal(false)}
        allData={generateRows()}
        selectedData={selectedData}
        filename="orders-data"
      />

      <div className="w-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-24 border-b border-b-[#E3E3E3]">
        <DashboardSearchBar />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-24 w-full mt-4 flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-1 mb-1 gap-y-3 sm:gap-y-0">
          <h1 className="text-xl font-bold">Customers</h1>
          <div className="flex items-center gap-x-3 sm:gap-x-5">
            <button
              onClick={() => setExportModal(true)}
              className="text-sm hover:underline text-defaultOrange"
            >
              Export
            </button>
            <Link
              to={`/${pathname.split("/")[1]}/customers/add-customer`}
              className="flex items-center rounded-lg px-3 py-2 sm:py-2.5 text-white text-sm bg-defaultOrange hover:bg-defaultOrangeHover"
            >
              <span className="text-lg mr-2">
                <IoMdAdd />
              </span>{" "}
              Add Customer
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-5 w-full gap-y-4 sm:gap-y-0">
          {/* Sort Options */}
          <div className="flex flex-col sm:flex-row gap-x-3 sm:gap-x-5 items-start sm:items-center w-full sm:w-auto">
            {/* Sort by Dropdown */}
            <div className="flex flex-col gap-y-1 w-full sm:w-auto">
              <select
                className="p-2.5 text-xs rounded-lg border border-primaryBorder bg-white outline-none w-full sm:w-auto"
                onChange={handleSortChange}
                value={sortCriteria}
              >
                <option disabled>Sort by</option>
                <option value="name">Name</option>
                <option value="id">ID</option>
                <option value="location">Location</option>
                <option value="status">Status</option>
              </select>
            </div>

            {/* Sort Order Dropdown */}
            <div className="flex flex-col gap-y-1 w-full sm:w-auto">
              <div className="px-2.5 relative flex items-center gap-x-1 rounded-lg border border-primaryBorder bg-white w-full sm:w-auto">
                <HiSortDescending />
                <select
                  className="text-xs outline-none h-full py-2.5 w-full sm:w-auto"
                  onChange={handleSortOrderChange}
                  value={sortOrder}
                >
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex gap-x-2 px-1 text-[#6D6D6D] w-full sm:w-[25%] rounded-lg border border-primaryBorder">
            <CiSearch className="h-fit w-fit my-auto" size={24} />
            <input
              className=" py-2.5 outline-none border-none text-sm bg-transparent"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="mt-3 flex flex-1 w-full overflow-hidden bg-white">
          <MuiTableComponent
            columns={columns}
            rows={sortedRows}
            rowHeight={60}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
}
