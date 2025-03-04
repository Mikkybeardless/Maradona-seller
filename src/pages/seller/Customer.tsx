import { getTheme } from "@table-library/react-table-library/baseline";
import { CompactTable } from "@table-library/react-table-library/compact";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useTheme } from "@table-library/react-table-library/theme";
import { FaDotCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Car from "../../assets/Product-page-car.png";
import CompactTablePagination from "../../components/seller/CompactTablePagination";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

export default function Customer() {
  const location = useLocation();
  const { pathname } = location;

  const tableColumn = [
    { label: "Order ID", renderCell: (item: any) => item.id },
    { label: "Order Date", renderCell: (item: any) => item.date },
    { label: "Items Purchased", renderCell: (item: any) => item.purchased },
    { label: "Total Amount", renderCell: (item: any) => item.amount },
    { label: "Status", renderCell: (item: any) => item.status },
  ];

  const tableColumn2 = [
    { label: "Date", renderCell: (item: any) => item.date },
    { label: "Type", renderCell: (item: any) => item.type },
    {
      label: "Issue Description",
      renderCell: (item: any) => item.description,
    },
    { label: "Status", renderCell: (item: any) => item.status },
    { label: "Actions", renderCell: () => "View Details" },
  ];

  const tableData = () => {
    let numberArray = [1, 2, 3, 4];
    let dummyArray: any = [];
    numberArray.forEach((num) => {
      dummyArray.push({
        id: "100" + num.toString(),
        date: new Date().toLocaleDateString(),
        purchased: "Car: Toyota Camry",
        amount: 2500000,
        status: "Completed",
      });
    });
    return dummyArray;
  };

  const tableData2 = () => {
    let numberArray = [1, 2, 3, 4];
    let dummyArray: any = [];
    numberArray.forEach(() => {
      dummyArray.push({
        date: new Date().toLocaleDateString(),
        type: "Email",
        description: "Payment clarification",
        status: "Pending",
        action: "View details",
      });
    });
    return dummyArray;
  };

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
                font-size: 14px;
                background-color: #F5F5F5;
                text-align: left !important;
                
                th:nth-of-type(1) {
                }
                `,
      Row: `
                font-size: 14px;


                td {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important;
                    border: none !important;
                }
            `,
    },
  ]);

  const pagination = usePagination(tableData(), {
    state: {
      page: 0,
      size: 3,
    },
  });

  const pagination2 = usePagination(tableData2(), {
    state: {
      page: 0,
      size: 3,
    },
  });

  function ProductComponent({ index }: any) {
    return (
      <div key={index} className="w-full flex items-center gap-x-2">
        <div className="w-[65%] flex gap-x-2 items-center">
          <img
            src={Car}
            alt="Product"
            className="w-[55px] h-[55px] rounded-lg object-contain bg-black/5 flex-shrink-0"
          />
          <div className="flex flex-col gap-y-1.5 w-full">
            <div className="flex gap-x-2 items-center text-xs">
              <span>ID: #1011</span>
              <span className="rounded-lg px-2 py-1 text-[#C38D00] bg-[#FFF9D9]">
                Pending
              </span>
            </div>
            <p className="line-clamp-1 font-medium">Toyota Camry, 2018</p>
            <span className="text-xs text-[#6D6D6D]">
              Purchased - Feb 16, 2024
            </span>
          </div>
        </div>

        <div className="w-[30%] flex flex-col gap-y-2">
          <p className="text-sm text-[#6D6D6D]">₦5,500,000 x 1</p>
          <p className="font-medium">₦5,500,000</p>
        </div>

        <div className="w-[5%]">
          <Link
            to={`/${pathname.split("/")[1]}/orders/order`}
            className="text-sm hover:underline text-[#B44500]"
          >
            View
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar md-pb-10 pb-36 bg-[#F5F5F5]">
      <div className="w-full py-5 px-4 md:px-8 lg:px-24 border-b border-b-primaryBorder max-w-[1200px] mx-auto">
        <DashboardSearchBar />
      </div>

      <div className="px-4 md:px-8 lg:px-24 w-full mt-4 flex flex-col items-center flex-1">
        <div className="flex flex-col gap-y-2">
          {/* Name & Location */}
          <h1 className="text-2xl md:text-3xl font-bold">Rosemary Sunday</h1>
          <div className="flex flex-wrap gap-x-2 text-[#5D5D5D] items-center">
            <span className="text-sm">FCT, Abuja, Nigeria</span>
            <FaDotCircle size={5} color="#D9D9D9" />
            <span className="text-sm">2 days ago</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full rounded-lg mt-7 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-primaryBorder bg-white">
          {/* Orders */}
          <div className="flex flex-col gap-y-2 px-5 py-4 border-b md:border-b-0 md:border-r border-primaryBorder">
            <p className="text-xs text-[#6D6D6D]">Orders</p>
            <p className="text-xl text-[#121488] font-medium">6</p>
          </div>

          {/* Amount Spent */}
          <div className="flex flex-col gap-y-2 px-5 py-4 border-b md:border-b-0 md:border-r border-primaryBorder">
            <p className="text-xs text-[#6D6D6D]">Amount spent</p>
            <p className="text-xl text-[#121488] font-medium">₦23,000</p>
          </div>

          {/* Conversion */}
          <div className="flex flex-col gap-y-2 px-5 py-4 border-b md:border-b-0 md:border-r border-primaryBorder">
            <p className="text-xs text-[#6D6D6D]">Conversion</p>
            <p className="text-xl text-[#121488] font-medium">80%</p>
          </div>

          {/* Frequency */}
          <div className="flex flex-col gap-y-2 px-5 py-4">
            <p className="text-xs text-[#6D6D6D]">Frequency</p>
            <p className="text-xl text-[#121488] font-medium">63%</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start mt-4">
          {/* Left Section (70%) */}
          <div className="w-full md:w-[70%] flex flex-col gap-y-4">
            {/* Recent Orders */}
            <div className="w-full rounded-lg border border-primaryBorder bg-white">
              <h3 className="font-medium p-4">Recent order(s)</h3>

              <div className="w-full h-[20rem] flex flex-col gap-y-7 px-3 py-4 custom-scrollbar overflow-y-auto border-y border-y-primaryBorder">
                {[1, 2, 3, 4, 5].map((num) => (
                  <ProductComponent key={num} index={num} />
                ))}
              </div>

              <div className="p-4">
                <button className="font-medium opacity-70 hover:underline">
                  View all
                </button>
              </div>
            </div>

            {/* Order History with Horizontal Scrolling */}
            <div className="w-full rounded-lg border customer-table border-primaryBorder bg-white">
              <h3 className="font-medium p-4">Order History</h3>
              <div className="w-full overflow-x-auto">
                <CompactTable
                  columns={tableColumn}
                  data={{ nodes: tableData() }}
                  theme={theme}
                  pagination={pagination}
                  layout={{ fixedHeader: true }}
                  overflow={true}
                />
              </div>
              <div className="flex justify-end items-center w-full p-3 px-4">
                <CompactTablePagination
                  pagination={pagination}
                  tableData={tableData()}
                />
              </div>
            </div>

            {/* Interaction History with Horizontal Scrolling */}
            <div className="w-full rounded-lg border customer-table border-primaryBorder bg-white">
              <h3 className="font-medium p-4">Interaction History</h3>
              <div className="w-full overflow-x-auto">
                <CompactTable
                  columns={tableColumn2}
                  data={{ nodes: tableData2() }}
                  theme={theme}
                  pagination={pagination2}
                  layout={{ fixedHeader: true }}
                />
              </div>
              <div className="flex justify-end items-center w-full p-3 px-4">
                <CompactTablePagination
                  pagination={pagination2}
                  tableData={tableData2()}
                />
              </div>
            </div>
          </div>

          {/* Right Section (30%) */}
          <div className="w-full md:w-[30%] flex flex-col gap-y-4">
            {/* Basic Information */}
            <div className="w-full flex flex-col rounded-lg border border-primaryBorder bg-white">
              <h3 className="font-medium p-4 border-b border-b-primaryBorder">
                Basic information
              </h3>
              <div className="flex flex-col p-4 py-3">
                <p className="text-sm opacity-65">Name:</p>
                <p className="font-medium">Rosemary Sunday</p>
              </div>
              <div className="flex flex-col p-4 py-3">
                <p className="text-sm opacity-65">Email:</p>
                <p className="font-medium">rsunday@gmail.com</p>
              </div>
              <div className="flex flex-col p-4 py-3">
                <p className="text-sm opacity-65">Phone number:</p>
                <p className="font-medium">07062393917</p>
              </div>
              <div className="flex flex-col p-4 py-3">
                <p className="text-sm opacity-65">Joined</p>
                <p className="font-medium">Sept 2, 2023</p>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="w-full flex flex-col rounded-lg border border-primaryBorder bg-white">
              <h3 className="font-medium p-4 border-b border-b-primaryBorder">
                Shipping
              </h3>
              <div className="flex flex-col p-4 py-3">
                <p className="text-sm opacity-65">Delivery address 1:</p>
                <p className="font-medium">
                  Mubinu. Osogbo, Osun, Ifedayo, Osun State, Nigeria
                </p>
              </div>
              <div className="flex flex-col p-4 py-3">
                <p className="text-sm opacity-65">Delivery address 2:</p>
                <p className="font-medium">
                  Mubinu. Osogbo, Osun, Ifedayo, Osun State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
