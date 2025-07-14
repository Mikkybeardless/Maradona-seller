import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

import { FaChevronRight, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

export default function SellerForm() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [currentTab, setCurrentTab] = useState(1);

  const handleNextTab = () => {
    currentTab < 3 ? setCurrentTab(currentTab + 1) : null;
  };

  const handlePrevTab = () => {
    currentTab > 1 ? setCurrentTab(currentTab - 1) : null;
  };

  const products = ["Cars", "Land", "Houses", "Electronics", "Food"];

  const locations = [
    "Abuja",
    "Adamawa",
    "Lagos",
    "Kano",
    "Kaduna",
    "Oyo",
    "Ogun",
  ];

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [productName, setProductName] = useState<string[]>([]);

  const [locationName, setLocationName] = useState<string[]>([]);

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

  const handleLocationChange = (
    event: SelectChangeEvent<typeof locationName>
  ) => {
    const {
      target: { value },
    } = event;
    setLocationName(
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
        <span className="text-xs text-[#787878] ">Become a Vendor</span>
      </div>

      {/* Page Content  */}
      <div className="flex flex-col mt-10 items-center gap-y-10">
        <div className="uppercase text-3xl font-bold">SELLER FORM</div>
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
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
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
                    <div className="mb-1">Website (if applicable):</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8">
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
                    <div className="mb-1">NIN:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="NIN"
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
                </div>
              </div>
            ) : // Tab One End
            currentTab === 2 ? (
              // Tab Two
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Type of Products:</div>
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
                  <div>
                    <div className="mb-1">Products Description:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={5}
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Years of Experience</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Order Number"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Shipping Locations</div>
                    <div>
                      <FormControl className="w-full" size="small">
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={locationName}
                          onChange={handleLocationChange}
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
                          {locations.map((location) => (
                            <MenuItem
                              key={location}
                              value={location}
                              // style={getStyles(product, personName, theme)}
                            >
                              {location}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Sales Channel:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Online market place"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Pricing Strategy:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Competitive Pricing"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Promotional Activities:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Discount"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Shipping Method:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Third Party Logistics"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Marketing Strategy:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Social media"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Preferred Contact Method:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Return Policy:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      Terms of Sale (e.g., payment, shipping terms)
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Best Time to Contact:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Time"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Tab Two End
              // Tab Three
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-y-8 text-xs w-full lg:w-1/2 gap-y-8">
                  <div>
                    <div className="mb-1">
                      Upload Documents (e.g., business registration, product
                      catalog, photos):
                    </div>
                    <div className="text-[#6F6F6F] bg-[#FFFFFF] border border-[#DED9DD] px-10 py-14 rounded-lg flex justify-center items-center">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <div className="font-light">
                          <FiUploadCloud size={80} />
                        </div>
                        <div className="-ml-3 text-xs">Upload Documents</div>
                      </div>
                    </div>
                    {/* Uploaded Files */}
                    <div>
                      <ul>{files}</ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1">
                      Additional Comments or Questions:
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={10}
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )

            // Tab Three End
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
              {currentTab < 3 ? (
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
            <div
              onClick={() => setCurrentTab(3)}
              className={`${
                currentTab === 3 ? "bg-[#14199C]" : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
