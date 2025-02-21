import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { GridColDef } from "@mui/x-data-grid";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa6";
import { PiCoinVerticalDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import LineChartComponent from "../../components/seller/LineChart";
import MuiTableComponent from "../../components/seller/TableComponent";
import { generateLineChartData1SellerDashboard } from "../../helper/generateFillData";
import { generateRandomNumber } from "../../helper/helperFunctions";
import { Box } from "@mui/material";

type UserTableType = {
  id: number;
  name: string;
  type: string;
  details: string;
  date: Date | string;
  status: string;
};

const rows = (): UserTableType[] => {
  const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const returnArray: UserTableType[] = [];
  loopArray.forEach((num) => {
    const randomNum = generateRandomNumber(4, 1);
    returnArray.push({
      id: 100 + num,
      name: "Rosemary Sunday",
      type: "House",
      details: "3-bedroom house in Ikeja",
      date: new Date().toUTCString(),
      status:
        randomNum === 1
          ? "Pending"
          : randomNum === 2
          ? "Processed"
          : randomNum === 3
          ? "Cancelled"
          : randomNum === 4
          ? "Returned"
          : "",
    });
  });
  return returnArray;
};

const chartData = () => {
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const returnArray: any[] = [];
  monthArray.forEach((month) =>
    returnArray.push({
      name: month,
      earnings: generateRandomNumber(900000, 100000),
    })
  );

  return returnArray;
};

export default function Orders() {
  const location = useLocation();
  const { pathname } = location;
  const [exportModal, setExportModal] = useState(false);
  const exportModalRef = useRef(null);

  // State for tabs
  const [activeTab, setActiveTab] = useState("New");

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
    { field: "details", headerName: "Item Details", flex: 1 },
    { field: "date", headerName: "Order Date", flex: 1 },
    { field: "status", headerName: "Status" },
    {
      field: "Action",
      renderCell: ({ row }) => {
        return (
          <div className="h-full w-full relative flex justify-center gap-x-3 items-center">
            <Link
              className="text-xs text-[#C38D00] hover:underline"
              to={`/${pathname.split("/")[1]}/orders/order`}
              state={row.status === "Processed" ? { isProcessed: true } : null}
            >
              View
            </Link>
            {row.status === "Pending" ? (
              <button className="text-xs p-1 px-1.5 rounded-lg bg-[#E5FFE5] text-[#008000] hover:underline">
                Process
              </button>
            ) : null}
            {row.status === "Processed" ||
            row.status === "Returned" ||
            row.status === "Pending" ? (
              <button className="text-xs p-1 px-1.5 rounded-lg bg-[#FFB8B8] text-[#FF0000] hover:underline">
                Cancel
              </button>
            ) : null}
          </div>
        );
      },
      flex: 0.9,
    },
  ];

  // Filter rows based on the active tab (for non-analytical views)
  const allRows = rows();
  const filteredRows =
    activeTab === "Analytical"
      ? []
      : allRows.filter((row) => {
          switch (activeTab) {
            case "New":
              return row.status === "Pending";
            case "Return":
              return row.status === "Returned";
            case "Cancel":
              return row.status === "Cancelled";
            case "Processed":
              return row.status === "Processed";
            default:
              return true;
          }
        });

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-3">
      {exportModal ? (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-sm">
          <div
            ref={exportModalRef}
            className="w-[30%] rounded-[24px] flex flex-col p-8 bg-white"
          >
            <h2 className="text-2xl font-bold">Export Products</h2>
            <h6 className="font-medium mt-5">Export</h6>
            <div className="flex flex-col gap-y-2 mt-2">
              <div className="flex gap-x-3 items-center text-sm">
                <input type="radio" name="export-select" id="export-select1" />
                <label htmlFor="export-select1" className="opacity-70">
                  Current page
                </label>
              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <input type="radio" name="export-select" id="export-select2" />
                <label htmlFor="export-select2" className="opacity-70">
                  All products
                </label>
              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <input type="radio" name="export-select" id="export-select3" />
                <label htmlFor="export-select3" className="opacity-70">
                  Selection(0 products selected)
                </label>
              </div>
            </div>
            <h6 className="font-medium mt-5">Export As</h6>
            <div className="flex flex-col gap-y-2 mt-2">
              <div className="flex gap-x-3 items-center text-sm">
                <input type="radio" name="export-as" id="export-as1" />
                <label htmlFor="export-as1" className="opacity-70">
                  CSV
                </label>
              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <input type="radio" name="export-as" id="export-as2" />
                <label htmlFor="export-as2" className="opacity-70">
                  PDF
                </label>
              </div>
              <div className="flex gap-x-3 items-center text-sm">
                <input type="radio" name="export-as" id="export-as3" />
                <label htmlFor="export-as3" className="opacity-70">
                  Plain Text
                </label>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end gap-x-3 text-sm">
              <button
                onClick={closeExportModal}
                className="rounded-lg hover:underline"
              >
                Cancel
              </button>
              <button className="px-5 py-3 rounded-lg text-white bg-defaultOrange">
                Export
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      <div className="px-24 w-full mt-3 flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-start">Orders </h1>

          <div className="flex items-center gap-x-5">
            <button className="text-sm flex items-center gap-x-2 rounded-lg px-4 py-2.5 bg-[#FFF4EE] text-defaultOrange">
              <FaRegEyeSlash color="#e65800" />
              <span>Hide analytics</span>
            </button>
            <button
              onClick={openExportModal}
              className="text-sm rounded-lg px-4 py-2.5 bg-defaultOrange hover:bg-defaultOrangeHover text-white"
            >
              Export
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between items-end pb-3 mt-4 border-b border-b-primaryBorder">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <PiCoinVerticalDuotone size={22} color="#686677" />
              <span className="text-xs text-[#686677]">Total earnings</span>
            </div>
            <div className="flex items-baseline gap-x-2">
              <span className="text-3xl text-defaultOrange font-semibold">
                $450,000
              </span>
              <span className="text-xs text-[#686677]">+5,300 this week</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab
                label="New"
                value="New"
                sx={{ textTransform: "capitalize" }}
              />
              <Tab
                label="Return"
                value="Return"
                sx={{ textTransform: "capitalize" }}
              />
              <Tab
                label="Cancel"
                value="Cancel"
                sx={{ textTransform: "capitalize" }}
              />
              <Tab
                label="Processed"
                value="Processed"
                sx={{ textTransform: "capitalize" }}
              />
              <Tab
                label="Analytical"
                value="Analytical"
                sx={{ textTransform: "capitalize" }}
              />
            </Tabs>
          </Box>
        </div>

        <div className="flex justify-between items-end mt-5 w-full">
          <div className="flex gap-x-5 items-center">
            <div className="flex flex-col gap-y-1">
              <p className="text-xs">Customer:</p>
              <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                <option>Rosie Sunday</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-xs">Status:</p>
              <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                <option>Pending</option>
                <option>Processed</option>
                <option>Cancelled</option>
                <option>Returned</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-xs">Type:</p>
              <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                <option>House</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-xs">Order Date:</p>
              <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                <option>{new Date().toLocaleDateString()}</option>
              </select>
            </div>
          </div>

          <div className="flex gap-x-2 px-3 basis-[25%] rounded-lg border border-primaryBorder">
            <CiSearch className="h-fit w-fit my-auto" size={24} />
            <input
              className="flex-1 py-2.5 outline-none border-none text-sm bg-transparent"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        {activeTab === "Analytical" ? (
          <div className="w-full mt-5">
            <h2 className="text-2xl font-bold mb-4">Order Analytics</h2>
            <div className="p-3.5 rounded-lg border border-primaryBorder mt-7">
              <div className="flex w-full justify-between items-center">
                <h5 className="text-lg font-medium">Income</h5>
                <select className="text-sm rounded-lg outline-none p-2.5 border border-primaryBorder">
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>

              <div className="mt-2 flex gap-x-8 items-center">
                <p className="text-xs text-[#585858]">
                  Total income:{" "}
                  <span className="text-lg text-defaultOrange">
                    ₦23,230,450
                  </span>
                </p>
                <p className="text-xs text-[#585858]">
                  Total expenditure:{" "}
                  <span className="text-lg text-defaultOrange">₦5,230,450</span>
                </p>
              </div>

              <div className="w-full h-[15rem] mt-5">
                <LineChartComponent
                  chartData={generateLineChartData1SellerDashboard()}
                  lines={[
                    {
                      name: "expenditure",
                      type: "monotone",
                      color: "#e65800",
                      lineWidth: 3,
                      dotSize: 7,
                      dotShow: false,
                    },
                    {
                      name: "income",
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
          </div>
        ) : (
          <div className="mt-3 flex flex-1 w-full overflow-hidden">
            <MuiTableComponent
              columns={columns}
              showCheckbox={false}
              rows={filteredRows}
              paginationActive={true}
              rowHeight={60}
              pageSize={10}
            />
          </div>
        )}
      </div>
    </div>
  );
}
