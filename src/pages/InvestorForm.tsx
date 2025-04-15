import { Box, Chip, FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useState } from "react";

import { FaChevronRight, FaInstagram, FaTwitter  } from "react-icons/fa6";
import { Link } from "react-router-dom";


import {useDropzone} from 'react-dropzone';
import { FiUploadCloud } from "react-icons/fi";

export default function InvestorForm() {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [currentTab, setCurrentTab] = useState(1);
  
      const handleNextTab = () =>{
          currentTab < 4 ? setCurrentTab(currentTab + 1) : null
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
                <span className="text-xs text-[#787878] ">Become an Investor</span>
            </div>
    
            {/* Page Content  */}
            <div className="flex flex-col mt-10 items-center gap-y-10">
                    <div className="uppercase text-3xl font-bold">INVESTOR FORM</div>
                    <p className="text-sm text-center lg:w-1/2">
                    <span className="font-bold">Purpose: </span> To raise capital for an e-commerce platform that facilitates the sale of distressed inventory, overstock, surplus stock, and liquidation sales.
                    </p>
                <div className="w-full lg:w-5/6">
                    {currentTab === 1?
    
                    // Tab One 
                    <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                        <div className="text-xs flex flex-col gap-y-8">
                            <div>
                                <div className="mb-1">Full Name:</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Full name"/>
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
                            <div>
                                <div className="mb-1">Date of Birth (DOB)</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="date" placeholder="DOB"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Nationality</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Nationality"/>
                                </div>
                            </div>
                        </div>
    
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                            <div>
                                <div className="mb-1">Address</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Address"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">State:</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="State"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">City:</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="City"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Investment Amount (USD):</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Amount"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Preferred Investment Structure:</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Equity"/>
                                </div>
                            </div>
                        </div>
    
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                            <div>
                                <div className="mb-1">Expected Holding Period (years):</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <input className="bg-none outline-none text-[#A3A3B3] w-full" type="text" placeholder="Business name"/>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Why are you interested in investing in this e-commerce platform?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={10} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Type of Business:</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <select className="bg-none outline-none text-[#A3A3B3] w-full">
                                        <option>Individual</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    // Tab One End 
                    : currentTab === 2?
    
                    // Tab Two 
                    <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 justify-between md:gap-x-5 lg:gap-x-10">
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                            <div>
                                <div className="mb-1">What are your expectations regarding returns on investment (ROI)?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">How does this investment align with your overall investment strategy and risk tolerance?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Describe the target market for distress sales and inventory liquidation:</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                        </div>
    
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                          <div>
                              <div className="mb-1">What are the core features and value propositions of the platform?</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                          <div>
                              <div className="mb-1">How does this platform differentiate itself from other e-commerce platforms focused on distress sales?</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                          <div>
                              <div className="mb-1">What are the primary revenue streams for the platform (e.g., commissions on sales, subscription fees, advertising)?</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                        </div>
                    </div>
                    
                    // Tab Two End 
                    :currentTab === 3?
    
                    // Tab Three 
                    <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 justify-between md:gap-x-5 lg:gap-x-10">
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                            <div>
                                <div className="mb-1">How do you plan to attract sellers to the platform?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">What are the expected costs associated with running this platform (e.g. operational costs, marketing, technology infrastructure)?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">How do you plan to scale the platform to achieve your target market size?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                        </div>
    
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                          <div>
                              <div className="mb-1">How do you plan to expand your customer base and increase market penetration?</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                          <div>
                              <div className="mb-1">What are the potential risks associated with the e-commerce platform and how do you plan to manage them?</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                          <div>
                              <div className="mb-1">How do you plan to address operational challenges (e.g., handling returns, inventory management, customer service issues)?</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                        </div>
                    </div>
                    
                    // Tab Three End 
                    :
    
                    // Tab Four
                    <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 justify-between md:gap-x-5 lg:gap-x-10">
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                            <div>
                                <div className="mb-1">What is your preferred exit strategy (e.g., acquisition by a larger company, IPO, secondary market sales)?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">How do you envision the future of the platform after the investment period (e.g., industry consolidation, competitive advantages, sustainability)?</div>
                                <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                    <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="mb-1">Do you agree to maintain the confidentiality of sensitive information shared during this investment process?</div>
                                <div className="flex items-center gap-x-4">
                                    <div className="flex items-center gap-x-2 mt-4">
                                        <input className="" type="radio" name="confidentiality"/><span>Yes</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-x-2 mt-4">
                                        <input className="" type="radio" name="confidentiality"/><span>No</span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="text-xs flex flex-col gap-y-8 justify-between">
                          <div>
                              <div className="mb-1">Please feel free to add any other information that you believe is relevant to this investment opportunity:</div>
                              <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                                  <textarea className="bg-none outline-none text-[#A3A3B3]" rows={8} placeholder=""></textarea>
                              </div>
                          </div>
                        </div>
                    </div>
            
                    // Tab Four End 
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
                          {currentTab < 4?
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
                      <div onClick={() => setCurrentTab(3)} className={`${currentTab === 3? "bg-[#14199C]": null} border border-[#14199C] p-1 rounded-2xl`}></div>
                      <div onClick={() => setCurrentTab(4)} className={`${currentTab === 4? "bg-[#14199C]": null} border border-[#14199C] p-1 rounded-2xl`}></div>
                    </div>
                </div>
            </div>
        </div>
  );
}
