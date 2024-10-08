import { Link } from "react-router-dom"
import DashboardSearchBar from "../../components/seller/DashboardSearchBar"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { HiDotsHorizontal } from "react-icons/hi"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"
import Car from "../../assets/Product-page-car.png"
import Paystack from "../../assets/paystack-logo.svg"
import { GrEdit } from "react-icons/gr"
import { FaTimes } from "react-icons/fa"

export default function Order() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [markModal, setMarkModal] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [invoiceModal, setInvoiceModal] = useState(false)
    const dropDownRef = useRef<HTMLDivElement>(null)
    const markModalRef = useRef<HTMLDivElement>(null)
    const cancelModalRef = useRef<HTMLDivElement>(null)
    const invoiceModalRef = useRef<HTMLDivElement>(null)

    useClickAway(dropDownRef, () => {
        setShowDropdown(false)
    })
    useClickAway(markModalRef, () => {
        setMarkModal(false)
    })
    useClickAway(cancelModalRef, () => {
        setCancelModal(false)
    })
    useClickAway(invoiceModalRef, () => {
        setInvoiceModal(false)
    })

    function toggleDropdown() {
        setShowDropdown(true)
    }

    function openMarkModal() {
        setMarkModal(true)
    }

    function openCancelModal() {
        setCancelModal(true)
    }

    function openInvoiceModal() {
        setInvoiceModal(true)
    }

    return (
        <>
            {markModal ? (
                <div className="fixed z-30 flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/50">
                    <div
                        ref={markModalRef}
                        className="w-[35%] flex flex-col gap-y-7 rounded-2xl p-7 bg-white"
                    >
                        <div className="w-full flex justify-between items-center">
                            <span className="text-2xl font-semibold">
                                Mark Order as
                            </span>
                            <FaTimes
                                onClick={() => setMarkModal(false)}
                                size={25}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex items-center gap-x-3">
                                <input
                                    className="size-[20px] border border-primaryBorder"
                                    type="checkbox"
                                    id="process"
                                />
                                <label htmlFor="process">Process</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    className="size-[20px] border border-primaryBorder"
                                    type="checkbox"
                                    id="returned"
                                />
                                <label htmlFor="returned">Returned</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    className="size-[20px] border border-primaryBorder"
                                    type="checkbox"
                                    id="cancelled"
                                />
                                <label htmlFor="cancelled">Cancelled</label>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 text-sm">
                            <button className="px-4 py-2.5 rounded-lg text-defaultOrange bg-secondaryOrange">
                                Keep order
                            </button>
                            <button className="px-4 py-2.5 rounded-lg text-white bg-defaultOrange">
                                Cancel order
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
            {cancelModal ? (
                <div className="fixed z-30 flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/50">
                    <div
                        ref={cancelModalRef}
                        className="w-[40%] flex flex-col rounded-2xl p-7 bg-white"
                    >
                        <div className="w-full flex justify-between items-center">
                            <span className="text-2xl font-semibold">
                                Cancel order
                            </span>
                            <FaTimes
                                onClick={() => setCancelModal(false)}
                                size={25}
                                className="cursor-pointer"
                            />
                        </div>
                        <p className="text-sm mt-3">
                            Cancelling this order means that you have decided
                            not to proceed with the delivery. This may result in
                            a full refund if the order hasn't been processed or
                            shipped yet.
                        </p>
                        <div className="flex flex-col gap-y-1 w-full mt-5">
                            <label className="font-semibold">
                                Reason for cancellation
                            </label>
                            <select className="w-full p-3 rounded-lg border border-primaryBorder outline-none">
                                <option>
                                    Customer changed/cancelled order
                                </option>
                            </select>
                        </div>
                        <h6 className="font-semibold mt-5">Settings</h6>
                        <div className="flex items-center text-sm gap-x-3 mt-1">
                            <input
                                className="size-[20px] border border-primaryBorder"
                                type="checkbox"
                                id="addBack"
                            />
                            <label htmlFor="addBack">
                                Add item back to stock
                            </label>
                        </div>
                        <div className="flex items-center text-sm gap-x-3 mt-2">
                            <input
                                className="size-[20px] border border-primaryBorder"
                                type="checkbox"
                                id="sendNotification"
                            />
                            <label htmlFor="sendNotification">
                                Send a notification to the customer
                            </label>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 text-sm mt-7">
                            <button className="px-4 py-2.5 rounded-lg text-defaultOrange bg-secondaryOrange">
                                Keep order
                            </button>
                            <button className="px-4 py-2.5 rounded-lg text-white bg-defaultOrange">
                                Cancel order
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
            {invoiceModal ? (
                <div className="fixed z-30 flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/50">
                    <div
                        ref={invoiceModalRef}
                        className="w-[40%] flex flex-col rounded-2xl p-7 bg-white"
                    >
                        <div className="w-full flex justify-between items-center">
                            <span className="text-2xl font-semibold">
                                Cancel order
                            </span>
                            <FaTimes
                                onClick={() => setInvoiceModal(false)}
                                size={25}
                                className="cursor-pointer"
                            />
                        </div>
                        <p className="text-sm mt-3">
                            Sending an invoice will generate a document
                            detailing the purchase and payment information for
                            this order. The invoice will be sent to the email
                            address associated with this account.
                        </p>
                        <div className="flex flex-col gap-y-1 w-full mt-5">
                            <label className="font-semibold">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full p-3 rounded-lg border border-primaryBorder outline-none"
                            />
                        </div>
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
            ) : null}
            <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-10 bg-[#F5F5F5]">
                <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
                    <DashboardSearchBar />
                </div>

                <div className="px-24 w-full mt-4 flex flex-col flex-1">
                    <div className="flex gap-x-4 items-center">
                        <Link
                            to="/seller/dashboard"
                            className="text-sm opacity-60"
                        >
                            Order
                        </Link>
                        <FaChevronRight size={18} />
                        <span className="text-sm">Order detail</span>
                    </div>

                    <div className="w-full flex justify-between items-center mt-6">
                        <div className="flex flex-col gap-y-1">
                            <h2 className="text-2xl font-semibold">#1011</h2>
                            <p className="text-xs">
                                Purchased - {new Date().toDateString()}
                            </p>
                        </div>

                        <div className="flex gap-x-5 items-center">
                            <button className="p-3 rounded-lg text-sm border border-primaryBorder bg-white">
                                Edit order
                            </button>
                            <div className="flex gap-x-1 items-center">
                                <button
                                    title="Previous"
                                    className="p-3 rounded-md bg-white border border-primaryBorder"
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    title="Next"
                                    className="p-3 rounded-md bg-white border border-primaryBorder"
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="p-3 rounded-full bg-white border border-primaryBorder"
                                >
                                    <HiDotsHorizontal />
                                </button>
                                {showDropdown ? (
                                    <div
                                        ref={dropDownRef}
                                        className="w-auto flex flex-col absolute top-[120%] text-sm right-0 rounded-lg bg-white"
                                    >
                                        <button
                                            onClick={openInvoiceModal}
                                            className="p-3 px-5 whitespace-nowrap hover:underline rounded-t-lg"
                                        >
                                            Send invoice
                                        </button>
                                        <button className="p-3 px-5 whitespace-nowrap hover:underline">
                                            Archive
                                        </button>
                                        <button
                                            onClick={openCancelModal}
                                            className="p-3 px-5 whitespace-nowrap hover:underline rounded-b-lg text-[#FF000087]/[53%]"
                                        >
                                            Cancel order
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex gap-x-6 mt-6">
                        <div className="w-[70%] flex flex-col gap-y-5">
                            <div className="w-full flex flex-col rounded-lg border border-primaryBorder bg-white">
                                <h4 className="py-5 px-4 flex gap-x-2 items-center font-medium">
                                    Order ID: #1011
                                    <span className="rounded-[100px] text-xs font-normal px-2 py-1 bg-defaultOrange text-white">
                                        On transit
                                    </span>
                                </h4>

                                <div className="w-full flex flex-col border-y border-y-primaryBorder">
                                    <div className="py-5 px-4 flex justify-between items-center gap-x-3">
                                        <div className="flex gap-x-3 items-center">
                                            <img
                                                src={Car}
                                                alt="Product"
                                                className="h-[50px] w-[66px] rounded-lg object-contain bg-gray-100"
                                            />
                                            <span className="font-medium line-clamp-2">
                                                House
                                            </span>
                                        </div>
                                        <span className="text-xs opacity-70">
                                            ₦250,000 x 1
                                        </span>
                                        <span className="text-sm font-medium">
                                            ₦250,000
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-end py-3 px-4">
                                    <button
                                        onClick={openMarkModal}
                                        className="py-3 px-5 rounded-lg text-white text-sm bg-defaultOrange hover:bg-defaultOrangeHover"
                                    >
                                        Mark as
                                    </button>
                                </div>
                            </div>

                            <div className="w-full flex flex-col rounded-lg border border-primaryBorder bg-white">
                                <h4 className="py-5 px-4 flex gap-x-2 items-center font-medium">
                                    Payment
                                    <span className="rounded-[100px] text-xs font-normal px-2 py-1 text-defaultOrange bg-[#FFF1E9]">
                                        Paid
                                    </span>
                                </h4>

                                <div className="w-full flex flex-col border-y border-y-primaryBorder">
                                    <div className="py-5 px-4 flex justify-between items-center gap-x-3">
                                        <span className="font-medium text-sm">
                                            Subtotal
                                        </span>
                                        <span className="text-sm opacity-70">
                                            1 item(s)
                                        </span>
                                        <span className="text-sm font-medium">
                                            ₦250,000
                                        </span>
                                    </div>
                                    <div className="py-5 px-4 flex justify-between items-center gap-x-3">
                                        <span className="font-medium text-sm">
                                            Discount
                                        </span>
                                        <span className="text-sm opacity-70">
                                            No discount
                                        </span>
                                        <span className="text-sm font-medium">
                                            ₦ 0
                                        </span>
                                    </div>
                                    <div className="py-5 px-4 flex justify-between items-center gap-x-3">
                                        <span className="font-medium text-sm">
                                            Delivery
                                        </span>
                                        <span className="text-sm opacity-70">
                                            Peace mass transit
                                        </span>
                                        <span className="text-sm font-medium">
                                            ₦1,000
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full px-4 py-3 flex justify-between items-center">
                                    <span className="text-lg font-medium text-defaultOrange">
                                        Total:
                                    </span>
                                    <span className="text-lg font-semibold text-defaultOrange">
                                        ₦250,000
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[30%] flex flex-col gap-y-5">
                            <div className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder">
                                <div className="flex justify-between items-center py-3 px-4 border-b border-b-primaryBorder">
                                    <span className="font-medium">Details</span>
                                    <GrEdit color="#e65800" />
                                </div>

                                <div className="flex flex-col p-4 gap-y-6">
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">Customer:</p>
                                        <p className="font-medium">
                                            Rosemary Sunday
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">Email:</p>
                                        <p className="font-medium">
                                            rsunday@gmail.com
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">
                                            Phone number:
                                        </p>
                                        <p className="font-medium">
                                            07063797396
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">
                                            Order placed:
                                        </p>
                                        <p className="font-medium">
                                            {new Date().toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">
                                            Payment method:
                                        </p>
                                        <img
                                            src={Paystack}
                                            alt="payment logo"
                                            className="h-[20px] w-fit"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder">
                                <div className="flex justify-between items-center py-3 px-4 border-b border-b-primaryBorder">
                                    <span className="font-medium">
                                        Delivery details
                                    </span>
                                    <GrEdit color="#e65800" />
                                </div>

                                <div className="flex flex-col p-4 gap-y-6">
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">
                                            Delivery address:
                                        </p>
                                        <p className="font-medium">
                                            Mubinu. Osogbo, Osun, Ifedayo, Osun
                                            State , Nigeria
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-y-1 text-sm">
                                        <p className="opacity-80">
                                            Delivery agent:
                                        </p>
                                        <p className="font-medium">
                                            Peace mass transit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
