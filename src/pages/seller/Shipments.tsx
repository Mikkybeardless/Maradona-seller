import { Tab, Tabs } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaArrowLeftLong, FaPlus, FaRegEye } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import MuiTableComponent from "../../components/table/TableComponent";
import StateCitySelector from "../../components/common/StateCitySelector";
import { DateSelect } from "../../components/common/DateSelect";
import { FilterGroup } from "../../components/common/FilterGroup";
import { useDebounce } from "../../hooks/useDebounce";
import { IFilter } from "./Orders";
import { TableSearchInput } from "../../components/common/tableSearchInput";

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
  const [shipmentFormData, setShipmentFormData] = useState({
    customerName: "",
    zip: "",
    address: "",
    product: "",
    description: "",
    date: new Date().toLocaleDateString(),
    phone: "",
    city: "",
    state: "",
    carrier: "",
    trackingNumber: "",
  });
  const [shipmentModal, setShipmentModal] = useState(false);
  const promotionModalRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filters, setFilters] = useState<IFilter>({
    type: "",
    status: "",
    date: null,
    modified: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery);

  useClickAway(promotionModalRef, () => {
    setShipmentModal(false);
  });

  function openShipmentModal() {
    setShipmentModal(true);
  }

  function closeShipmentModal() {
    setShipmentModal(false);
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
    { field: "name", headerName: "Item", flex: 0.5, sortable: false },
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
    { field: "status", headerName: "Status", flex: 0.3, sortable: false },
    { field: "edd", headerName: "E.D.D", flex: 0.3, type: "date" },
    { field: "address", headerName: "Delivery Address", flex: 0.5 },
    {
      field: "action",
      headerName: "Actions",
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
      flex: 0.3,
      sortable: false,
    },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof typeof shipmentFormData
  ) => {
    setShipmentFormData({
      ...shipmentFormData,
      [field]: e.target.value,
    });
  };

  useEffect(() => {
    // fetch or filter rows based on active tab, filters, and search query
    const formatedFilters = {
      type: filters.type || "",
      status: filters.status || "",
      date: filters.date ? filters.date.toISOString() : null,
      modified: filters.modified ? filters.modified.toISOString() : null,
    };

    console.log("Fetching or filtering rows based on:", {
      formatedFilters,
      searchQuery,
    });
  }, [filters]);

  useEffect(() => {
    // Simulate fetching or filtering rows based on the search query
    console.log(
      "Fetching or filtering rows based on search query:",
      debouncedSearchQuery
    );
  }, [debouncedSearchQuery]);
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-7 bg-[#F5F5F5]">
      {shipmentModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
          <div
            ref={promotionModalRef}
            className="w-[90%] md:w-[60%] lg:w-[40%] h-[95%] flex flex-col gap-4 p-6 px-12 rounded-2xl bg-white overflow-y-auto shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold">
                Create Shipment
              </h2>
              <FaTimes
                onClick={() => setShipmentModal(false)}
                className="cursor-pointer"
                size={24}
              />
            </div>

            <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto custom-scrollbar-low-opacity">
              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Customer Name:</label>
                <input
                  className="p-3 rounded-lg border border-gray-300 w-full"
                  type="text"
                  value={shipmentFormData.customerName}
                  onChange={(e) => handleFormChange(e, "customerName")}
                  placeholder="Type"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Phone:</label>
                <div className="w-full flex flex-wrap items-end gap-4">
                  <PhoneInput
                    className="!w-full"
                    countrySelectorStyleProps={{
                      className: "w-[20%]",
                      buttonClassName:
                        "!h-auto w-full py-3 !rounded-lg border-gray-300",
                    }}
                    defaultCountry="ng"
                    onChange={(value) =>
                      setShipmentFormData({ ...shipmentFormData, phone: value })
                    }
                    value={shipmentFormData.phone}
                    inputClassName="w-full !h-auto !py-3 !rounded-lg outline-none !border !border-gray-300 !text-base"
                  />
                </div>
              </div>
              <StateCitySelector />
              <div className="flex flex-col gap-y-1 text-sm">
                <label className="font-medium">Zip:</label>
                <input
                  className="p-3 rounded-lg border border-[#B0B0B0]"
                  type="text"
                  value={shipmentFormData.zip}
                  onChange={(e) => handleFormChange(e, "zip")}
                  placeholder="Type"
                />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Street Address:</label>
                <input
                  className="p-3 rounded-lg border border-gray-300 w-full"
                  type="text"
                  value={shipmentFormData.address}
                  onChange={(e) => handleFormChange(e, "address")}
                  placeholder="Type"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Product:</label>
                <input
                  className="p-3 rounded-lg border border-gray-300 w-full"
                  type="text"
                  value={shipmentFormData.product}
                  onChange={(e) => handleFormChange(e, "product")}
                  placeholder="Type"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Product Description:</label>
                <textarea
                  className="p-3 rounded-lg resize-none outline-none custom-scrollbar border border-gray-300 w-full"
                  placeholder="Type"
                  value={shipmentFormData.description}
                  onChange={(e) => handleFormChange(e, "description")}
                  rows={4}
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Shipping Carrier:</label>
                <input
                  className="p-3 rounded-lg border border-gray-300 w-full"
                  type="text"
                  value={shipmentFormData.carrier}
                  onChange={(e) => handleFormChange(e, "carrier")}
                  placeholder="Type"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">Tracking Number:</label>
                <input
                  className="p-3 rounded-lg border border-gray-300 w-full"
                  type="text"
                  value={shipmentFormData.trackingNumber}
                  onChange={(e) => handleFormChange(e, "trackingNumber")}
                  placeholder="Type"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label className="font-medium">E.D.D:</label>
                <input
                  className="p-3 rounded-lg border border-gray-300 w-full"
                  type="date"
                  placeholder="Type"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 text-sm mt-4">
              <div className="flex gap-x-4">
                <button
                  onClick={() => closeShipmentModal()}
                  className="p-3 rounded-lg text-[#14199C]"
                >
                  Cancel
                </button>
                <button className="p-3 rounded-lg text-white bg-[#14199C]">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full py-5 px-6 md:px-24 border-b border-gray-300 bg-white shadow-sm">
        <DashboardSearchBar />
      </div>

      {shipment.active ? (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 w-full mt-4 flex flex-col gap-y-6 flex-1">
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
            className="flex gap-x-2 sm:gap-x-3 items-center text-xs sm:text-sm hover:underline w-fit"
          >
            <FaArrowLeftLong />
            <span>Back to shipments</span>
          </button>

          <div className="flex-1 rounded-[16px] max-w-5xl p-4 sm:p-6 flex flex-col border border-primaryBorder bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg sm:text-2xl font-semibold">
                  Shipment 73KJFHIUDF4
                </h2>
                <p className="text-xs sm:text-sm">
                  Jun 2, 2023{" "}
                  <span className="rounded-[100px] px-2 py-1 bg-[#FBF5D6] text-sm">
                    In transit
                  </span>
                </p>
              </div>
              <div className="flex gap-x-2 mt-3 sm:mt-0">
                {pathname.split("/")[1] === "admin" ? (
                  <Link
                    to="/admin/shipments/track-shipment"
                    className="rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2 text-white bg-defaultOrange"
                  >
                    Track
                  </Link>
                ) : (
                  <Link
                    to="/seller/shipments/track"
                    className="rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2 text-white bg-defaultOrange"
                  >
                    Track
                  </Link>
                )}
                <button className="rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2 text-defaultOrange border border-defaultOrange">
                  Contact carrier
                </button>
              </div>
            </div>

            {/* Shipment Information */}
            <div className="flex flex-col flex-1 mt-12 ">
              <h5 className="text-sm sm:text-lg font-semibold mb-3">
                Shipment information
              </h5>
              {[
                {
                  label: "Client Account Number",
                  value: shipment.data.accountNumber,
                },
                { label: "Customer Name", value: shipment.data.name },
                { label: "Item", value: shipment.data.itemName },
                {
                  label: "Tracking Number",
                  value: shipment.data.trackingNumber,
                },
                {
                  label: "Shipping carrier",
                  value: shipment.data.shippingCenter,
                },
                { label: "Status", value: shipment.data.status },
                { label: "E.D.D", value: shipment.data.edd },
                {
                  label: "Delivery Address",
                  value: shipment.data.deliveryAddress,
                },
                { label: "Phone", value: shipment.data.phone },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-x-2 text-xs sm:text-sm border-b border-b-primaryBorder py-2"
                >
                  <span className="opacity-60 w-1/3">{item.label}:</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="work-sans px-4 sm:px-8 md:px-16 lg:px-24 w-full mt-4 flex flex-col flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-1">
            <h1 className="text-2xl sm:text-3xl font-bold">Shipments</h1>
            <button
              onClick={openShipmentModal}
              className="rounded-lg flex items-center gap-x-2 sm:gap-x-3 text-xs sm:text-sm px-4 sm:px-5 py-2 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
            >
              <FaPlus />
              New Shipment
            </button>
          </div>

          {/* Tabs */}
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

          {/* Filters */}
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
                {
                  name: "status",
                  placeholder: "Status",
                  options: [
                    { label: "Pending", value: "pending" },
                    { label: "Processed", value: "processed" },
                    { label: "Cancelled", value: "cancelled" },
                    { label: "Returned", value: "returned" },
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
                  placeholder="Search shipments"
                />
              }
            />
          </div>

          {/* Shipment Table */}
          <div className="mt-3 flex flex-1 w-full overflow-x-auto bg-white">
            {selectedTab === 0 ? (
              <MuiTableComponent
                columns={columns}
                rows={rows.filter((row) => row.status === "Active")}
                showCheckbox={false}
                rowHeight={60}
                pageSize={10}
              />
            ) : (
              <MuiTableComponent
                columns={columns}
                rows={rows.filter((row) => row.status === "Complete")}
                showCheckbox={false}
                rowHeight={60}
                pageSize={10}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
