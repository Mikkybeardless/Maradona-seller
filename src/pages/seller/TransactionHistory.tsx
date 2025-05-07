import { useNavigate } from "react-router-dom";
import { MdOutlineHistory } from "react-icons/md";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import deposit2 from "../../assets/deposit2.svg";
import withdraw2 from "../../assets/withdraw2.svg";

import { useState } from "react";

function SellerTransactionHistory() {
  const navigate = useNavigate();

//   const handleNext = () => {
//     navigate("/seller/settings/verification");
//   };

  return (
    <div className="bg-[#F7F7F7] h-screen flex flex-col work-sans overflow-y-auto custom-scrollbar">
      {/* Responsive Top Bar */}
        <div className="w-full py-3.5 px-6 md:px-24 border-b border-b-primaryBorder">
            <DashboardSearchBar />
        </div>
      <div className="mt-4 p-4 md:p-10">
        <div className="text-2xl font-bold">
            <span>Transaction History</span>
        </div>

        <div className="mt-8">
            {[1,2,3].map(() =>
            <div className="flex items-center justify-between p-2 text-[10px] md:text-xs mb-4 bg-[#ffffff] p-4 rounded-md">
                <div className="flex items-center gap-x-2">
                    <div>
                        <img className="w-8" src={deposit2} alt="Deposit"/>
                    </div>
                    <div>
                        <p>Deposit</p>
                        <p>Amount: 2,900,000</p>
                    </div>
                </div>
                <div className="text-[#00000099]">
                    04 April 2025
                </div>
            </div>)}
        </div>
      </div>
    </div>
  );
}

export default SellerTransactionHistory;
