import { useState } from "react";

import { FaChevronRight, FaInstagram, FaTwitter  } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ReturnForm() {

    const [currentTab, setCurrentTab] = useState(1);

    const handleNextTab = () =>{
        currentTab < 2 ? setCurrentTab(currentTab + 1) : null
    }

    const handlePrevTab = () =>{
        currentTab > 1 ? setCurrentTab(currentTab - 1) : null
    }

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7] p-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-xs">
            <Link
            to={`/`}
            className=""
            >
            Home
            </Link>
            <FaChevronRight size={14} />
            <Link
            to={`/return-policy`}
            className=""
            >
            Returns and Refunds
            </Link>
            <FaChevronRight size={14} />
            <span className="text-xs text-[#787878] ">Return Form</span>
        </div>

        {/* Page Content  */}
        <div className="flex flex-col mt-10 items-center gap-y-10">
                <div className="uppercase text-3xl font-bold">Refund Form</div>
            <div className="w-full lg:w-5/6">
                {currentTab === 1?

                // Tab One 
                <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                    <div className="text-xs flex flex-col gap-y-8">
                        <div>
                            <div className="mb-1">First Name:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="First name"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Email:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Email"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Phone Number:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Phone"/>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs flex flex-col gap-y-8">
                        <div>
                            <div className="mb-1">Last Name:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="First name"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Order Number:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Order Number"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Date of Purchase:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Type"/>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs flex flex-col gap-y-8">
                        <div>
                            <div className="mb-1">Reasons for Return:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Reasons for Return"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Additional Information:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <textarea className="bg-none outline-none text-[#A3A3B3]" rows={10} placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                // Tab One End 
                :
                // Tab Two 
                <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                    <div className="text-xs flex flex-col gap-y-8">
                        <div>
                            <div className="mb-1">Product Name:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Product Name"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Quantity:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Quantity"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Product SKU/ID:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Order Number"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Condition:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <select className="bg-none outline-none text-[#A3A3B3] w-full">
                                    <option>Unused</option>
                                    <option>Used</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="City"/>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs flex flex-col gap-y-8 justify-between">
                        <div>
                            <div className="mb-1">Packaging:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Packaging"/>
                            </div>
                            <div className="flex items-center gap-x-2 mt-8">
                                <input className="" type="radio"/><span>Original packaging included</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Refund Method:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Refund to original payment method"/>
                            </div>
                            <div className="mt-8">
                                <p className="mb-4">Return Shipping:</p>
                                <div className="flex items-center gap-x-2">
                                    <input className="" type="radio" name="shipping"/><span>I will ship the item(s) back</span>
                                </div>
                                <div className="flex items-center gap-x-2 mt-2">
                                    <input className="" type="radio" name="shipping"/><span>Arrange for pickup</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="State"/>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs flex flex-col gap-y-8 justify-between">
                        <div>
                            <div className="mb-1">Contact Preferences:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Contact Preferences"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Best Time to Contact:</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Best Time to Contact"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">Shipping Instructions (if applicable):</div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Contact Preferences"/>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Zip Code"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                // Tab Two End 
                
                }

                <div className="flex flex-col gap-y-4 md:flex-row justify-between mt-24">
                    <div>
                        <div onClick={() => handlePrevTab()} 
                        className={`${currentTab === 1?
                            "border border-black text-black"
                            :"border border-[#14199C] text-[#14199C] "} cursor-pointer text-center text-sm px-14 py-2 rounded`}>
                                Back
                        </div>
                    </div>

                    <div>
                        {currentTab === 1?
                        <div onClick={() => handleNextTab()} className=" cursor-pointer border border-[#14199C] text-[#14199C] text-center text-sm px-14 py-2 rounded">
                            Next
                        </div>:
                        <div className="border border-[#14199C] text-[#14199C] cursor-pointer text-center text-sm px-14 py-2 rounded">
                            Submit
                        </div>}
                    </div>
                </div>

                <div className="flex justify-center items-center gap-x-2 mt-4 mb-10">
                    <div onClick={() => setCurrentTab(1)} className={`${currentTab === 1? "bg-[#14199C]": null} border border-[#14199C] p-1 rounded-2xl`}></div>
                    <div onClick={() => setCurrentTab(2)} className={`${currentTab === 2? "bg-[#14199C]": null} border border-[#14199C] p-1 rounded-2xl`}></div>
                </div>
            </div>
        </div>
    </div>
  );
}
