import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

export default function AddCustomer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [phone, setPhone] = useState<any>();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData, phone, country, region);
  };

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar md-pb-10 pb-36 bg-[#F5F5F5]">
      <div className="w-full py-3 px-4 md:px-8 lg:px-24 border-b border-b-primaryBorder max-w-[1200px] mx-auto">
        <DashboardSearchBar />
      </div>

      <div className="px-4 md:px-8 lg:px-24 w-full mt-6 flex flex-col flex-1">
        <h1 className="text-2xl w-full font-bold flex items-start">
          Add Customer
        </h1>

        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-y-6 p-5 mt-6 rounded-lg border border-primaryBorder bg-white">
          <h3 className="text-lg font-semibold">Basic details</h3>

          {/* Name Fields */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="firstName" className="text-sm">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                className="rounded-lg p-3 outline-none border border-primaryBorder"
                placeholder="First name"
                onChange={handleInputChange}
                value={formData.firstName}
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="lastName" className="text-sm">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                className="rounded-lg p-3 outline-none border border-primaryBorder"
                placeholder="Last name"
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full flex flex-col gap-y-1.5">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="rounded-lg p-3 outline-none border border-primaryBorder"
              placeholder="Email address"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          {/* Phone Input */}
          <div className="w-full flex flex-col gap-y-1.5">
            <label className="text-sm">Phone Number</label>
            <div className="w-full flex items-end gap-x-6">
              <PhoneInput
                className="!w-full gap-x-5"
                countrySelectorStyleProps={{
                  className: "w-full md:w-[20%]",
                  buttonClassName: "!h-auto w-full py-3 !rounded-lg",
                }}
                defaultCountry="ng"
                name="phone"
                value={phone}
                onChange={(val) => setPhone(val)}
                inputClassName="w-full !h-auto !py-3 !rounded-lg outline-none !border !border-primaryBorder !text-base"
              />
            </div>
          </div>
        </div>

        {/* basic details */}

        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-y-6 p-3 md:p-5 mt-6 rounded-lg border border-primaryBorder bg-white">
          {/* Section Title */}
          <div className="flex flex-col gap-y-1.5">
            <h3 className="text-lg font-semibold">Shipping & Delivery</h3>
            <span className="text-sm">
              The address that will be used for the delivery of your goods
            </span>
          </div>

          {/* Country Dropdown */}
          <div className="w-full flex flex-col gap-y-1.5">
            <label className="text-sm">Country/Region</label>
            <CountryDropdown
              classes="rounded-lg p-3 outline-none border border-primaryBorder"
              value={country}
              onChange={(val) => setCountry(val)}
              defaultOptionLabel="Select"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-x-2.5">
            <div className="w-full flex flex-col gap-y-1.5">
              <label className="text-sm">State</label>
              <RegionDropdown
                classes="rounded-lg p-3 outline-none border border-primaryBorder"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                defaultOptionLabel="Select"
              />
            </div>
            <div className="w-full flex flex-col gap-y-1.5">
              <label className="text-sm">City</label>
              <RegionDropdown
                classes="rounded-lg p-3 outline-none border border-primaryBorder"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                defaultOptionLabel="Select"
              />
            </div>
          </div>

          {/* Address Input */}
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="address" className="text-sm">
              Address:
            </label>
            <input
              type="text"
              className="rounded-lg p-3 outline-none border border-primaryBorder"
              placeholder="Address"
              name="address"
              onChange={handleInputChange}
              value={formData.address}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 mt-6">
          <button className="px-4 py-2.5 text-sm rounded-lg border border-defaultOrange text-defaultOrange w-full md:w-auto">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2.5 text-sm rounded-lg bg-defaultOrange text-white w-full md:w-auto"
          >
            Save customer
          </button>
        </div>
      </div>
    </div>
  );
}
