import {
    FaApple,
    FaAward,
    FaGooglePlay,
    FaInstagram,
    FaRegBell,
    FaRegHeart,
    FaRegUser,
    FaStar,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6"
import logo from "../assets/logo.svg"
import shorterLogo from "../assets/shorter-logo.svg"
import Car from "../assets/Dashboard-Car-1.png"
import House from "../assets/Dashboard-house-1.png"
import Land from "../assets/Dashboard-land-1.png"
import IOSapp from "../assets/IOS-app-display.png"
import QRcode from "../assets/qr-code.png"
import PaymentCards from "../assets/payment-cards.svg"
import { GrCart, GrLocation } from "react-icons/gr"
import { CiSearch } from "react-icons/ci"
import HomeCarousel from "../components/HomeCarousel"
import DashboardRecentListings from "../components/DashboardRecentListings"
import { RiTruckLine } from "react-icons/ri"
import { FiRefreshCw } from "react-icons/fi"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center overflow-y-auto overflow-x-hidden custom-scrollbar">
            <div className="w-[85%] h-full">
                <nav className="flex justify-between items-center py-2">
                    <div className="flex gap-x-8 items-center">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#help">Help</a>
                    </div>

                    <div className="flex gap-x-6 items-center">
                        <FaRegUser
                            size={20}
                            className="cursor-pointer hover:text-defaultOrange"
                        />
                        <FaRegHeart
                            size={20}
                            className="cursor-pointer hover:text-defaultOrange"
                        />
                        <FaRegBell
                            size={20}
                            className="cursor-pointer hover:text-defaultOrange"
                        />
                        <GrCart
                            size={20}
                            className="cursor-pointer hover:text-defaultOrange"
                        />
                    </div>
                </nav>

                <header className="flex items-center justify-between gap-x-16 mt-5">
                    <img className="h-[60px] w-auto" src={logo} alt="Logo" />

                    <div className="flex-1 flex gap-x-3 items-stretch">
                        <select className="px-4 py-3 border rounded-[8px] border-primaryBorder">
                            <option>Categories</option>
                        </select>
                        <div className="flex gap-x-5 items-center px-4 border rounded-[8px] border-primaryBorder flex-1">
                            <CiSearch size={20} />
                            <input
                                className="py-3 flex-1"
                                type="text"
                                placeholder="Property type, location, price range"
                            />
                        </div>
                    </div>

                    <Link
                        to="/seller/dashboard"
                        className="rounded-[8px] px-3 py-2.5 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
                    >
                        Become a seller
                    </Link>
                </header>

                <div id="home" className="w-full mt-12">
                    <HomeCarousel />
                </div>

                <div className="mt-20">
                    <h1 className="text-3xl font-bold">Featured Categories</h1>

                    <div className="mt-10 flex justify-between gap-x-5">
                        <div className="rounded-[8px] p-5 basis-[50%] bg-[#FAFAFA]">
                            <h4 className="font-medium">Cars</h4>
                            <div className="grid grid-cols-3 gap-x-3 gap-y-6 mt-2">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <div
                                        key={num}
                                        className="w-full flex flex-col gap-y-2.5 rounded-t-[8px]"
                                    >
                                        <img
                                            className="h-[130px] w-full rounded-[8px] object-fill bg-gray-200"
                                            src={Car}
                                            alt="dummy data"
                                        />
                                        <p className="text-sm text-center text-defaultOrange">
                                            Commercial
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[8px] p-5 basis-[50%] bg-[#FAFAFA]">
                            <h4 className="font-medium">Houses</h4>
                            <div className="grid grid-cols-3 gap-x-3 gap-y-6 mt-2">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <div
                                        key={num}
                                        className="w-full flex flex-col gap-y-2.5 rounded-t-[8px]"
                                    >
                                        <img
                                            className="h-[130px] w-full rounded-[8px] object-fill bg-gray-200"
                                            src={House}
                                            alt="dummy data"
                                        />
                                        <p className="text-sm text-center text-defaultOrange">
                                            Apartments
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 rounded-[8px] p-4 bg-[#FAFAFA]">
                        <h4 className="font-medium">Lands</h4>
                        <div className="w-full mt-1.5 grid grid-cols-3 gap-x-5">
                            {[1, 2, 3].map((num) => (
                                <div
                                    key={num}
                                    className="w-full flex flex-col gap-y-4 rounded-t-[8px]"
                                >
                                    <img
                                        className="h-[200px] w-full rounded-[8px] object-fill bg-gray-200"
                                        src={Land}
                                        alt="dummy data"
                                    />
                                    <p className="text-sm text-center text-defaultOrange">
                                        Residential Land
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <DashboardRecentListings />
                </div>

                <div className="h-[75vh] mt-16 w-full relative flex justify-center text-white">
                    <div className="h-full absolute top-0 z-0 w-screen discount-bg bg-no-repeat bg-cover bg-red-300"></div>
                    <div className="w-screen h-full absolute top-0 z-10 bg-black/40 backdrop-blur-sm"></div>
                    <div className="w-screen h-full absolute top-0 z-10 bg-gradient-to-r from-[10%] from-black/70 via-transparent to-transparent"></div>
                    <div className="w-full h-full z-20 bg-transparent flex flex-col justify-center">
                        <h2 className="text-2xl max-w-[25%]">
                            10% off on Selected Used Cars
                        </h2>
                        <p className="text-sm mt-3 max-w-[25%]">
                            Get an additional 10% discount on selected pre-owned
                            vehicles. Limited time offer!
                        </p>
                        <button className="p-3 mt-8 w-fit rounded-[8px] bg-defaultOrange hover:bg-defaultOrangeHover">
                            Hop right in
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-20">
                    <div className="flex gap-x-4 items-start">
                        <RiTruckLine size={45} />
                        <div className="flex flex-col gap-y-1">
                            <p className="font-semibold text-lg">
                                Nation wide delivery
                            </p>
                            <p className="text-sm text-[#454545]">
                                Shop the best distress items just for you.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-start">
                        <div className="rounded-full flex justify-center items-center w-[45px] h-[45px] border-[3px] border-black">
                            <FiRefreshCw size={25} />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="font-semibold text-lg">
                                Free return policy
                            </p>
                            <p className="text-sm text-[#454545]">
                                Shop the best distress items just for you.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-start">
                        <FaAward size={45} />
                        <div className="flex flex-col gap-y-1">
                            <p className="font-semibold text-lg">
                                1 year warranty
                            </p>
                            <p className="text-sm text-[#454545]">
                                Shop the best distress items just for you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-y-8 items-center">
                    <h2 className="text-2xl font-semibold w-full">
                        About us in numbers
                    </h2>
                    <div className="w-[90%] h-[180px] flex border-primaryBorder border rounded-[8px]">
                        <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-r border-r-primaryBorder">
                            <h4 className="text-2xl text-defaultOrange font-bold">
                                26000+
                            </h4>
                            <p className="text-sm">Sales</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-r border-r-primaryBorder">
                            <h4 className="text-2xl text-defaultOrange font-bold">
                                1500+
                            </h4>
                            <p className="text-sm">
                                Products are inspected monthly
                            </p>
                        </div>
                        <div className="flex-1 flex flex-col gap-y-2 justify-center items-center">
                            <h4 className="text-2xl text-defaultOrange font-bold">
                                70+
                            </h4>
                            <p className="text-sm">Centres pan Nigeria</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-xl font-bold">What our clients say</h2>

                    <div className="flex w-full gap-x-20 justify-between items-center mt-6">
                        <div className="flex flex-col p-5 rounded-lg flex-1 bg-[#F7F7F7]">
                            <div className="flex justify-between w-full items-start">
                                <div className="flex items-center gap-x-3">
                                    <img
                                        className="w-[50px] h-[50px] rounded-full object-fill"
                                        src={Car}
                                        alt="Profile img"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium">
                                            Rosemary Sunday
                                        </p>
                                        <div className="flex items-center">
                                            <GrLocation size={18} />
                                            <span className="text-xs text-[#585858]">
                                                Federal Capital Territory
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-x-1.5 items-center flex-nowrap">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <FaStar
                                            key={num}
                                            size={20}
                                            color="#e65800"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="font-medium mt-4">
                                This platform is God sent i must say
                            </p>
                            <p className="mt-2 text-sm text-[#585858]">
                                Been thinking of buying a car for a while but
                                for insufficient funds, I couldn’t. I saw online
                                on Instagram that I can get a car on car loan
                                through Cars45. I clicked on the link and was
                                redirected to fill out a form which I did.
                                Someone from the Cars45 team reached out to me
                                and the rest is history. They managed all
                                conversations with the seller so the process was
                                fast, easy and stress free for me.
                            </p>
                            <p className="mt-4 text-xs text-[#585858]">
                                22 Jun 2022
                            </p>
                        </div>
                        <div className="flex flex-col p-5 rounded-lg flex-1 bg-[#F7F7F7]">
                            <div className="flex justify-between w-full items-start">
                                <div className="flex items-center gap-x-3">
                                    <img
                                        className="w-[50px] h-[50px] rounded-full object-fill"
                                        src={Car}
                                        alt="Profile img"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium">
                                            Rosemary Sunday
                                        </p>
                                        <div className="flex items-center">
                                            <GrLocation size={18} />
                                            <span className="text-xs text-[#585858]">
                                                Federal Capital Territory
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-x-1.5 items-center flex-nowrap">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <FaStar
                                            key={num}
                                            size={20}
                                            color="#e65800"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="font-medium mt-4">
                                This platform is God sent i must say
                            </p>
                            <p className="mt-2 text-sm text-[#585858]">
                                Been thinking of buying a car for a while but
                                for insufficient funds, I couldn’t. I saw online
                                on Instagram that I can get a car on car loan
                                through Cars45. I clicked on the link and was
                                redirected to fill out a form which I did.
                                Someone from the Cars45 team reached out to me
                                and the rest is history. They managed all
                                conversations with the seller so the process was
                                fast, easy and stress free for me.
                            </p>
                            <p className="mt-4 text-xs text-[#585858]">
                                22 Jun 2022
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex justify-between">
                    <div className="rounded-[48px] flex flex-col items-center p-12 pb-0 basis-[55%] bg-[#F5F5F5]">
                        <h1 className="text-4xl font-bold">
                            Download the app for a better shopping experience
                        </h1>
                        <div className="flex w-full mt-8 justify-between items-center">
                            <button className="rounded-[100px] w-[40%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                                <FaGooglePlay color="white" size={32} />
                                <span className="text-xl font-semibold">
                                    Play Store
                                </span>
                            </button>
                            <button className="rounded-[100px] w-[40%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                                <FaApple color="white" size={32} />
                                <span className="text-xl font-semibold">
                                    App Store
                                </span>
                            </button>
                        </div>
                        <img className="mt-5" src={IOSapp} alt="IOS app" />
                    </div>

                    <div className="rounded-[48px] flex flex-col items-center p-12 basis-[40%] bg-[#040421] text-[#FFEFE6]">
                        <h1 className="w-full text-4xl font-bold">OR</h1>
                        <h1 className="w-full text-4xl font-bold mt-12">
                            Scan the qr code to download the app for free
                        </h1>
                        <img
                            className="mt-16 rounded-[21px]"
                            src={QRcode}
                            alt="Qr-code"
                        />
                    </div>
                </div>

                <div className="w-full relative flex justify-center mt-14">
                    <a
                        href="#home"
                        className="h-[10rem] w-screen absolute top-0 z-0 flex items-center justify-center text-lg text-white bg-[#09094D]"
                    >
                        Back to top
                    </a>
                </div>

                <div className="w-full pt-16 pb-8 mt-[10rem] relative flex justify-center">
                    <div className="w-screen h-full absolute top-0 z-0 bg-[#040421]"></div>
                    <div className="w-full z-20 bg-transparent">
                        <div className="w-full grid grid-cols-5 gap-x-12 text-[#FFEFE6]">
                            <div className="flex flex-col gap-y-3 footerTags">
                                <h5>Payment Gateways</h5>
                                <img
                                    className="w-[8rem]"
                                    src={PaymentCards}
                                    alt="payment methods"
                                />
                            </div>
                            <div className="flex flex-col gap-y-3 footerTags">
                                <h5>Get to know us</h5>
                                <div className="font-light text-sm">
                                    <p>Carreers</p>
                                    <p>Blog</p>
                                    <p>About us</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3 footerTags">
                                <h5>Make money with us </h5>
                                <div className="font-light text-sm">
                                    <p>Sell products on DistressSales</p>
                                    <p>Become an Affiliate</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3 footerTags">
                                <h5>Products</h5>
                                <div className="font-light text-sm">
                                    <p>Cars</p>
                                    <p>Houses</p>
                                    <p>Lands</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3 footerTags">
                                <h5>Let us help you</h5>
                                <div className="font-light text-sm">
                                    <p>Your account </p>
                                    <p>Your orders</p>
                                    <p>Shopping rates and policies</p>
                                    <p>Returns and replacements</p>
                                    <p>Help</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full z-20 bg-transparent mt-20 pb-5 flex justify-between items-end">
                            <img
                                className="w-[97px] h-[97px]"
                                src={shorterLogo}
                                alt="Logo"
                            />

                            <div className="flex flex-col gap-y-5 items-end w-[50%]">
                                <p className="font-semibold text-white">
                                    Subscribe to our Newsletter
                                </p>
                                <input
                                    className="outline-none w-[70%] bg-white border-none p-3 rounded"
                                    type="email"
                                    placeholder="Email"
                                />
                                <button className="rounded-lg px-16 py-4 text-white text-sm bg-defaultOrange hover:bg-defaultOrangeHover">
                                    Subscribe now
                                </button>
                            </div>
                        </div>

                        <div className="pt-5 flex justify-between items-center border-t border-t-white">
                            <div className="flex gap-x-3.5">
                                <FaXTwitter
                                    className="cursor-pointer"
                                    size={18}
                                    color="white"
                                />
                                <BiLogoFacebookSquare
                                    className="cursor-pointer"
                                    size={18}
                                    color="white"
                                />
                                <FaWhatsapp
                                    className="cursor-pointer"
                                    size={18}
                                    color="white"
                                />
                                <FaInstagram
                                    className="cursor-pointer"
                                    size={18}
                                    color="white"
                                />
                            </div>

                            <div className="flex gap-x-6 text-xs text-white">
                                <p>Conditions of use</p>
                                <p>Privacy Notice</p>
                                <p>Consumer Health</p>
                                <p>Data Privacy Disclosure</p>
                                <p> @2023-2024, distresssales.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Padding at the bottom of the page */}
            </div>
        </div>
    )
}
