import { GridColDef } from "@mui/x-data-grid";
import { BiEditAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import MuiTableComponent from "../../components/seller/TableComponent";

const rows = (): any[] => {
  const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const returnArray: any[] = [];
  loopArray.forEach((num) => {
    returnArray.push({
      id: num,
      promotionName: "Black friday",
      code: "BF2023",
      type: "Percentage",
      start: new Date(),
      end: new Date(),
      status: "Active",
      metrics: "Usage: 50, Total Discount: ₦100,000",
    });
  });
  return returnArray;
};

const columns: GridColDef[] = [
  {
    field: "promotionName",
    headerName: "Promotion Name",
    flex: 1,
    sortable: false,
  },
  {
    field: "code",
    headerName: "Code",
    flex: 0.5,
    sortable: false,
  },
  {
    field: "type",
    headerName: "Discount type",
    flex: 1,
    sortable: false,
  },
  {
    field: "start",
    headerName: "Start Date",
    type: "date",
    flex: 0.7,
  },
  {
    field: "end",
    headerName: "End Date",
    type: "date",
    flex: 0.7,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 0.6,
    sortable: false,
  },
  {
    field: "metrics",
    headerName: "Performance Metrics",
    flex: 1,
    cellClassName: "text-xs",
    sortable: false,
  },
  {
    field: "Action",
    flex: 0.1,
    sortable: false,
    renderCell: () => {
      return (
        <div className="h-full relative flex justify-center items-center">
          <BiEditAlt size={16} className="cursor-pointer" />
        </div>
      );
    },
  },
];

const data = [
  {
    xAxis: 1,
    userCount: 7,
  },
  {
    xAxis: 2,
    userCount: 4.5,
  },
  {
    xAxis: 1,
    userCount: 7,
  },
  {
    xAxis: 2,
    userCount: 6,
  },
  {
    xAxis: 4,
    userCount: 1.5,
  },
  {
    xAxis: 5,
    userCount: 7,
  },
  {
    xAxis: 2,
    userCount: 6,
  },
];

export default function Promotions() {
  const navigate = useNavigate();

  const handleAddAdsPage = () => {
    navigate("/seller/promotions/create-ads");
  };

  const handleAddPromotionsPage = () => {
    navigate("/seller/promotions/create-promotion");
  };

  const data = [
    { time: 1, userCount1: 4, userCount2: 3 },
    { time: 2, userCount1: 6, userCount2: 5 },
    { time: 3, userCount1: 5, userCount2: 4 },
    { time: 4, userCount1: 3, userCount2: 2 },
    { time: 5, userCount1: 4.5, userCount2: 3.5 },
    { time: 6, userCount1: 5.5, userCount2: 4.8 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-7">
      {/* {promotionModal && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-sm">
          <div
            ref={promotionModalRef}
            className="w-[40%] h-[95%] flex flex-col gap-y-3 p-8 rounded-[24px] bg-white"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Create a promotion</h2>
              <FaTimes
                onClick={() => setPromotionModal(false)}
                className="cursor-pointer"
                size={24}
              />
            </div>

            <div className="flex-1 flex flex-col gap-y-6 mt-3 overflow-y-auto custom-scrollbar-low-opacity">
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Promotion Name:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Discount Type:</label>
                <select className="p-3 rounded-lg border border-[#B0B0B0]">
                  <option>Percentage</option>
                  <option>Flat Amount</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                <div className="flex flex-col gap-y-1 text-sm">
                  <label className="font-medium">Discount Code:</label>
                  <input
                    className="p-3 rounded-lg border border-[#B0B0B0]"
                    type="text"
                    placeholder="Type"
                  />
                </div>
                <div className="flex flex-col gap-y-1 text-sm">
                  <label className="font-medium">Discount Value:</label>
                  <input
                    className="p-3 rounded-lg border border-[#B0B0B0]"
                    type="text"
                    placeholder="Type"
                  />
                </div>
                <div className="flex flex-col gap-y-1 text-sm">
                  <label className="font-medium">Start Date:</label>
                  <input
                    className="p-3 rounded-lg border border-[#B0B0B0]"
                    type="date"
                    placeholder="Type"
                  />
                </div>
                <div className="flex flex-col gap-y-1 text-sm">
                  <label className="font-medium">End Date:</label>
                  <input
                    className="p-3 rounded-lg border border-[#B0B0B0]"
                    type="date"
                    placeholder="Type"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Usage limit:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">
                  Applicable Products/Categories:
                </label>
                <select className="p-3 rounded-lg border border-[#B0B0B0]">
                  <option></option>
                </select>
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Usage limit:</label>
                <textarea
                  className="p-3 rounded-lg resize-none outline-none custom-scrollbar border border-[#B0B0B0]"
                  placeholder="Type"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-end gap-x-2.5 text-sm">
              <button className="p-2.5 rounded-lg text-defaultOrange bg-gray-100">
                Cancel
              </button>
              <button className="p-2.5 rounded-lg text-white bg-defaultOrange hover:bg-defaultOrangeHover">
                Save
              </button>
            </div>
          </div>
        </div>
      )} */}
      <div className="w-full py-5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      <div className="px-20 w-full mt-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mt-1">
          <h1 className="text-3xl font-bold flex items-start">
            Promotions & Ads
          </h1>
          <div className="flex gap-3">
            <button
              onClick={handleAddPromotionsPage}
              className="rounded-lg flex items-center gap-x-2 px-5 py-2.5 text-white text-sm bg-defaultOrange hover:bg-defaultOrangeHover"
            >
              <FaPlus />
              New promotion
            </button>
            <button
              onClick={handleAddAdsPage}
              className="rounded-lg flex items-center gap-x-2 px-5 py-2.5 text-defaultOrange text-sm border-defaultOrange border-[1px] hover:bg-defaultOrangeHover hover:text-white"
            >
              <FaPlus />
              New Ads
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-6 items-center ">
          <ResponsiveContainer width={491.78076171875} height={250}>
            <BarChart data={data}>
              <XAxis
                dataKey="time"
                domain={[0, 7]}
                label={{ value: "Time", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                domain={[0, 6]}
                ticks={[0, 1, 2, 3, 4, 5, 6]}
                axisLine={false}
                tickLine={false}
                label={{
                  value: "User Count",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="userCount1"
                barSize={26}
                fill="#E65800"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="userCount2"
                barSize={26}
                fill="#008000"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="w-[370px]">
            <p className="font-bold text-base text-[#14199C] mb-6">
              Performance Metrics
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-[#585858]">
                  Promotion Name:
                </p>
                <p className="text-sm font-medium text-[#585858]">
                  Total Redemptions:
                </p>
                <p className="text-sm font-medium text-[#585858]">
                  Total Sales Generated:
                </p>
                <p className="text-sm font-medium text-[#585858]">
                  Customer Engagement Rate:
                </p>
                <p className="text-sm font-medium text-[#585858]">
                  Return on Investment (ROI):
                </p>
              </div>
              <div>
                <p className="text-sm font-normal text-[#585858]">
                  Black Friday
                </p>
                <p className="text-sm font-normal text-[#585858]">150</p>
                <p className="text-sm font-normal text-[#585858]">₦3,000,000</p>
                <p className="text-sm font-normal text-[#585858]">30%</p>
                <p className="text-sm font-normal text-[#585858]">500%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end mt-5 w-full">
          <div className="flex gap-x-5 items-center">
            <div className="flex flex-col gap-y-1">
              <p className="text-xs">ID:</p>
              <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                <option>23</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-xs">Location:</p>
              <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                <option>Lugbe, Abuja</option>
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

        <div className="mt-3 flex h-[25rem] w-full overflow-hidden bg-white">
          <MuiTableComponent
            columns={columns}
            rows={rows()}
            paginationActive={true}
            rowHeight={60}
            showCheckbox={false}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
}
