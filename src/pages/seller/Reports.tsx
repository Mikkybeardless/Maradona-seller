import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

import { GridColDef } from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";
import { AiFillFileText } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { HiTag } from "react-icons/hi";
import { HiMiniChartBarSquare } from "react-icons/hi2";
import { LuRefreshCw } from "react-icons/lu";
import { MdInfo } from "react-icons/md";
import { PiExport } from "react-icons/pi";
import { RiCalendarEventLine } from "react-icons/ri";
import { VscCircleFilled } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Props } from "recharts/types/component/DefaultLegendContent";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import LineChartComponent from "../../components/seller/LineChart";
import { generateLineChartData1SellerDashboard } from "../../helper/generateFillData";
import {
  formatPrice,
  generateRandomNumber,
} from "../../helper/helperFunctions";

const data = [
  { name: "A", value: 40, color: "#FF00A5" },
  { name: "B", value: 30, color: "#150C64" },
  { name: "C", value: 20, color: "#000000" },
  { name: "D", value: 10, color: "#5F6260" },
];

const data1 = [
  { month: "January", revenue: 17000 },
  { month: "February", revenue: 14000 },
  { month: "March", revenue: 19000 },
  { month: "April", revenue: 22000 },
  { month: "May", revenue: 18500 },
  { month: "June", revenue: 24000 },
  { month: "July", revenue: 20000 },
  { month: "August", revenue: 26000 },
  { month: "September", revenue: 23000 },
  { month: "October", revenue: 25000 },
  { month: "November", revenue: 27000 },
  { month: "December", revenue: 30000 },
];

export default function Reports() {
  const [showMore, setShowMore] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleToSaleReport = () => {
    navigate("/seller/reports/sale-report");
  };

  const handleToFinancialTracking = () => {
    navigate("/seller/reports/financial-tracking");
  };

  const handleToExpensesReport = () => {
    navigate("/seller/reports/expenses-report");
  };

  const handleToRevenuReport = () => {
    navigate("/seller/reports/revenue-report");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [radius, setRadius] = useState(90);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const onPieEnter = (event, index) => {
    setActiveIndex(index);
    setRadius(100);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
    setRadius(90);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderLegend = (props: Props) => {
    const { payload } = props;

    return (
      <ul className="flex justify-between gap-x-1.5 pt-3">
        {payload?.map((entry: any, index) => {
          return (
            <li
              className="text-xs text-center line-clamp-2 font-medium"
              key={index}
            >
              {entry.value} ({(entry.payload.percent * 100).toFixed(1)}%):{" "}
              {entry.payload?.value} units sold
            </li>
          );
        })}
      </ul>
    );
  };

  const renderLegend2 = (props: Props) => {
    const { payload } = props;

    return (
      <ul className="flex flex-col justify-between gap-y-2.5 pt-3">
        {payload?.map((entry: any, index) => {
          return (
            <div
              key={index}
              color={entry.color}
              className="flex items-center gap-x-1"
            >
              <FaDotCircle size={10} color={entry.color} />
              <li className="text-xs text-center line-clamp-2 font-medium">
                {entry.value} ({(entry.payload.percent * 100).toFixed(1)}%)
              </li>
            </div>
          );
        })}
      </ul>
    );
  };

  const revenueTrackingRow = (): any[] => {
    const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const returnArray: any[] = [];
    loopArray.forEach((num) => {
      const randomNum = generateRandomNumber(200000000, 10000000);
      returnArray.push({
        id: num,
        category: "Houses",
        revenue: randomNum,
        percentage: "62.9%",
      });
    });
    return returnArray;
  };

  const revenueTrackingColumns: GridColDef[] = [
    { field: "category", headerName: "Category", flex: 1 },
    {
      field: "revenue",
      headerName: "Revenue",
      renderCell: ({ row }) => {
        return <span className="">₦{formatPrice(row.revenue)}</span>;
      },
      flex: 1,
    },
    { field: "percentage", headerName: "Percentage", flex: 0.5 },
  ];

  const salesReportRow = (): any[] => {
    const loopArray = [1, 2, 3, 4, 5];
    const returnArray: any[] = [];
    loopArray.forEach((num) => {
      const randomNum = generateRandomNumber(10, 0);
      returnArray.push({
        id: "100" + num,
        date: new Date().toLocaleDateString(),
        name: "Rosemary Sunday",
        product: "2020 Toyota Camry",
        quantity: randomNum,
        price: 12000000,
        total: 12000000,
        status: "Completed",
      });
    });
    return returnArray;
  };

  const salesReportColumns: GridColDef[] = [
    { field: "date", headerName: "Date", flex: 0.7 },
    { field: "id", headerName: "Order ID", flex: 0.5 },
    { field: "name", headerName: "Customer Name", flex: 1 },
    { field: "product", headerName: "Product", flex: 1 },
    { field: "quantity", headerName: "Quantity", flex: 0.4 },
    {
      field: "price",
      headerName: "Sale Price",
      renderCell: ({ row }) => {
        return <span className="">₦{formatPrice(row.price)}</span>;
      },
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total Sale Amount",
      renderCell: ({ row }) => {
        return <span className="">₦{formatPrice(row.total)}</span>;
      },
      flex: 1,
    },
    { field: "status", headerName: "Status", flex: 0.8 },
  ];

  const revenueReportRow = (): any[] => {
    const loopArray = [1, 2, 3, 4, 5];
    const returnArray: any[] = [];
    loopArray.forEach((num) => {
      returnArray.push({
        id: "100" + num,
        date: new Date().toLocaleDateString(),
        product: "2020 Toyota Camry",
        revenue: 12000000,
        expenses: 12000000,
        netRevenue: 12000000,
      });
    });
    return returnArray;
  };

  const revenueReportColumns: GridColDef[] = [
    { field: "date", headerName: "Date", flex: 0.7 },
    { field: "id", headerName: "Order ID", flex: 0.5 },
    { field: "product", headerName: "Product", flex: 1 },
    {
      field: "revenue",
      headerName: "Revenue",
      renderCell: ({ row }) => {
        return <span className="">₦{formatPrice(row.revenue)}</span>;
      },
      flex: 1,
    },
    {
      field: "expenses",
      headerName: "Expenses",
      renderCell: ({ row }) => {
        return <span className="">₦{formatPrice(row.expenses)}</span>;
      },
      flex: 1,
    },
    {
      field: "netRevenue",
      headerName: "Net Revenue",
      renderCell: ({ row }) => {
        return <span className="">₦{formatPrice(row.netRevenue)}</span>;
      },
      flex: 1,
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-10">
      {/* Responsive Padding for Search Bar */}
      <div className="w-full py-3.5 px-6 sm:px-12 md:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>
      <div className="bg-[#F2F2F2]">
        <div className="w-[95%] mx-auto">
          {/* first */}
          <div className="flex flex-wrap gap-5 mb-5">
            <div className="bg-white py-5 px-5 mt-6 rounded-2xl flex-[4] w-full md:w-auto">
              <div className="flex justify-between mb-5 flex-wrap">
                <p className="font-bold text-3xl text-[#05004E] mb-2 md:mb-0">
                  Sales Summary
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#C3D3E2",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#1137D0",
                      gap: "5px",
                      marginRight: "15px",
                      textTransform: "capitalize",
                    }}
                  >
                    <PiExport size={16} />
                    Export
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#C3D3E2",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#1137D0",
                      gap: "5px",
                      textTransform: "capitalize",
                    }}
                  >
                    <LuRefreshCw size={16} />
                    Refresh
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <div className="w-full sm:w-[230px] h-[184px] bg-[#1137D033] pl-7 pt-4 rounded-[16px]">
                  <div className="w-[40px] h-[40px] bg-[#1137D0] flex items-center justify-center rounded-full">
                    <AiFillFileText size={24} color="#ffffff" />
                  </div>
                  <p className="font-semibold text-2xl text-[#151D48] mt-4 mb-6">
                    120
                  </p>
                  <p className="font-medium text-base text-[#425166]">
                    Total Orders
                  </p>
                </div>

                <div className="w-full sm:w-[230px] h-[184px] bg-[#04979E33] p-7 pt-4 rounded-[16px]">
                  <div className="flex justify-between w-full">
                    <div className="w-[40px] h-[40px] bg-[#04979E] flex items-center justify-center rounded-full">
                      <HiMiniChartBarSquare size={24} color="#ffffff" />
                    </div>
                    <p className="font-semibold text-xs text-[#1137D0]">
                      +8% Yesterday
                    </p>
                  </div>
                  <p className="font-semibold text-2xl text-[#151D48] mt-4 mb-6">
                    N 12,500,000
                  </p>
                  <p className="font-medium text-base text-[#425166]">
                    Total Revenue
                  </p>
                </div>

                <div className="w-full sm:w-[289px] h-[184px] bg-[#FD610033] p-7 pt-4 rounded-[16px]">
                  <div className="flex justify-between w-full">
                    <div className="w-[40px] h-[40px] bg-[#FD6100] flex items-center justify-center rounded-full">
                      <HiTag size={24} color="#ffffff" />
                    </div>
                    <p className="font-bold text-xs text-[#150A13]">
                      Units sold: 200
                    </p>
                  </div>

                  <p className="font-semibold text-2xl text-[#151D48] mt-4 mb-6">
                    Best Selling Product
                  </p>
                  <p className="font-medium text-base text-[#425166]">
                    2020 Toyota Camry
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white py-5 px-5 mt-6 rounded-2xl flex-1">
              <p className="font-bold text-base text-center mb-5">
                Top Performing Categories
              </p>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <VscCircleFilled size={10} color="#FD6100" />
                  <div className="ml-2">
                    <p className="font-normal text-sm sm:text-base text-[#5C4D58]">
                      Cars:{" "}
                      <span className="font-bold text-[#E65800]">64%</span>
                    </p>
                    <p className="font-normal text-xs text-[#5C4D58]">
                      800 units sold
                    </p>
                  </div>
                </div>
                <ProgressUI
                  rangeColor={"#FD6100"}
                  rangePercent={"64%"}
                  wholeColor={"#FD610040"}
                  wholePercent={"36%"}
                />
              </div>

              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <VscCircleFilled size={10} color="#14199C" />
                  <div className="ml-2">
                    <p className="font-normal text-sm sm:text-base text-[#5C4D58]">
                      Houses:{" "}
                      <span className="font-bold text-[#14199C]">24%</span>
                    </p>
                    <p className="font-normal text-xs text-[#5C4D58]">
                      300 units sold
                    </p>
                  </div>
                </div>
                <ProgressUI
                  rangeColor={"#14199C"}
                  rangePercent={"24%"}
                  wholeColor={"#14199C40"}
                  wholePercent={"76%"}
                />
              </div>

              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <VscCircleFilled size={10} color="#04979E" />
                  <div className="ml-2">
                    <p className="font-normal text-sm sm:text-base text-[#5C4D58]">
                      Lands:{" "}
                      <span className="font-bold text-[#04979E]">12%</span>
                    </p>
                    <p className="font-normal text-xs text-[#5C4D58]">
                      150 units sold
                    </p>
                  </div>
                </div>
                <ProgressUI
                  rangeColor={"#04979E"}
                  rangePercent={"12%"}
                  wholeColor={"#04979E40"}
                  wholePercent={"82%"}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">
            {/* Left Section */}
            <div className="bg-white py-5 px-5 mt-6 rounded-2xl flex-1 md:flex-[3] w-full">
              <div className="flex flex-col md:flex-row justify-between mb-12">
                <p className="font-bold text-base text-[#1E1A1C]">
                  Sales Performance
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#5C4D58",
                      borderColor: "#EAE6E9",
                      textTransform: "capitalize",
                    }}
                  >
                    Print
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#5C4D58",
                      borderColor: "#EAE6E9",
                      textTransform: "capitalize",
                    }}
                    onClick={handleToSaleReport}
                  >
                    View more
                  </Button>
                  <IconButton
                    onClick={handleClick}
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <RiCalendarEventLine size={24} color="#5C4D58" />
                  </IconButton>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar />
                    </LocalizationProvider>
                  </MenuItem>
                </Menu>
              </div>
              <div className="h-[250px] w-full reports-page">
                <LineChartComponent
                  chartData={generateLineChartData1SellerDashboard()}
                  legend={false}
                  tickCount={6}
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

            {/* Right Section */}
            <div className="bg-white py-5 px-5 mt-6 rounded-2xl w-full flex-[2]">
              <p className="font-bold text-base mb-8">
                Major Sales by Location
              </p>{" "}
              <div style={{ position: "relative", width: 200, height: 200 }}>
                {/* Center Circle with Text */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 80,
                    height: 80,
                    background: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  }}
                >
                  30 DAYS
                </div>

                {/* Pie Chart */}
                <PieChart width={200} height={200}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={radius}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    onMouseLeave={onPieLeave}
                    animationDuration={300} // Smooth transition
                    cornerRadius={10} // Rounded edges
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                {/* Legend */}
                <div className="absolute right-[-50%] top-1/2 transform -translate-y-1/2 text-sm">
                  {data.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      ></span>
                      <span className="font-medium">{entry.name}</span>
                      <span className="font-bold">{entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          {showMore === false && (
            <div className="text-right mb-14">
              <Button
                onClick={handleShowMore}
                sx={{
                  color: "#FD6100",
                  fontWeight: 700,
                  fontSize: "18px",
                  textTransform: "capitalize",
                }}
              >
                View More
              </Button>
            </div>
          )}

          {/* showMore */}
          {showMore === true && (
            <div>
              <div className="flex flex-col lg:flex-row justify-between gap-4 mb-56">
                {/* partOne  */}
                <div className="flex-[3] w-full lg:w-3/5">
                  <div className="bg-white py-9 px-7 mt-6 rounded-2xl w-full">
                    <div className="flex justify-between items-center mb-7">
                      <p className="font-bold text-base text-[#1E1A1C]">
                        Monthly Revenue
                      </p>
                      <Button
                        variant="outlined"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#5C4D58",
                          borderColor: "#5C4D58",
                          textTransform: "capitalize",
                        }}
                        onClick={() => navigate("/seller/reports/sales-report")}
                      >
                        View more
                      </Button>
                    </div>
                    <div className="w-full h-[300px] md:h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data1}>
                          <XAxis dataKey="month" />
                          <YAxis
                            tickFormatter={(value) => `${value / 1000}k`}
                            domain={[0, "auto"]}
                          />
                          <Tooltip formatter={(value) => `${value / 1000}k`} />
                          <Legend />
                          <Bar dataKey="revenue" fill="#0095FF" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white mt-6 rounded-2xl w-full">
                    <div className="bg-[#04979E] flex justify-between py-4 px-5 md:px-7 rounded-t-2xl items-center">
                      <p className="font-bold text-base text-white">
                        Financial Summaries
                      </p>
                      <div>
                        <Button
                          variant="outlined"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#ffffff",
                            borderColor: "#ffffff",
                            padding: "5px 8px",
                            marginRight: "10px",
                            textTransform: "capitalize",
                          }}
                        >
                          Print
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#ffffff",
                            borderColor: "#ffffff",
                            padding: "5px 8px",
                            textTransform: "capitalize",
                          }}
                          onClick={handleToFinancialTracking}
                        >
                          View More
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 px-5 md:px-7 mt-5">
                      <div>
                        {[
                          "Gross Revenue:",
                          "Net Revenue:",
                          "Commission to Platform",
                          "Commission to Agents",
                          "Promotion to Cost",
                          "Returns and Refunds:",
                        ].map((item, index) => (
                          <p
                            key={index}
                            className="text-sm font-normal text-[#040421] mb-3 flex items-center gap-1"
                          >
                            {item}{" "}
                            {[
                              "Commission to Platform",
                              "Commission to Agents",
                            ].includes(item) && (
                              <MdInfo size={14} color="#838383" />
                            )}
                          </p>
                        ))}
                      </div>
                      <div className="text-right">
                        {[
                          "₦350,000,000",
                          "₦320,000,000",
                          "3.5%",
                          "10%",
                          "₦30,000,000",
                          "₦8,000,000 (100 returns)",
                        ].map((value, index) => (
                          <p
                            key={index}
                            className="text-sm font-normal text-[#585858] mb-3"
                          >
                            {value}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-[2] w-full lg:w-2/5">
                  {/* Revenue Tracking */}
                  <div className="">
                    {[
                      {
                        title: "Revenue Tracking",
                        bg: "#1137D0",
                        handler: handleToRevenuReport,
                        color: "#14199C",
                      },
                    ].map((section, index) => (
                      <div
                        key={index}
                        className="bg-white mt-6 rounded-2xl w-full pb-16"
                      >
                        <div
                          className={`bg-[${section.bg}] flex justify-between py-4 px-5 md:px-7 rounded-t-2xl items-center`}
                        >
                          <p className="font-bold text-base text-white">
                            {section.title}
                          </p>
                          <div>
                            <Button
                              variant="outlined"
                              sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "white",
                                borderColor: "white",
                                padding: "5px 8px",
                                marginRight: "10px",
                                textTransform: "capitalize",
                              }}
                            >
                              Print
                            </Button>
                            <Button
                              variant="outlined"
                              sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "white",
                                borderColor: "white",
                                padding: "5px 8px",
                                textTransform: "capitalize",
                              }}
                              onClick={section.handler}
                            >
                              View More
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 px-5 md:px-7 mt-5">
                          <div>
                            <p
                              className={`text-sm font-bold text-[${section.color}] mb-3`}
                            >
                              Category
                            </p>
                            {["Cars", "Houses", "Lands"].map((item, i) => (
                              <p
                                key={i}
                                className="text-sm font-normal text-[#040421] mb-3"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-bold text-[${section.color}] mb-3`}
                            >
                              Revenue
                            </p>
                            {["₦320,000,000", "₦30,000,000", "₦8,000,000"].map(
                              (item, i) => (
                                <p
                                  key={i}
                                  className="text-sm font-normal text-[#585858] mb-3"
                                >
                                  {item}
                                </p>
                              )
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-bold text-[${section.color}] mb-3`}
                            >
                              Percentage
                            </p>
                            {["62.9%", "25.7%", "11.4%"].map((item, i) => (
                              <p
                                key={i}
                                className="text-sm font-normal text-[#040421] mb-3"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expenses Report  */}
                  <div>
                    {[
                      {
                        title: "Expenses",
                        bg: "#FD6100",
                        handler: handleToExpensesReport,
                        color: "#FD6100",
                      },
                    ].map((section, index) => (
                      <div
                        key={index}
                        className="bg-white mt-6 rounded-2xl w-full pb-16"
                      >
                        <div
                          className={`bg-[${section.bg}] flex justify-between py-4 px-5 md:px-7 rounded-t-2xl items-center`}
                        >
                          <p className="font-bold text-base text-white">
                            {section.title}
                          </p>
                          <div>
                            <Button
                              variant="outlined"
                              sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "white",
                                borderColor: "white",
                                padding: "5px 8px",
                                marginRight: "10px",
                                textTransform: "capitalize",
                              }}
                            >
                              Print
                            </Button>
                            <Button
                              variant="outlined"
                              sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "white",
                                borderColor: "white",
                                padding: "5px 8px",
                                textTransform: "capitalize",
                              }}
                              onClick={section.handler}
                            >
                              View More
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 px-5 md:px-7 mt-5 ">
                          <div>
                            <p
                              className={`text-sm font-bold text-[${section.color}] mb-3`}
                            >
                              Expense Type
                            </p>
                            {["Cars", "Houses", "Lands"].map((item, i) => (
                              <p
                                key={i}
                                className="text-sm font-normal text-[#040421] mb-3"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-bold text-[${section.color}] mb-3`}
                            >
                              Amount
                            </p>
                            {["62.9%", "25.7%", "11.4%"].map((item, i) => (
                              <p
                                key={i}
                                className="text-sm font-normal text-[#040421] mb-3"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right mb-14">
                <Button
                  onClick={handleShowMore}
                  sx={{
                    color: "#FD6100",
                    fontWeight: 700,
                    fontSize: "18px",
                    textTransform: "capitalize",
                  }}
                >
                  View Less
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ProgressUI = ({
  rangeColor,
  rangePercent,
  wholeColor,
  wholePercent,
}: {
  rangeColor: string;
  rangePercent: string;
  wholeColor: string;
  wholePercent: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "5px",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div style={{ width: rangePercent, backgroundColor: rangeColor }}></div>
      <div style={{ width: wholePercent, backgroundColor: wholeColor }}></div>
    </div>
  );
};
