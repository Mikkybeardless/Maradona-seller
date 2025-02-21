import { Button } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function PromoSummary() {
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
            Create Promotion
          </Link>
          <FaChevronRight size={20} />

          <span className="text-sm font-normal font-sans text-[#040421]">
            Summary
          </span>
        </div>
        <p className="text-[32px] font-semibold font-sans mb-[40px]">Summary</p>
        <div className="flex justify-between">
          <div className="w-[25%]">
            <p className="text-base font-sans font-normal">Promotion Name:</p>
            <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
              Your Headline here
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-base font-sans font-normal">
                  Promotion Type:
                </p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  Cashback
                </p>
                <p className="text-base font-sans font-normal">Start Date:</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  Jan 27 2025
                </p>
                <p className="text-base font-sans font-normal">Promocode</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  #GHTYS0
                </p>
              </div>
              <div>
                <p className="text-base font-sans font-normal">Product Type:</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  Type Here
                </p>
                <p className="text-base font-sans font-normal">End Date:</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  Feb 27 2025
                </p>
                <p className="text-base font-sans font-normal">Usage Limit</p>
                <p className="text-base font-sans font-bold mt-[20px] mb-[30px]">
                  5
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <p className="text-base font-sans font-normal mb-[30px]">
              Promotion Descripttion
            </p>
            <p className="text-base font-sans font-bold  mb-[17px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="text-base font-sans font-normal">
              Maximum redeemer per user:
            </p>
            <p className="text-base font-sans font-bold mt-[30px] mb-[17px]">
              2
            </p>
            <div className="flex justify-between w-[70%]">
              <div>
                <p className="text-base font-sans font-normal">
                  Product Category
                </p>
                <p className="text-base font-sans font-bold mt-[20px]">
                  Category here
                </p>
              </div>
              <div>
                <p className="text-base font-sans font-normal">
                  Discount Value
                </p>
                <p className="text-base font-sans font-bold mt-[20px]">100</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Link to="/seller/promotions/create-promotion">
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

export default PromoSummary;
