import { Button } from "@mui/material";
import { FaAward, FaCircleArrowUp } from "react-icons/fa6";
import { LuRefreshCw } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useNavigate } from "react-router-dom";
import cardash from "../assets/cardash.png";

export default function HomeCarousel() {
  const navigate = useNavigate();

  const handleGotoSellerDashboard = () => {
    navigate("/login");
  };
  return (
    <div className="bg-[#F7F7F7] relative w-full flex flex-col md:flex-row items-center px-4 sm:px-[8%] ">
      {/* Left Side */}
      <div className="text-center md:text-left md:flex-1">
        <div className="mb-10 md:mb-14">
          <p className="font-normal/[0px] text-[32px] sm:text-[48px] md:text-[64px] text-[#292D32] leading-tight">
            Transform your dreams into reality
          </p>
          <p className="font-normal text-[16px] sm:text-[18px] text-[#292D32] mt-2">
            Discover your perfect home and embark on a journey of comfort and
            style.
          </p>
        </div>

        <div className="mb-12 md:mb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <Button
            variant="contained"
            sx={{
              background: "#E65800",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 700,
              height: "43px",
              borderRadius: "10px",
            }}
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#14199C",
              color: "#14199C",
              fontSize: "16px",
              fontWeight: 700,
              height: "43px",
              borderRadius: "10px",
            }}
            onClick={handleGotoSellerDashboard}
          >
            Become a seller
          </Button>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
          <p className="font-medium text-base text-[#535353] flex gap-2 items-center">
            <TbTruckDelivery size={20} color="#535353" /> Nation wide delivery
          </p>
          <p className="font-medium text-base text-[#535353] flex gap-2 items-center">
            <LuRefreshCw size={20} color="#535353" /> Free return policy
          </p>
          <p className="font-medium text-base text-[#535353] flex gap-2 items-center">
            <FaAward size={20} color="#535353" /> 1 year Warranty
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex justify-center mt-10 md:mt-0 md:flex-1">
        <div className="w-[250px] sm:w-[350px] md:w-[400px] h-full bg-blue-900 absolute top-0 right-0 z-0 rounded-lg"></div>

        <img
          src={cardash}
          alt="car"
          className="relative z-10 w-[90%] max-w-[860px] h-auto md:h-[600px] object-contain"
        />
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 right-5 bg-blue-900 p-3 rounded-full text-white shadow-md cursor-pointer">
        <FaCircleArrowUp />
      </div>
    </div>
  );
}
