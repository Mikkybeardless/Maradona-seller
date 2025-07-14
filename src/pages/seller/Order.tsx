import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import Car from "../../assets/Product-page-car.png";
import Paystack from "../../assets/paystack-logo.svg";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

export default function Order() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [markModal, setMarkModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const markModalRef = useRef<HTMLDivElement>(null);
  const cancelModalRef = useRef<HTMLDivElement>(null);
  const invoiceModalRef = useRef<HTMLDivElement>(null);

  useClickAway(dropDownRef, () => {
    setShowDropdown(false);
  });
  useClickAway(markModalRef, () => {
    setMarkModal(false);
  });
  useClickAway(cancelModalRef, () => {
    setCancelModal(false);
  });
  useClickAway(invoiceModalRef, () => {
    setInvoiceModal(false);
  });

  function toggleDropdown() {
    setShowDropdown(true);
  }

  function openMarkModal() {
    setMarkModal(true);
  }

  function openCancelModal() {
    setCancelModal(true);
  }

  function openInvoiceModal() {
    setInvoiceModal(true);
  }

  return (
    <>
      {markModal ? (
        <div className="fixed z-30 flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/50">
          <div
            ref={markModalRef}
            aria-label="Mark Order Modal"
            className="w-full max-w-[90%] md:w-[35%] flex flex-col gap-y-7 rounded-2xl p-7 bg-white"
          >
            {/* Header Section */}
            <div className="w-full flex justify-between items-center">
              <span className="text-lg md:text-2xl font-semibold">
                Mark Order as
              </span>
              <FaTimes
                onClick={() => setMarkModal(false)}
                size={25}
                className="cursor-pointer"
              />
            </div>

            {/* Checkbox Options */}
            <div className="flex flex-col gap-y-3">
              {["process", "returned", "cancelled"].map((id, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <input
                    className="size-[20px] border border-primaryBorder"
                    type="checkbox"
                    id={id}
                  />
                  <label
                    htmlFor={id}
                    className="text-sm md:text-base capitalize"
                  >
                    {id}
                  </label>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-x-2 text-sm">
              {/* <button className="px-4 py-2.5 rounded-lg text-[#14199C] bg-[#E8E9FC]">
                Keep order
              </button> */}
              <button className="px-4 py-2.5 rounded-lg text-white bg-defaultOrange">
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {cancelModal && (
        <div className="fixed z-30 flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/50">
          <div
            ref={cancelModalRef}
            aria-label="Cancel Order Modal"
            className="w-full max-w-[90%] md:w-[40%] flex flex-col rounded-2xl p-5 md:p-7 bg-white"
          >
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <span className="text-lg md:text-2xl font-semibold">
                Cancel Order
              </span>
              <FaTimes
                onClick={() => setCancelModal(false)}
                size={25}
                className="cursor-pointer"
              />
            </div>

            {/* Description */}
            <p className="text-sm font-light mt-3">
              Cancelling this order means that you have decided not to proceed
              with the delivery. This may result in a full refund if the order
              hasn't been processed or shipped yet.
            </p>

            {/* Reason for Cancellation */}
            <div className="flex flex-col gap-y-1 w-full mt-5">
              <label className="font-semibold">Reason for cancellation</label>
              <select className="w-full p-3 rounded-lg border border-primaryBorder outline-none">
                <option>Customer changed/cancelled order</option>
              </select>
            </div>

            {/* Settings */}
            <h6 className="font-semibold mt-5">Settings</h6>
            <div className="flex flex-col gap-y-2 text-sm mt-1">
              {[
                { id: "addBack", label: "Add item back to stock" },
                {
                  id: "sendNotification",
                  label: "Send a notification to the customer",
                },
              ].map(({ id, label }) => (
                <div key={id} className="flex items-center gap-x-3">
                  <input
                    className="size-[20px] border border-primaryBorder"
                    type="checkbox"
                    id={id}
                  />
                  <label htmlFor={id}>{label}</label>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-x-2 text-sm mt-7">
              <button className="px-4 py-2.5 rounded-lg text-defaultOrange bg-[#E8E9FC]">
                Keep order
              </button>
              <button className="px-4 py-2.5 rounded-lg text-white bg-[#FF0000]">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      )}

      {invoiceModal && (
        <div className="fixed z-30 flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/50">
          <div
            ref={invoiceModalRef}
            aria-label="Send Invoice Modal"
            className="w-full max-w-[90%] md:w-[40%] flex flex-col rounded-2xl p-5 md:p-7 bg-white"
          >
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <span className="text-lg md:text-2xl font-semibold">
                Send Invoice
              </span>
              <FaTimes
                onClick={() => setInvoiceModal(false)}
                size={25}
                className="cursor-pointer"
              />
            </div>

            {/* Description */}
            <p className="text-sm font-light mt-3">
              Sending an invoice will generate a document detailing the purchase
              and payment information for this order. The invoice will be sent
              to the email address associated with this account.
            </p>

            {/* Email Input */}
            <div className="flex flex-col gap-y-1 w-full mt-5">
              <label className="font-semibold">Email address</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-3 rounded-lg border border-primaryBorder outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-x-2 text-sm mt-7">
              <button className="px-4 py-2.5 rounded-lg text-defaultOrange bg-secondaryOrange">
                Cancel
              </button>
              <button className="px-4 py-2.5 rounded-lg text-white bg-defaultOrange">
                Send invoice
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar md-pb-10 pb-36 bg-[#F5F5F5]">
        <div className="w-full py-5 px-4 md:px-8 lg:px-24 border-b border-b-primaryBorder max-w-[1200px] mx-auto">
          <DashboardSearchBar />
        </div>

        <div className="px-4 md:px-8 lg:px-24 w-full mt-8 mb-8 flex flex-col flex-1">
          <div className="work-sans flex flex-wrap gap-x-2 md:gap-x-4 items-center">
            <Link to="/seller/orders" className="text-xs">
              Orders
            </Link>
            <FaChevronRight size={12} />
            <span className="text-xs text-[#040421] ">Order detail</span>
          </div>

          <div className="w-full flex flex-wrap justify-between items-center mt-6 gap-y-4">
            {/* Order ID & Date */}
            <div className="flex flex-col gap-y-1">
              <h2 className="text-xl font-semibold">#1011</h2>
              <p className="text-xs">Purchased - {new Date().toDateString()}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-x-3 md:gap-x-5 items-center">
              {/* Edit Order */}
              <button className="p-2 md:p-3 rounded-lg text-xs md:text-sm border border-primaryBorder bg-white">
                Edit order
              </button>

              {/* More Options Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="p-2 md:p-3 rounded-full bg-white border border-primaryBorder"
                >
                  <HiDotsHorizontal size={16} />
                </button>
                {showDropdown && (
                  <div
                    ref={dropDownRef}
                    className="w-auto flex flex-col items-start z-10 absolute top-[120%] right-0 rounded-lg bg-white shadow-md border border-gray-200 text-xs md:text-sm"
                  >
                    <button
                      onClick={openInvoiceModal}
                      className="p-3 px-4 md:px-5 whitespace-nowrap hover:underline rounded-t-lg"
                    >
                      Send invoice
                    </button>
                    <button className="p-3 px-4 md:px-5 whitespace-nowrap hover:underline">
                      Archive
                    </button>
                    <button
                      onClick={openCancelModal}
                      className="p-3 px-4 md:px-5 whitespace-nowrap hover:underline rounded-b-lg text-red-500/80"
                    >
                      Cancel order
                    </button>
                  </div>
                )}
              </div>

              {/* Previous & Next Buttons */}
              <div className="flex gap-x-1 items-center">
                <button
                  title="Previous"
                  className="p-2 md:p-3 rounded-md bg-white border border-primaryBorder"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  title="Next"
                  className="p-2 md:p-3 rounded-md bg-white border border-primaryBorder"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap md:flex-nowrap gap-x-6 mt-6">
            {/* Order & Payment Section */}
            <div className="w-full md:w-[70%] flex flex-col gap-y-5">
              {/* Order Details */}
              <section className="w-full flex flex-col rounded-lg border border-primaryBorder bg-white">
                <h4 className="py-4 px-4 flex gap-x-2 items-center font-medium text-sm sm:text-base">
                  Order ID: #1011
                  <span className="rounded-[100px] text-xs font-normal px-2 py-1 bg-[#E65800] text-white">
                    On transit
                  </span>
                </h4>

                <div className="w-full flex flex-col border-y border-y-primaryBorder">
                  <div className="py-4 px-4 flex flex-wrap justify-between items-center gap-x-3">
                    <div className="flex gap-x-3 items-center">
                      <img
                        src={Car}
                        alt="Product"
                        className="h-[40px] sm:h-[50px] w-[50px] sm:w-[66px] rounded-lg object-contain bg-gray-100"
                      />
                      <span className="font-medium text-xs sm:text-sm line-clamp-2">
                        House
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm opacity-70">
                      ₦250,000 x 1
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      ₦250,000
                    </span>
                  </div>
                </div>

                <div className="flex justify-end py-3 px-4">
                  <button
                    onClick={openMarkModal}
                    className="py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-white text-xs sm:text-sm bg-defaultOrange hover:bg-defaultOrangeHover"
                  >
                    Mark as
                  </button>
                </div>
              </section>

              {/* Payment Details */}
              <section
                id="payment-details"
                className="w-full flex flex-col mb-4 rounded-lg border border-primaryBorder bg-white"
              >
                <h4 className="py-4 px-4 flex gap-x-2 items-center font-medium text-sm sm:text-base">
                  Payment
                  <span className="rounded-[100px] text-xs font-normal px-2 py-1 text-[#E65800] bg-[#FFF1E9]">
                    Paid
                  </span>
                </h4>

                <div className="w-full flex flex-col border-y border-y-primaryBorder">
                  {[
                    { label: "Subtotal", value: "₦250,000", desc: "1 item(s)" },
                    { label: "Discount", value: "₦ 0", desc: "No discount" },
                    {
                      label: "Delivery",
                      value: "₦1,000",
                      desc: "Peace mass transit",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="py-4 px-4 flex flex-wrap items-center gap-x-3"
                    >
                      <span className="font-medium w-1/3 text-xs sm:text-sm">
                        {item.label}
                      </span>
                      <span className="text-xs flex w-1/3 sm:text-sm opacity-70">
                        {item.desc}
                      </span>
                      <span className="text-sm w-1/4 flex justify-end sm:text-base font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full px-4 py-3 flex justify-between items-center">
                  <span className="text-sm sm:text-lg font-medium text-defaultOrange">
                    Total:
                  </span>
                  <span className="text-sm sm:text-lg font-semibold text-defaultOrange">
                    ₦250,000
                  </span>
                </div>
              </section>
            </div>

            {/* Customer & Delivery Details */}
            <section
              id="customer-delivery-details"
              className="w-full md:w-[30%] flex flex-col gap-y-5"
            >
              {[
                {
                  title: "Details",
                  editIcon: <GrEdit color="#e65800" />,
                  data: [
                    { label: "Customer", value: "Rosemary Sunday" },
                    { label: "Email", value: "rsunday@gmail.com" },
                    { label: "Phone number", value: "07063797396" },
                    {
                      label: "Order placed",
                      value: new Date().toLocaleDateString(),
                    },
                    {
                      label: "Payment method",
                      value: (
                        <img
                          src={Paystack}
                          alt="payment logo"
                          className="h-[16px] sm:h-[20px] w-fit"
                        />
                      ),
                    },
                  ],
                },
                {
                  title: "Delivery details",
                  editIcon: <GrEdit color="#e65800" />,
                  data: [
                    {
                      label: "Delivery address:",
                      value:
                        "Mubinu. Osogbo, Osun, Ifedayo, Osun State, Nigeria",
                    },
                    { label: "Delivery agent:", value: "Peace mass transit" },
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder"
                >
                  <div className="flex justify-between items-center py-3 px-4 border-b border-b-primaryBorder">
                    <span className="font-medium text-sm sm:text-base">
                      {section.title}
                    </span>
                    {section.editIcon}
                  </div>

                  <div className="flex flex-col p-4 gap-y-4 sm:gap-y-6">
                    {section.data.map((item, i) => (
                      <div key={i} className="flex flex-col gap-y-1 text-xs">
                        <p className="opacity-80">{item.label}</p>
                        <p className="">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
