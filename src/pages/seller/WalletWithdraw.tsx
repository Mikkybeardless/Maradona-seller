import { useNavigate } from "react-router-dom";
import { MdOutlineHistory } from "react-icons/md";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import debitcards from "../../assets/debitcards.svg";
import paystack from "../../assets/paystack.svg";
import flutterwave from "../../assets/flutterwave.svg";

import { useState } from "react";

function Withdraw() {
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
            <span>Withdraw</span>
        </div>

        {/* Amount  */}
        <div className="mt-8 bg-white rounded-lg lg:w-1/2 p-10">
            <p className="text-xs">Amount</p>
            <div className="text-xs border border-[#DED9DD] p-2 mt-2 rounded-lg">
                <input className="bg-none outline-none w-full p-1" type="text" placeholder="Amount"/>
            </div>
        </div>

        {/* Select Bank  */}
        <div className="mt-10 text-xl font-bold">
            <span>Select Bank</span>
        </div>

        {/* Banks  */}
        <div className="lg:w-1/2 flex flex-col gap-y-10 mt-8 mb-20">
            <div className="bg-white p-4 border border-[#D1D1D1] rounded-lg flex justify-between">
                <div className="flex gap-x-4 w-2/3">
                    <div>
                        <input type="radio" className="scale-125"/>
                    </div>
                    <div>
                        <p className="text-xs font-bold">Access Bank</p>
                        <p className="text-[#6D6D6D] font-inter text-xs font-light">****87656781</p>
                        <p className="text-[#6D6D6D] font-inter text-xs font-bold">James E. Ben</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 border border-[#D1D1D1] rounded-lg flex justify-between">
                <div className="flex gap-x-4 w-2/3">
                    <div>
                        <input type="radio" className="scale-125"/>
                    </div>
                    <div>
                        <p className="text-xs font-bold">Zenith Bank</p>
                        <p className="text-[#6D6D6D] font-inter text-xs font-light">****87656781</p>
                        <p className="text-[#6D6D6D] font-inter text-xs font-bold">James E. Ben</p>
                    </div>
                </div>
            </div>
        

            <div className="bg-white p-4 border border-[#D1D1D1] rounded-lg flex justify-between">
                <div className="flex gap-x-4 w-2/3">
                    <div>
                        <input type="radio" className="scale-125"/>
                    </div>
                    <div>
                        <p className="text-xs font-bold">OPAY</p>
                        <p className="text-[#6D6D6D] font-inter text-xs font-light">****87656781</p>
                        <p className="text-[#6D6D6D] font-inter text-xs font-bold">James E. Ben</p>
                    </div>
                </div>
            </div>

            <div className="">
                <button className="w-full rounded-lg flex justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-white text-sm bg-defaultOrange" >
                    Proceed
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
