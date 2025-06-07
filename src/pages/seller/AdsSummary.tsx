import { Button } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function AdsSummary() {
  return (
    <div className="h-screen overflow-auto">
      {/* Header */}
      <div className="w-full py-3.5 px-6 md:px-12 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Content Container */}
      <div className="w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mb-20 pt-12">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 sm:mb-12">
          <Link
            to="/seller/promotions"
            className="text-sm sm:text-base font-normal text-[#262626]"
          >
            Promotions & Ads
          </Link>
          <FaChevronRight size={16} />
          <Link
            to="/seller/promotions/create-ads"
            className="text-sm sm:text-base font-normal text-[#262626]"
          >
            Create Ads
          </Link>
          <FaChevronRight size={16} />
          <span className="text-sm sm:text-base font-normal text-[#040421]">
            Summary
          </span>
        </div>

        {/* Title */}
        <p className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">
          Summary
        </p>

        {/* Summary Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm sm:text-base font-normal">Ad Headline:</p>
              <p className="text-sm sm:text-base font-bold mt-2">
                Your Headline here
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm sm:text-base font-normal">Start Date:</p>
                <p className="text-sm sm:text-base font-bold mt-2">
                  Jan 27 2025
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-normal">End Date:</p>
                <p className="text-sm sm:text-base font-bold mt-2">
                  Feb 27 2025
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm sm:text-base font-normal">Budget:</p>
              <p className="text-sm sm:text-base font-bold mt-2">N 200,000</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm sm:text-base font-normal">
                Maximum redeemer per user:
              </p>
              <p className="text-sm sm:text-base font-bold mt-2">2</p>
            </div>

            <div>
              <p className="text-sm sm:text-base font-normal">Targeted URL:</p>
              <p className="text-sm sm:text-base font-bold mt-2 break-words">
                https://www.msn.com/en-xl/sports?ocid=msedgntphdr&cvid=043bb4d7922
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base font-normal">
                Maximum Redemptions:
              </p>
              <p className="text-sm sm:text-base font-bold mt-2">100</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end mt-10 gap-4">
          <Link to="/seller/promotions/create-ads">
            <Button
              variant="contained"
              sx={{
                background: "#F2F2F2",
                color: "#14199C",
                borderRadius: "12px",
              }}
              type="button"
            >
              Cancel
            </Button>
          </Link>
          <Link to={"/seller/promotions/promo&ads-payment"}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                background: "#14199C",
                color: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdsSummary;
