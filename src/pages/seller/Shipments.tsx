import { Tab, Tabs } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { FaArrowLeftLong, FaPlus, FaRegEye } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import MuiTableComponent from "../../components/seller/TableComponent";

export default function Shipments() {
  const location = useLocation();
  const { pathname } = location;
  const [shipment, setShipment] = useState({
    active: false,
    data: {
      accountNumber: "",
      name: "",
      itemName: "",
      trackingNumber: "",
      shippingCenter: "",
      status: "",
      edd: new Date().toLocaleDateString(),
      deliveryAddress: "",
      phone: "",
    },
  });
  const [shipmentModal, setShipmentModal] = useState(false);
  const promotionModalRef = useRef<HTMLDivElement>(null);
  const [phone, setPhone] = useState<any>();
  const [selectedTab, setSelectedTab] = useState(0);

  useClickAway(promotionModalRef, () => {
    setShipmentModal(false);
  });

  function openShipmentModal() {
    setShipmentModal(true);
  }

  const rows: any[] = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      trackingNumber: "TRK-789012",
      shippingCarrier: "FedEx",
      status: "Active",
      edd: new Date(),
      address: "123 Main St, Springfield, IL",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      trackingNumber: "TRK-123456",
      shippingCarrier: "UPS",
      status: "Complete",
      edd: new Date(),
      address: "45 Elm St, Los Angeles, CA",
    },
    {
      id: 3,
      name: "Samsung Galaxy S23",
      trackingNumber: "TRK-654321",
      shippingCarrier: "DHL",
      status: "Active",
      edd: new Date(),
      address: "78 Pine St, Miami, FL",
    },
    {
      id: 4,
      name: "Sony PlayStation 5",
      trackingNumber: "TRK-567890",
      shippingCarrier: "USPS",
      status: "Complete",
      edd: new Date(),
      address: "91 Oak St, Houston, TX",
    },
    {
      id: 5,
      name: "Apple Watch Ultra",
      trackingNumber: "TRK-345678",
      shippingCarrier: "Amazon Logistics",
      status: "Active",
      edd: new Date(),
      address: "22 Maple Ave, Boston, MA",
    },
    {
      id: 6,
      name: "Dell XPS 15",
      trackingNumber: "TRK-678901",
      shippingCarrier: "FedEx",
      status: "Complete",
      edd: new Date(),
      address: "13 Cedar Rd, San Francisco, CA",
    },
    {
      id: 7,
      name: "Bose Noise Cancelling Headphones 700",
      trackingNumber: "TRK-112233",
      shippingCarrier: "UPS",
      status: "Active",
      edd: new Date(),
      address: "99 Birch Ln, Seattle, WA",
    },
    {
      id: 8,
      name: "LG OLED C2 TV",
      trackingNumber: "TRK-556677",
      shippingCarrier: "DHL",
      status: "Complete",
      edd: new Date(),
      address: "250 Oakwood Dr, Denver, CO",
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      trackingNumber: "TRK-998877",
      shippingCarrier: "USPS",
      status: "Active",
      edd: new Date(),
      address: "801 River Rd, Atlanta, GA",
    },
    {
      id: 10,
      name: "Google Pixel 7 Pro",
      trackingNumber: "TRK-334455",
      shippingCarrier: "Amazon Logistics",
      status: "Complete",
      edd: new Date(),
      address: "456 Willow St, Austin, TX",
    },
    {
      id: 11,
      name: "Microsoft Surface Pro 9",
      trackingNumber: "TRK-223344",
      shippingCarrier: "FedEx",
      status: "Active",
      edd: new Date(),
      address: "77 Sunset Blvd, New York, NY",
    },
    {
      id: 12,
      name: "Canon EOS R6 Camera",
      trackingNumber: "TRK-009988",
      shippingCarrier: "UPS",
      status: "Complete",
      edd: new Date(),
      address: "5 Lake View Ct, Orlando, FL",
    },
    {
      id: 13,
      name: "Oculus Quest 2",
      trackingNumber: "TRK-556699",
      shippingCarrier: "DHL",
      status: "Active",
      edd: new Date(),
      address: "66 Ocean Dr, San Diego, CA",
    },
    {
      id: 14,
      name: "Samsung Galaxy Tab S8",
      trackingNumber: "TRK-774411",
      shippingCarrier: "USPS",
      status: "Complete",
      edd: new Date(),
      address: "30 Redwood Ave, Las Vegas, NV",
    },
    {
      id: 15,
      name: "Razer Blade 17 Gaming Laptop",
      trackingNumber: "TRK-332211",
      shippingCarrier: "Amazon Logistics",
      status: "Active",
      edd: new Date(),
      address: "12 Ivy St, Philadelphia, PA",
    },
    {
      id: 16,
      name: "JBL Boombox 3 Speaker",
      trackingNumber: "TRK-667788",
      shippingCarrier: "FedEx",
      status: "Complete",
      edd: new Date(),
      address: "42 Palm Dr, Dallas, TX",
    },
    {
      id: 17,
      name: "Tesla Model 3 Charging Cable",
      trackingNumber: "TRK-889900",
      shippingCarrier: "UPS",
      status: "Active",
      edd: new Date(),
      address: "909 Aspen Ave, Chicago, IL",
    },
    {
      id: 18,
      name: "Apple iPad Pro M2",
      trackingNumber: "TRK-225588",
      shippingCarrier: "DHL",
      status: "Complete",
      edd: new Date(),
      address: "314 Spruce Rd, Phoenix, AZ",
    },
    {
      id: 19,
      name: "Sony WH-1000XM5 Headphones",
      trackingNumber: "TRK-665544",
      shippingCarrier: "USPS",
      status: "Active",
      edd: new Date(),
      address: "700 Cypress Ln, Charlotte, NC",
    },
    {
      id: 20,
      name: "ASUS ROG Strix RTX 4080 GPU",
      trackingNumber: "TRK-778899",
      shippingCarrier: "Amazon Logistics",
      status: "Complete",
      edd: new Date(),
      address: "123 Jasmine St, Nashville, TN",
    },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "No", flex: 0.2 },
    { field: "name", headerName: "Item", flex: 1, sortable: false },
    {
      field: "trackingNumber",
      headerName: "Tracking Number",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "shippingCarrier",
      headerName: "Shipping Carrier",
      flex: 0.5,
      sortable: false,
    },
    { field: "status", headerName: "Status", flex: 0.5, sortable: false },
    { field: "edd", headerName: "E.D.D", flex: 0.5, type: "date" },
    { field: "address", headerName: "Delivery Address", flex: 1 },
    {
      field: "action",
      headerName: "",
      renderCell: () => {
        return (
          <div className="h-full relative flex justify-center items-center">
            <FaRegEye
              onClick={() =>
                setShipment({
                  active: true,
                  data: {
                    accountNumber: "0491190391",
                    name: "Rosemary Sunday",
                    itemName: "Toyota Camry 2015",
                    trackingNumber: "12345670",
                    shippingCenter: "FedEx",
                    status: "In transit",
                    edd: new Date().toLocaleDateString(),
                    deliveryAddress: "123 Main St, Springfiled, IL",
                    phone: "+234902830830",
                  },
                })
              }
              size={16}
              className="cursor-pointer"
            />
          </div>
        );
      },
      flex: 0.1,
      sortable: false,
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-7 bg-[#F5F5F5]">
      {shipmentModal && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-sm">
          <div
            ref={promotionModalRef}
            className="w-[40%] h-[95%] flex flex-col gap-y-3 p-8 rounded-[24px] bg-white"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Create Shipment</h2>
              <FaTimes
                onClick={() => setShipmentModal(false)}
                className="cursor-pointer"
                size={24}
              />
            </div>

            <div className="flex-1 flex flex-col gap-y-6 mt-3 overflow-y-auto custom-scrollbar-low-opacity">
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Customer Name:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Phone:</label>
                <div className="w-full flex items-end gap-x-6">
                  <PhoneInput
                    className="!w-full gap-x-5"
                    countrySelectorStyleProps={{
                      className: "w-[20%]",
                      buttonClassName:
                        "!h-[auto] w-full py-3 !rounded-lg border-[#B0B0B0]",
                    }}
                    defaultCountry="ng"
                    onChange={setPhone}
                    value={phone}
                    inputClassName="w-full !h-[unset] !py-3 !rounded-lg outline-none !border !border-[#B0B0B0] !text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Address:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Product:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Product description:</label>
                <textarea
                  className="p-3 rounded-lg resize-none outline-none custom-scrollbar border border-[#B0B0B0]"
                  placeholder="Type"
                  rows={4}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Shipping carrier:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Tracking Number:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">E.D.D:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="date"
                  placeholder="Type"
                />
              </div>
            </div>

            <div className="flex justify-end gap-x-2.5 text-sm">
              <button className="p-2.5 rounded-lg text-white bg-defaultOrange hover:bg-defaultOrangeHover">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full py-5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {shipment.active ? (
        <div className="px-24 w-full mt-4 flex flex-col gap-y-6 flex-1">
          <button
            onClick={() =>
              setShipment({
                active: false,
                data: {
                  accountNumber: "",
                  name: "",
                  itemName: "",
                  trackingNumber: "",
                  shippingCenter: "",
                  status: "",
                  edd: new Date().toLocaleDateString(),
                  deliveryAddress: "",
                  phone: "",
                },
              })
            }
            className="flex gap-x-3 items-center text-sm hover:underline w-fit"
          >
            <FaArrowLeftLong />
            <span className="">Back to shipments</span>
          </button>

          <div className="flex-1 rounded-[16px] p-6 flex flex-col border border-primaryBorder bg-white">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-2xl font-semibold">Shipment 73KJFHIUDF4</h2>
                <p className="text-sm">
                  Jun 2, 2023{" "}
                  <span className="rounded-[100px] px-2 py-0.5 bg-[#FBF5D6]">
                    In transit
                  </span>
                </p>
              </div>
              <div className="flex gap-x-2">
                {pathname.split("/")[1] === "admin" ? (
                  <Link
                    to="/admin/shipments/track-shipment"
                    className="rounded-lg text-sm px-5 py-2.5 text-white bg-defaultOrange"
                  >
                    Track
                  </Link>
                ) : (
                  <button className="rounded-lg text-sm px-5 py-2.5 text-white bg-defaultOrange">
                    Track
                  </button>
                )}
                <button className="rounded-lg text-sm px-5 py-2.5 text-defaultOrange border border-defaultOrange">
                  Contact carrier
                </button>
              </div>
            </div>

            <div className="flex flex-col flex-1 mt-7">
              <h5 className="text-lg font-semibold mb-3">
                Shipment information
              </h5>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Client Account Number:</span>
                <span className="font-medium">
                  {shipment.data.accountNumber}
                </span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Customer Name:</span>
                <span className="font-medium">{shipment.data.name}</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Item:</span>
                <span className="font-medium">{shipment.data.itemName}</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Tracking Number:</span>
                <span className="font-medium">
                  {shipment.data.trackingNumber}
                </span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Shipping carrier:</span>
                <span className="font-medium">
                  {shipment.data.shippingCenter}
                </span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Status:</span>
                <span className="font-medium">{shipment.data.status}</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">E.D.D:</span>
                <span className="">{shipment.data.edd}</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Delivery Address:</span>
                <span className="font-medium">
                  {shipment.data.deliveryAddress}
                </span>
              </div>
              <div className="flex items-center gap-x-2 text-sm border-b border-b-primaryBorder py-2">
                <span className="opacity-60">Phone:</span>
                <span className="font-medium">{shipment.data.phone}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-24 w-full mt-4 flex flex-col flex-1">
          <div className="flex justify-between items-center mt-1">
            <h1 className="text-3xl font-bold flex items-start">Shipments</h1>

            <button
              onClick={openShipmentModal}
              className="rounded-lg flex items-center gap-x-3 text-sm px-5 py-2.5 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
            >
              <FaPlus />
              New Shipment
            </button>
          </div>

          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            aria-label="Shipment Tabs"
            textColor="primary"
            indicatorColor="primary"
            className="mt-4"
          >
            <Tab
              label={`Active(${
                rows.filter((row) => row.status === "Active").length
              })`}
            />
            <Tab
              label={`Complete(${
                rows.filter((row) => row.status === "Complete").length
              })`}
            />
          </Tabs>
          <div className="flex justify-between items-end mt-5 w-full">
            <div className="flex gap-x-5 items-center">
              <div className="flex flex-col gap-y-1">
                <p className="text-xs">Status:</p>
                <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                  <option>In transit</option>
                </select>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-xs">Date:</p>
                <select className="p-2.5 text-sm rounded-lg border border-primaryBorder bg-white outline-none">
                  <option>Today</option>
                  <option>Yesterday</option>
                </select>
              </div>
            </div>

            <div className="flex gap-x-2 px-3 basis-[25%] rounded-lg border border-primaryBorder">
              <CiSearch className="h-fit w-fit my-auto" size={24} />
              <input
                className="flex-1 py-2.5 outline-none border-none text-sm bg-transparent"
                placeholder="Search shipments"
                type="text"
              />
            </div>
          </div>

          {selectedTab === 0 && (
            <div className="mt-3 flex flex-1 w-full overflow-hidden bg-white">
              <MuiTableComponent
                columns={columns}
                rows={rows.filter((row) => row.status === "Active")}
                showCheckbox={false}
                paginationActive={true}
                rowHeight={60}
                pageSize={10}
              />
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-3 flex flex-1 w-full overflow-hidden bg-white">
              <MuiTableComponent
                columns={columns}
                rows={rows.filter((row) => row.status === "Complete")}
                showCheckbox={false}
                paginationActive={true}
                rowHeight={60}
                pageSize={10}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
