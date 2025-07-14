import { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { FaChevronRight, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AgentForm() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleNextTab = () => {
    currentTab < 2 ? setCurrentTab(currentTab + 1) : null;
  };

  const handlePrevTab = () => {
    currentTab > 1 ? setCurrentTab(currentTab - 1) : null;
  };

  const products = ["Cars", "Land", "Houses", "Electronics", "Food"];

  const [productName, setProductName] = useState<string[]>([]);

  const handleProductTypeChange = (
    event: SelectChangeEvent<typeof productName>
  ) => {
    const {
      target: { value },
    } = event;
    setProductName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7] p-8">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-xs">
        <Link to={`/`} className="">
          Home
        </Link>
        <FaChevronRight size={14} />
        <span className="text-xs text-[#787878] ">Agent Registration Form</span>
      </div>

      {/* Page Content  */}
      <div className="flex flex-col mt-10 items-center gap-y-10">
        <div className="uppercase text-3xl font-bold">AGENT FORM</div>
        <p className="text-sm text-center lg:w-1/2">
          Thank you for your interest in becoming an agent on our e-commerce
          platform! Please fill out the form below to register
        </p>
        <div className="w-full lg:w-5/6">
          {
            currentTab === 1 ? (
              // Tab One
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <div className="mb-1">Full Name:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Full name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Email:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Phone Number:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Date of Birth (DOB)</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="date"
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Gender</div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="gender" />
                        <span>Male</span>
                      </div>

                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="gender" />
                        <span>Female</span>
                      </div>

                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="gender" />
                        <span>Other</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Residentisl Address</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">State:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">City:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Business name:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Business name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      Business Registration No (if applicable):
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Reg No."
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Years of Experience</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="number"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <div className="mb-1">Business Address</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">State:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">City:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="City"
                      />
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
                  <div>
                    <div className="mb-1">
                      Products/Services You Plan to Sell:
                    </div>
                    <div>
                      <FormControl className="w-full" size="small">
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={productName}
                          onChange={handleProductTypeChange}
                          inputProps={{ "aria-label": "Without label" }}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                            >
                              {selected.map((value) => (
                                <div className="border border-[#DED9DD] pl-2 rounded pr-8 py-2 text-xs">
                                  {value}
                                </div>
                              ))}
                            </Box>
                          )}
                        >
                          {products.map((product) => (
                            <MenuItem
                              key={product}
                              value={product}
                              // style={getStyles(product, personName, theme)}
                            >
                              {product}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Tab One End
              // Tab Two
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <div className="mb-1">Bank Name:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Bank Name:"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Account Name:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Account Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Bank Account Number:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Bank Account Number"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Preferred Contact Method::</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Preferred Contact Method:"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Would you love to be trained?</div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="training" />
                        <span>Yes</span>
                      </div>

                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="training" />
                        <span>No</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">If YES</div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="training-type" />
                        <span>Physically</span>
                      </div>

                      <div className="flex items-center gap-x-2 mt-4">
                        <input className="" type="radio" name="training-type" />
                        <span>Virtually</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )

            // Tab Two End
          }

          <div className="flex flex-col gap-y-4 md:flex-row justify-between mt-24">
            <div>
              <div
                onClick={() => handlePrevTab()}
                className={`${
                  currentTab === 1
                    ? "border border-black text-black"
                    : "border border-[#14199C] text-[#14199C] "
                } cursor-pointer text-center text-sm px-14 py-2 rounded`}
              >
                Back
              </div>
            </div>

            <div>
              {currentTab === 1 ? (
                <div
                  onClick={() => handleNextTab()}
                  className=" cursor-pointer border border-[#14199C] text-[#14199C] text-center text-sm px-14 py-2 rounded"
                >
                  Next
                </div>
              ) : (
                <div className="border border-[#14199C] text-[#14199C] cursor-pointer text-center text-sm px-14 py-2 rounded">
                  Submit
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2 mt-4 mb-10">
            <div
              onClick={() => setCurrentTab(1)}
              className={`${
                currentTab === 1 ? "bg-[#14199C]" : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
            <div
              onClick={() => setCurrentTab(2)}
              className={`${
                currentTab === 2 ? "bg-[#14199C]" : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
