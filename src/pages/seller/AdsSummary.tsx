import { Button } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function AdsSummary() {
  return (
    <div className="h-screen overflow-auto">
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>
      <div className="w-[80%] mx-auto mb-20 pt-12">
        <div className="flex gap-x-4 items-center mb-12">
          <Link
            to="/seller/promotions"
            className="text-[15px] font-normal font-sans text-[#262626]"
          >
            Promotions & Ads
          </Link>
          <FaChevronRight size={20} />
          <Link
            to="/seller/promotions/create-promotion"
            className="text-[15px] font-normal font-sans text-[#262626]"
          >
            Create Ads
          </Link>
          <FaChevronRight size={20} />

          <span className="text-sm font-normal font-sans text-[#040421]">
            Summary
          </span>
        </div>
        <p className="text-[32px] font-semibold font-sans mb-[40px]">Summary</p>
        <div className="flex justify-between">
          <div className="w-[30%]">
            <p className="text-base font-sans font-normal">Ad Headline:</p>
            <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
              Your Headline here
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-base font-sans font-normal">Start Date:</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  Jan 27 2025
                </p>
                <p className="text-base font-sans font-normal">Budget</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  N 200,000
                </p>
              </div>
              <div>
                <p className="text-base font-sans font-normal">End Date:</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  Feb 27 2025
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <p className="text-base font-sans font-normal mb-[30px]">
              Maximum redeemer per user:
            </p>
            <p className="text-base font-sans font-bold  mb-[17px]">2</p>
            <p className="text-base font-sans font-normal">Targeted URL</p>
            <p className="text-base font-sans font-bold mt-[20px] mb-[17px]">
              https://www.msn.com/en-xl/sports?ocid=msedgntphdr&cvid=043bb4d7922
            </p>

            <p className="text-base font-sans font-normal">
              Maximum Redemptions
            </p>
            <p className="text-base font-sans font-bold mt-[20px]">100</p>
          </div>
        </div>
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Link to="/seller/promotions/create-ads">
            <Button
              variant="contained"
              sx={{
                background: "#F2F2F2",
                color: "#14199C",
                borderRadius: "12px",
                marginRight: "10px",
              }}
              type="submit"
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
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdsSummary;
