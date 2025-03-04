import { Button } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function PromoSummary() {
  return (
    <div className="h-screen overflow-auto">
      {/* Search Bar Section */}
      <div className="w-full py-3.5 px-6 md:px-16 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Content Section */}
      <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-20 pt-12">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap gap-x-2 md:gap-x-4 items-center mb-6 md:mb-12">
          <Link
            to="/seller/promotions"
            className="text-sm md:text-base text-[#262626]"
          >
            Promotions & Ads
          </Link>
          <FaChevronRight size={16} className="hidden md:block" />
          <Link
            to="/seller/promotions/create-promotion"
            className="text-sm md:text-base text-[#262626]"
          >
            Create Promotion
          </Link>
          <FaChevronRight size={16} className="hidden md:block" />
          <span className="text-sm font-normal text-[#040421]">Summary</span>
        </div>

        {/* Title */}
        <p className="text-xl md:text-2xl font-semibold mb-6 md:mb-10">
          Summary
        </p>

        {/* Summary Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[48%]">
            <p className="text-sm md:text-base font-normal">Promotion Name:</p>
            <p className="text-sm md:text-base font-bold mt-2 mb-4">
              Your Headline here
            </p>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <p className="text-sm md:text-base font-normal">
                  Promotion Type:
                </p>
                <p className="text-sm md:text-base font-bold mt-2 mb-4">
                  Cashback
                </p>

                <p className="text-sm md:text-base font-normal">Start Date:</p>
                <p className="text-sm md:text-base font-bold mt-2 mb-4">
                  Jan 27 2025
                </p>

                <p className="text-sm md:text-base font-normal">Promo Code:</p>
                <p className="text-sm md:text-base font-bold mt-2 mb-4">
                  #GHTYS0
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base font-normal">
                  Product Type:
                </p>
                <p className="text-sm md:text-base font-bold mt-2 mb-4">
                  Type Here
                </p>

                <p className="text-sm md:text-base font-normal">End Date:</p>
                <p className="text-sm md:text-base font-bold mt-2 mb-4">
                  Feb 27 2025
                </p>

                <p className="text-sm md:text-base font-normal">Usage Limit:</p>
                <p className="text-sm md:text-base font-bold mt-2 mb-4">5</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[48%]">
            <p className="text-sm md:text-base font-normal mb-4">
              Promotion Description
            </p>
            <p className="text-sm md:text-base font-bold mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <p className="text-sm md:text-base font-normal">
              Maximum Redeemer per User:
            </p>
            <p className="text-sm md:text-base font-bold mt-2 mb-4">2</p>

            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <div>
                <p className="text-sm md:text-base font-normal">
                  Product Category:
                </p>
                <p className="text-sm md:text-base font-bold mt-2">
                  Category here
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base font-normal">
                  Discount Value:
                </p>
                <p className="text-sm md:text-base font-bold mt-2">100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">
          <Link to="/seller/promotions/create-promotion">
            <Button
              variant="contained"
              sx={{
                background: "#F2F2F2",
                color: "#14199C",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "120px",
              }}
            >
              Cancel
            </Button>
          </Link>
          <Link to="/seller/promotions/promo&ads-payment">
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "#14199C",
                color: "#FFFFFF",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "120px",
              }}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PromoSummary;
