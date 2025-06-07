import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import {
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";
import cardummy from "../assets/carshop.png";

import IOSapp from "../assets/IOS-app-display.png";
import QRcode from "../assets/qr-code.png";
import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const reviews = [
  {
    title: "This platform is God sent I must say",
    content:
      "Been thinking of buying a car for a while but for insufficient funds, I couldn't. I saw online on Instagram that I can get a car loan through Cars45. I clicked on the link and was redirected to fill out a form which I did. Someone from the Cars45 team reached out to me and the rest is history. They managed all conversations with the seller so the process was fast, easy and stress-free for me.",
    user: "Rosemary Sunday",
    location: "Director, Captain Territory",
    date: "22 Jun, 2022",
    rating: 4,
  },
  {
    title: "Smooth process and great deals!",
    content:
      "I was hesitant at first, but the process was seamless. The customer support was always available to assist me.",
    user: "John Doe",
    location: "Business Owner",
    date: "15 Aug, 2022",
    rating: 5,
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "50px",
  };

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className="px-3 sm:px-4 w-full">
        
        <Navbar/>

        
        <div id="home" className="w-full mt-12">
          <HomeCarousel />
        </div>
        {/* service */}
        <div className="px-4 sm:px-8 lg:px-[8%]">
          {/* Service Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-24 my-10 items-center">
            {/* Left Side */}
            <div className="flex items-start">
              <div className="w-[12px] bg-[#14199C] h-[42px] mr-2"></div>
              <div>
                <p className="font-semibold text-[24px] sm:text-[32px] text-[#292D32]">
                  Services
                </p>
                <p className="font-normal text-xs text-[#292D32] mt-1">
                  Find unbeatable deals on lands, houses, and cars with
                  Marathona, your trusted platform for distress sales. Explore,
                  compare, and secure your next property or vehicle
                  effortlessly.
                </p>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                <p className="font-semibold text-sm text-[#292D32] mb-2">
                  Quality Cars at Discount Prices
                </p>
                <p className="font-normal text-xs text-[#292D32]">
                  Explore a wide range of vehicles, from economy to luxury cars,
                  all available at significantly reduced prices.
                </p>
              </div>
              <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                <p className="font-semibold text-sm text-[#292D32] mb-2">
                  Affordable Housing Deals
                </p>
                <p className="font-normal text-xs text-[#292D32]">
                  Get the best prices on houses, from budget-friendly homes to
                  luxury estates, all at distress-sale prices.
                </p>
              </div>
              <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                <p className="font-semibold text-sm text-[#292D32] mb-2">
                  Verified Land Sales
                </p>
                <p className="font-normal text-xs text-[#292D32]">
                  Secure land investments with verified titles, ensuring peace
                  of mind and secure transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="w-[90%] h-auto sm:h-[180px] flex flex-col sm:flex-row border-primaryBorder border rounded-[8px] mx-auto mt-10">
            <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-b sm:border-b-0 sm:border-r border-primaryBorder py-5 sm:py-0">
              <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                26000+
              </h4>
              <p className="text-sm text-[#292D32]">Sales</p>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-b sm:border-b-0 sm:border-r border-primaryBorder py-5 sm:py-0">
              <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                1500+
              </h4>
              <p className="text-sm text-[#292D32] text-center">
                Products are inspected monthly
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 justify-center items-center py-5 sm:py-0">
              <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                70+
              </h4>
              <p className="text-sm text-[#292D32] text-center">
                Centres pan Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* feature cat */}
        <div className="mt-20 m-2 lg:m-10">
          <div className="flex justify-between items-center">
            <h1 className="text-[28px] font-semibold  text-[#040421]">
              Featured Categories
            </h1>

            <p className="flex justify-between items-center text-[#14199C] text-xs">View all <FiChevronRight className="text-base ml-4" /> </p>
          </div>
          <div className="m-2 lg:m-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <FeatureCard /> <FeatureCard /> <FeatureCard /> <FeatureCard />
            <FeatureCard /> <FeatureCard /> <FeatureCard /> <FeatureCard />
            <FeatureCard /> <FeatureCard /> <FeatureCard /> <FeatureCard />
          </div>
        </div>

        <div className="relative w-full  bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 discount-bg bg-cover bg-center opacity-20"></div>

          {/* Content Container */}
          <div className="relative z-2 max-w-6xl mx-auto px-6 py-12 p-28 grid md:grid-cols-2 gap-8 text-white my-6">
            {/* Left Content */}
            <div>
              <h3 className="text-sm font-medium text-[#FFFFFF]">
                How it works
              </h3>
              <ul className="mt-3 space-y-2 text-[#FFFFFF] font-medium text-sm">
                <li>
                  <span className="text-[#5FC4FD] font-medium text-sm">
                    • Browse Listings:
                  </span>{" "}
                  Visit our auction section and look for items marked with the
                  special <b>10% discount</b> badge.
                </li>
                <li>
                  <span className="text-[#5FC4FD] font-medium text-sm">
                    • Place Your Bids:
                  </span>{" "}
                  Participate in live auctions and place bids on your desired
                  items.
                </li>
                <li>
                  <span className="text-[#5FC4FD] font-medium text-sm">
                    • Win and Save:
                  </span>{" "}
                  If you win, the additional <b>10% discount</b> will apply
                  automatically.
                </li>
              </ul>

              <p className="my-8 font-bold text-xl">
                Hurry! This limited-time offer won’t last long. Visit our
                auction section now and start bidding!
              </p>

              <p className="mt-2 text-sm text-[#ffffff] font-normal">
                <span className="text-blue-300 text-sm font-bold">Note:</span>{" "}
                Terms and conditions apply. Discount applies only to selected
                auction items. Offer valid while supplies last.
              </p>
            </div>

            {/* Right Content */}
            <div className="">
              <h3 className="text-xl font-bold">
                Exclusive Auction Event: 10% Off on Selected Auction Listings
              </h3>
              <p className="mt-2 mb-7 text-[#ffffff] text-sm">
                Get an additional <b>10% discount</b> on selected auction items.
                Limited time offer!
              </p>

              <h4 className="mt-4 text-sm  font-medium">What's included:</h4>
              <ul className="mt-2 mb-7 space-y-2 text-[#ffffff] font-normal">
                <li>
                  <span className="text-[#5FC4FD] font-medium text-sm">
                    • Luxury Cars:
                  </span>{" "}
                  High-end models with significant savings.
                </li>
                <li>
                  <span className="text-[#5FC4FD] font-medium text-sm">
                    • Real Estate:
                  </span>{" "}
                  Prime houses and land parcels ready for bidding.
                </li>
              </ul>

              {/* CTA Button */}
              <button className="mt-6 bg-[#E65800] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                Auction
              </button>
            </div>
          </div>
        </div>
        {/* review */}
       <div className="m-2 lg:m-12">
        <div className="m-2 lg:m-10 mb-1 mt-14 flex justify-end items-center">
            <p className="flex justify-between items-center text-[#14199C] text-xs">View all <FiChevronRight className="text-base ml-4" /> </p>
          </div>

          <div className="m-2 lg:m-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <FeatureCard /> <FeatureCard /> <FeatureCard /> <FeatureCard />
            <FeatureCard /> <FeatureCard /> <FeatureCard /> <FeatureCard />
            <FeatureCard /> <FeatureCard /> <FeatureCard /> <FeatureCard />
          </div>
       </div>
        <div className="mt-20 flex flex-col md:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 pb-0 w-full md:w-[55%] bg-[#F5F5F5] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Download the app for a better shopping experience
            </h1>

            {/* App Store & Play Store Buttons */}
            <div className="flex flex-col sm:flex-row w-full mt-8 gap-4">
              <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                <FaGooglePlay className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-lg sm:text-xl font-semibold">
                  Play Store
                </span>
              </button>
              <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                <FaApple className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-lg sm:text-xl font-semibold">
                  App Store
                </span>
              </button>
            </div>

            {/* App Image */}
            <img
              className="mt-5 w-[80%] sm:w-[60%] md:w-[50%]"
              src={IOSapp}
              alt="IOS app"
            />
          </div>

          {/* Right Section */}
          <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 w-full md:w-[40%] bg-[#040421] text-[#FFEFE6] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">OR</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-12 leading-tight">
              Scan the QR code to download the app for free
            </h1>

            {/* QR Code Image */}
            <img
              className="mt-10 sm:mt-16 w-[50%] sm:w-[40%] md:w-[60%] rounded-[21px]"
              src={QRcode}
              alt="QR-code"
            />
          </div>
        </div>
        {/* Footer  */}
        <Footer/>

        {/* Padding at the bottom of the page */}
      </div>
    </div>
  );
}

const FeatureCard = () => {
  return (
    <div>
      <div className="bg-[#ffffff] flex flex-col rounded-md p-4 mb-4 relative">
        {/* Heart Icon (Fixed Position) */}
        <div className="absolute md:top-7 xs:top-2 left-5 bg-[#BDBDBD] rounded-full h-7 w-7 flex items-center justify-center">
          <CiHeart className="w-4 h-4 text-white" />
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={cardummy}
            alt="dummycars"
            className="w-[90%] h-auto object-contain"
          />
        </div>
      </div>

      <div>
        <p className="font-bold text-[15px] text-[#14199C] mb-[10px]">
          ₦ 1,750,000
        </p>
        <p className="font-normal text-[15px] text-[#040421] mb-[10px]">
          Toyota Tacoma Access Cab 2006 Blue
        </p>
        <p className="flex items-center gap-x-1 font-normal text-sm text-[#454545] mb-[15px]">
          <CiLocationOn size={14} color="#E65800" />
          Ikoyi, Lagos
        </p>
        <div className="flex gap-x-2">
          <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
            Automatic
          </p>
          <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
            Automatic
          </p>
        </div>
      </div>
    </div>
  );
};
