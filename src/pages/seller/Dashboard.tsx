import { getTheme } from "@table-library/react-table-library/baseline";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Label } from "recharts";
import Car from "../../assets/Dashboard-Car-1.png";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import LineChartComponent from "../../components/seller/LineChart";
import {
  generateLineChartData1SellerDashboard,
  generateLineChartData2SellerDashboard,
  productColumnSellerDashoard,
  productTableSellerDashboard,
  purchaseColumnSellerDashoard,
  purchaseTableSellerDashboard,
  salesColumnSellerDashoard,
  salesTableSellerDashboard,
} from "../../helper/generateFillData";

export default function Dashboard() {
  const data01 = [
    {
      name: "Units",
      value: 780,
      color: "#E65800",
    },
    {
      name: "Other",
      value: 286,
      color: "#F5F5F5",
    },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        {`${(percent * 100).toFixed(0)}%`}
      </>
    );
  };

  const tableTheme = useTheme([
    getTheme(),
    {
      HeaderRow: `
                font-size: 12px;
                background-color: #F0F0F0;
                text-align: center !important;
            `,
      Row: `
                font-size: 12px;
                text-align: center;
            `,
    },
  ]);

  const tableTheme2 = useTheme([
    getTheme(),
    {
      HeaderRow: `
                font-size: 12px;
                background-color: #F0F0F0;
            `,
      Row: `
                font-size: 12px;
            `,
    },
  ]);

  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar pb-24 md:pb-10 work-sans">
      {/* Search Bar Section */}
      <div className="w-full py-2 md:py-5 px-4 md:px-24 border-b border-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Main Content Section */}
      <div className="px-4 md:px-24 w-full mt-4 md:mt-8">
        <h1 className="text-xl md:text-3xl font-bold">Dashboard</h1>

        <div className="bg-[#F7F7F7] p-3  mt-7 rounded-lg">
          <div className="w-full bg-white py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-primaryBorder rounded-lg">
            <div className="flex flex-col items-start border-b sm:border-b-0 sm:border-r border-primaryBorder p-2 pl-8">
              <p className="text-sm text-[#585858]">Customers</p>
              <p className="text-lg font-medium">230</p>
            </div>
            <div className="flex flex-col items-start border-b sm:border-b-0 sm:border-r border-primaryBorder p-2 pl-8">
              <p className="text-sm text-[#585858]">Products</p>
              <p className="text-lg font-medium">53</p>
            </div>
            <div className="flex flex-col items-start border-b md:border-b-0 md:border-r border-primaryBorder p-2 pl-8">
              <p className="text-sm text-[#585858]">Active bids</p>
              <p className="text-lg font-medium">530</p>
            </div>
            <div className="flex flex-col items-start p-2 pl-8">
              <p className="text-sm text-[#585858]">Sales</p>
              <p className="text-lg font-medium">1200</p>
            </div>
          </div>
        </div>

        {/*customers, products*/}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-full">
          {/* Sales Activity */}
          <div className="flex flex-col md:basis-[65%] rounded-lg border border-primaryBorder">
            <h5 className="font-medium p-1.5 bg-[#F0F0F0] rounded-t-lg">
              Sales Activity
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col gap-y-2 py-5 px-2 items-center border-r border-primaryBorder">
                <p className="text-lg font-medium">51</p>
                <p className="text-xs">Qty</p>
                <p className="text-sm">TOTAL SALES</p>
              </div>
              <div className="flex flex-col gap-y-2 py-5 px-2 items-center border-r border-primaryBorder">
                <p className="text-lg font-medium">10</p>
                <p className="text-xs">Pkgs</p>
                <p className="text-sm">Transactions</p>
              </div>
              <div className="flex flex-col gap-y-2 py-5 px-2 items-center border-r md:border-r-primaryBorder border-r-transparent md:border-r">
                <p className="text-lg font-medium">2</p>
                <p className="text-xs">Pkgs</p>
                <p className="text-sm">Pending</p>
              </div>
              <div className="flex flex-col gap-y-2 py-5 px-2 items-center">
                <p className="text-lg font-medium">90</p>
                <p className="text-xs">Pkgs</p>
                <p className="text-sm">Cancelled</p>
              </div>
            </div>
          </div>

          {/* Inventory Summary */}
          <div className="flex flex-col md:basis-[35%] rounded-lg border border-primaryBorder">
            <h5 className="font-medium p-1.5 bg-[#F0F0F0] rounded-t-lg">
              Inventory Summary
            </h5>
            <div className="flex flex-col px-5 flex-1">
              <div className="flex justify-between flex-1 items-center gap-2 border-b border-primaryBorder">
                <span className="basis-[80%] text-sm">QUANTITY IN HAND</span>
                <span className="text-base basis-[20%]">12746</span>
              </div>
              <div className="flex justify-between flex-1 items-center gap-2">
                <span className="basis-[80%] text-sm">
                  QUANTITY TO BE RECEIVED
                </span>
                <span className="text-base basis-[20%]">62</span>
              </div>
            </div>
          </div>
        </div>

        {/*sales inventory*/}

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-full">
          {/* Product Details */}
          <div className="flex flex-col md:basis-[55%] rounded-lg border border-primaryBorder">
            <h5 className="font-medium p-1.5 bg-[#F0F0F0] rounded-t-lg">
              Product Details
            </h5>
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Left Section */}
              <div className="md:basis-[65%] flex flex-col justify-between gap-y-3 py-4 px-5 border-b md:border-b-0 md:border-r border-primaryBorder">
                <div className="flex w-full justify-between items-center">
                  <span className="text-sm text-[#585858]">
                    Low Stock Items
                  </span>
                  <span className="text-lg font-medium">22</span>
                </div>
                <div className="flex w-full justify-between items-center">
                  <span className="text-sm text-[#585858]">
                    All Item Groups
                  </span>
                  <span className="text-lg font-medium">36</span>
                </div>
                <div className="flex w-full justify-between items-center">
                  <span className="text-sm text-[#585858]">All Items</span>
                  <span className="text-lg font-medium">129</span>
                </div>
              </div>

              {/* Pie Chart Section */}
              <div className="pie-chart-cont md:basis-[35%] overflow-hidden flex flex-col justify-center relative px-4 py-2">
                <span className="text-sm font-semibold">Active items</span>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip wrapperClassName="text-xs" />
                    <Pie
                      data={data01}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={30}
                      outerRadius={60}
                      labelLine={false}
                      fill="#E65800"
                    >
                      <Label value={`73%`} offset={0} position="center" />
                      {data01.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="flex flex-col md:basis-[45%] rounded-lg border border-primaryBorder">
            <div className="flex justify-between rounded-t-lg px-2.5 bg-[#F0F0F0]">
              <h5 className="font-medium py-1.5">Top Selling Items</h5>
              <select className="bg-transparent outline-none text-sm">
                <option>This month</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-y-2.5 py-4 px-2 ${
                    index === 0
                      ? "border-b sm:border-b-0 sm:border-r border-primaryBorder"
                      : ""
                  }`}
                >
                  <img
                    className="w-[70px] h-[70px] rounded-lg bg-slate-100"
                    src={Car}
                    alt="product"
                  />
                  <span className="text-sm text-[#585858]">Toyota Camry</span>
                  <p className="text-lg font-medium">
                    110{" "}
                    <span className="text-xs font-normal text-[#585858]">
                      Kg
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg border border-primaryBorder mt-7">
          {/* Header */}
          <div className="flex flex-col sm:flex-row w-full px-4 justify-between items-start sm:items-center gap-2">
            <h5 className="text-lg font-medium">Income</h5>
            <div className="flex items-center font-light">
              <div className="text-xs flex items-center mr-4"><span className="w-2 h-2 mr-1 rounded-3xl bg-[#E65800] inline-block"></span> Income</div>
              <div className="text-xs flex items-center"><span className="w-2 h-2 mr-1 rounded-3xl bg-[#0B0C52] inline-block"></span> Expenses</div>
            </div>
            <div className="w-1/5"> 
              <select className="text-xs font-light text-[#5C4D58] rounded-lg outline-none p-2 border-none w-full sm:w-auto">
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>
          </div>

          {/* Income & Expenditure Details */}
          <div className="px-4 mt-2 flex flex-col sm:flex-row sm:gap-x-8 gap-y-1 items-start sm:items-center">
            <p className="text-xs text-[#585858]">
              Total income:{" "}
              <div className="text-base text-[#E65800]">₦23,230,450</div>
            </p>
            <p className="text-xs text-[#585858]">
              Total expenditure:{" "}
              <div className="text-base text-[#E65800]">₦5,230,450</div>
            </p>
          </div>

          {/* Chart Section */}
          <div className="w-full h-[15rem] sm:h-[18rem] mt-5">
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

        <div className="mt-7 flex flex-col lg:flex-row gap-5 lg:gap-x-10">
          {/* Purchase Order Section */}
          <div className="w-full lg:basis-[30%] rounded-lg border border-primaryBorder">
            <div className="flex justify-between items-center rounded-t-lg px-2.5 bg-[#F0F0F0]">
              <h5 className="font-medium py-2.5 text-sm sm:text-base">
                Purchase Order
              </h5>
              <select className="bg-transparent outline-none text-xs sm:text-sm">
                <option>This month</option>
              </select>
            </div>
            <div className="flex flex-col">
              <div className="border-b border-b-primaryBorder py-3 px-3 text-center">
                <p className="text-xs mb-2">Quantity Ordered</p>
                <p className="text-sm font-medium text-[#E65800]">
                  2.00
                </p>
              </div>
              <div className="py-3 px-3 text-center">
                <p className="text-xs mb-2">Total Amount</p>
                <p className="text-sm font-medium text-[#E65800] ">
                  $14,500.00
                </p>
              </div>
            </div>
          </div>

          {/* Sales Order Section */}
          <div className="w-full lg:basis-[70%] rounded-lg border border-primaryBorder">
            <div className="flex justify-between items-center rounded-t-lg px-2.5 bg-[#F0F0F0]">
              <h5 className="font-medium py-2.5 text-sm">
                Sales Order
              </h5>
              <select className="bg-transparent outline-none text-xs  font-light text-[#5C4D58]">
                <option>This month</option>
              </select>
            </div>
            {/* Scrollable X & Y Table */}
            <div className="w-full h-[10rem] overflow-x-auto overflow-y-auto custom-scrollbar">
              <div className="min-w-[600px]">
                <CompactTable
                  columns={salesColumnSellerDashoard}
                  data={{ nodes: salesTableSellerDashboard() }}
                  theme={tableTheme}
                  layout={{ fixedHeader: true }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 rounded-lg border border-primaryBorder">
          {/* Header Section */}
          <div className="flex justify-between items-center rounded-t-lg px-3 py-2 bg-[#F0F0F0]">
            <h5 className="font-medium text-sm sm:text-base">
              Sales Order Summary (in Naira)
            </h5>
            <select className="bg-transparent outline-none text-xs sm:text-sm">
              <option>This month</option>
            </select>
          </div>

          {/* Chart & Summary Container */}
          <div className="w-full h-auto flex flex-col md:flex-row gap-5 p-3">
            {/* Chart Section */}
            <div className="w-full md:flex-1 h-[15rem] sm:h-[18rem]">
              <LineChartComponent
                chartData={generateLineChartData2SellerDashboard()}
                lines={[
                  {
                    name: "sales",
                    color: "#e65800",
                    lineWidth: 1,
                    dotSize: 7,
                    dotShow: false,
                  },
                ]}
              />
            </div>

            {/* Sales Summary (Sidebar) */}
            <div className="w-full md:basis-[30%] flex flex-col gap-y-3 p-5 border-t md:border-t-0 md:border-l border-primaryBorder">
              <p className="font-medium text-sm ">Total Sales</p>
              <div className="flex rounded-[4px] pr-8 pl-3 py-2 w-full md:w-fit border border-primaryBorder border-l-[5px] border-l-[#e65800] ">
              <div className="w-2 h-2 rounded-lg inline-block bg-[#e65800] mr-3"></div>
                <div>
                  <p className="text-xs uppercase">Direct Sales</p>
                  <p className="text-xs">110,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Sales Order summary*/}

        <div className="flex flex-col md:flex-row gap-4 mt-10">
          {/* Top 5 Purchase Table */}
          <div className="rounded-lg w-full md:basis-[60%] border border-primaryBorder">
            <h5 className="px-3.5 py-3 text-sm sm:text-base">Top 5 Purchase</h5>

            <div className="w-full overflow-x-auto custom-scrollbar">
              <div className="min-w-[500px]">
                {" "}
                {/* Ensure scrolling when content overflows */}
                <CompactTable
                  columns={purchaseColumnSellerDashoard}
                  data={{ nodes: purchaseTableSellerDashboard() }}
                  theme={tableTheme2}
                />
              </div>
            </div>
          </div>

          {/* Top 5 Products Table */}
          <div className="rounded-lg w-full md:basis-[40%] border border-primaryBorder">
            <h5 className="px-3.5 py-3 text-sm sm:text-base">Top 5 Products</h5>

            <div className="w-full overflow-x-auto custom-scrollbar">
              <div className="min-w-[500px]">
                <CompactTable
                  columns={productColumnSellerDashoard}
                  data={{ nodes: productTableSellerDashboard() }}
                  theme={tableTheme2}
                />
              </div>
            </div>
          </div>
        </div>

        {/*padding bottom*/}
      </div>
    </div>
  );
}
