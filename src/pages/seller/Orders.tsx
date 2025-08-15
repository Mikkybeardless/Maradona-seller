import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { PiCoinVerticalDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import LineChartComponent from "../../components/seller/LineChart";
import MuiTableComponent from "../../components/table/TableComponent";
import { generateLineChartData1SellerDashboard } from "../../helper/generateFillData";
import { Dayjs } from "dayjs";
import { useDebounce } from "../../hooks/useDebounce";
import { DateSelect } from "../../components/common/DateSelect";
import { FilterGroup } from "../../components/common/FilterGroup";
import { TableSearchInput } from "../../components/common/tableSearchInput";
import { ExportModal } from "../../components/modals/export-modal";

type UserTableType = {
  id: number;
  name: string;
  type: string;
  details: string;
  date: Date | string;
  status: string;
};

const rows = (): UserTableType[] => {
  const types = ["car", "house", "land"];
  const statuses = ["Pending", "Processed", "Cancelled", "Returned"];

  const rowData: UserTableType[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Rosemary Sunday ${index + 1}`,
    type: types[index % 3], // Repeats 0, 1, 2 → House, Land, Car
    status: statuses[index % 4], // Repeats 0, 1, 2, 3 → Published, Pending, Failed
    details: `Details for Property ${index + 1}`,
    date: new Date().toISOString(),
  }));
  return rowData;
};

export type IFilter = {
  type: string;
  status: string;
  date: Dayjs | null;
  modified: Dayjs | null;
};
export default function Orders() {
  const location = useLocation();
  const { pathname } = location;
  const [exportModal, setExportModal] = useState(false);
  const exportModalRef = useRef(null);
  const [allRows, setAllRows] = useState<UserTableType[] | []>([]);
  const [tableRows, setTableRows] = useState<UserTableType[]>(rows());
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState<UserTableType[]>([]);
  // State for tabs
  const [activeTab, setActiveTab] = useState("New");
  const [filters, setFilters] = useState<IFilter>({
    type: "",
    status: "",
    date: null,
    modified: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery);
  useClickAway(exportModalRef, () => {
    setExportModal(false);
  });

  function openExportModal() {
    setExportModal(true);
  }

  function closeExportModal() {
    setExportModal(false);
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "name", headerName: "Customer", flex: 0.9 },
    { field: "type", headerName: "Item type" },
    { field: "details", headerName: "Item Details", flex: 0.8 },
    { field: "date", headerName: "Order Date", flex: 0.8 },
    { field: "status", headerName: "Status" },
    {
      field: "Action",
      renderCell: ({ row }) => {
        return (
          <div className="h-full w-full relative flex justify-center gap-x-3 items-center">
            <Link
              className="text-xs text-[#14199C] underline"
              to={`/${pathname.split("/")[1]}/orders/order`}
              state={row.status === "Processed" ? { isProcessed: true } : null}
            >
              View
            </Link>
            {row.status === "Pending" ? (
              <button className="text-xs p-1 px-1.5 rounded-lg bg-[#E9C50529] text-[#FFDC20] hover:underline">
                Processing
              </button>
            ) : null}
            {row.status === "Processed" ||
            row.status === "Returned" ||
            row.status === "Pending" ? (
              <button className="text-xs p-1 px-1.5 rounded-lg text-[#FF0000] underline">
                Cancel
              </button>
            ) : null}
          </div>
        );
      },
      flex: 1,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      // const res = await fetch("/api/orders");

      // const data = await res.json();
      setAllRows(rows()); // ✅ you need this here
      setTableRows(rows()); // ✅ you need this here
    }

    fetchData();
  }, []);

  useEffect(() => {
    const normalizedQuery = debouncedSearchQuery.toLowerCase();

    const filtered = allRows.filter((row) => {
      // Tab filter
      const tabMatch =
        activeTab === "Analytics"
          ? false
          : activeTab === "New"
          ? row.status === "Pending"
          : row.status === activeTab;

      // Search filter (e.g., match against name or details)
      const searchMatch =
        row.name.toLowerCase().includes(normalizedQuery) ||
        row.details.toLowerCase().includes(normalizedQuery);

      // Custom filters
      const typeMatch = filters.type ? row.type === filters.type : true;
      const statusMatch = filters.status ? row.status === filters.status : true;
      // const dateMatch = filters.date
      //   ? row.date.startsWith(filters.date.toISOString().slice(0, 10))
      //   : true;

      // Combine
      return tabMatch && searchMatch && typeMatch && statusMatch;
    });

    setTableRows(filtered);
  }, [activeTab, filters, debouncedSearchQuery]);

  return (
    <main className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar md:pb-3 pb-32 ">
      {/* Export Modal  */}
      <ExportModal
        isOpen={exportModal}
        onClose={closeExportModal}
        allData={rows()}
        selectedData={selectedData}
        filename="orders-data"
      />

      {/* Export Modal End  */}

      {/* Search Bar */}
      <div className="w-full py-3.5 px-6 sm:px-12 md:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      <div className="px-4 sm:px-12 md:px-24 w-full mt-3 flex flex-col flex-1">
        {/* Header Section */}
        <section
          id="header"
          className="flex flex-wrap justify-between items-center gap-y-4"
        >
          <h1 className="text-2xl sm:text-3xl font-bold flex items-start">
            Orders
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
            <button className="text-sm sm:text-base flex items-center gap-x-2 rounded px-4 py-2.5 bg-[#E8E9FC] text-defaultOrange">
              <FaRegEyeSlash color="#14199C" />
              <span>Hide analytics</span>
            </button>
            <button
              onClick={openExportModal}
              className="text-sm rounded-lg px-4 py-2.5 bg-defaultOrange hover:bg-defaultOrangeHover text-white"
            >
              Export
            </button>
          </div>
        </section>

        {/* Earnings Section */}
        <section
          id="earnings"
          className="w-full flex flex-wrap justify-between items-end pb-3 mt-4 border-b border-b-primaryBorder"
        >
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <PiCoinVerticalDuotone size={22} color="#686677" />
              <span className="text-xs text-[#686677]">Total earnings</span>
            </div>
            <div className="flex items-baseline gap-x-2">
              <span className="text-2xl sm:text-3xl text-defaultOrange font-semibold">
                $450,000
              </span>
              <span className="text-xs text-[#686677]">+5,300 this week</span>
            </div>
          </div>
        </section>

        <section id="tabs" className="mt-4">
          {/* Responsive Tabs Section */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="New"
                value="New"
                sx={
                  activeTab === "New"
                    ? { fontWeight: "bold", textTransform: "capitalize" }
                    : { textTransform: "capitalize" }
                }
              />
              <Tab
                label="Processed"
                value="Processed"
                sx={
                  activeTab === "Processed"
                    ? { fontWeight: "bold", textTransform: "capitalize" }
                    : { textTransform: "capitalize" }
                }
              />
              <Tab
                label="Cancelled"
                value="Cancelled"
                sx={
                  activeTab === "Cancelled"
                    ? { fontWeight: "bold", textTransform: "capitalize" }
                    : { textTransform: "capitalize" }
                }
              />
              <Tab
                label="Returned"
                value="Returned"
                sx={
                  activeTab === "Returned"
                    ? { fontWeight: "bold", textTransform: "capitalize" }
                    : { textTransform: "capitalize" }
                }
              />
              <Tab
                label="Analytics"
                value="Analytics"
                sx={
                  activeTab === "Analytics"
                    ? { fontWeight: "bold", textTransform: "capitalize" }
                    : { textTransform: "capitalize" }
                }
              />
            </Tabs>
          </Box>
        </section>

        {activeTab === "Analytics" ? (
          <section id="analytics" className="w-full mt-5">
            <div className="p-3.5 rounded-lg border border-primaryBorder mt-7">
              {/* Title & Select Dropdown (Responsive) */}
              <div className="flex flex-wrap w-full justify-between items-center gap-3">
                <h5 className="text-lg font-medium">Income</h5>
                <select className="text-sm rounded-lg outline-none p-2.5 border border-primaryBorder">
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>

              {/* Income & Expenditure (Responsive) */}
              <div className="mt-2 flex flex-wrap gap-x-8 gap-y-2 items-center">
                <p className="text-xs text-[#585858]">
                  Total income:{" "}
                  <div className="text-lg text-[#E65800]">₦23,230,450</div>
                </p>
                <p className="text-xs text-[#585858]">
                  Total expenditure:{" "}
                  <div className="text-lg text-[#E65800]">₦5,230,450</div>
                </p>
              </div>

              {/* Responsive Chart */}
              <div className="w-full h-[15rem] mt-5">
                <LineChartComponent
                  chartData={generateLineChartData1SellerDashboard()}
                  lines={[
                    {
                      name: "Expenditure",
                      type: "monotone",
                      color: "#e65800",
                      lineWidth: 3,
                      dotSize: 7,
                      dotShow: false,
                    },
                    {
                      name: "Income",
                      type: "monotone",
                      color: "#0B0C52",
                      lineWidth: 3,
                      dotSize: 7,
                      dotShow: false,
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Filters & Search Bar */}
            <div className="mb-4">
              <FilterGroup
                filters={filters}
                onChange={(updated) => {
                  setFilters((prev) => ({ ...prev, ...updated }));
                }}
                selects={[
                  {
                    name: "type",
                    placeholder: "Category",
                    options: [
                      { label: "House", value: "house" },
                      { label: "Cars", value: "cars" },
                      { label: "Land", value: "land" },
                    ],
                  },
                ]}
                extraFilters={
                  <>
                    <DateSelect
                      onChange={(date) => {
                        setFilters((prev) => ({ ...prev, date }));
                      }}
                      value={filters.date}
                    />
                  </>
                }
                searchNode={
                  <TableSearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder="Search orders"
                  />
                }
              />
            </div>

            {/* Responsive Table */}
            <section
              id="responsive-table"
              className="mt-3 flex flex-1 w-full overflow-x-auto"
            >
              <MuiTableComponent
                columns={columns}
                showCheckbox={false}
                rows={tableRows}
                rowHeight={60}
                pageSize={10}
              />
            </section>
          </>
        )}
      </div>
    </main>
  );
}
