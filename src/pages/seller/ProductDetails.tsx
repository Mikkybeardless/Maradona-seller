import { useRef, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import Car from "../../assets/Product-page-car.png";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

export default function ProductDetails() {
  const location = useLocation();
  const { pathname, state } = location;
  const [assignAgentModal, setAssignAgentModal] = useState(false);
  const assignAgentModalRef = useRef(null);

  useClickAway(assignAgentModalRef, () => {
    setAssignAgentModal(false);
  });

  function openAssignAgentModal() {
    setAssignAgentModal(true);
  }

  function closeAssignAgentModal() {
    setAssignAgentModal(false);
  }

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar md:pb-10 pb-36 bg-[#F5F5F5]">
      {assignAgentModal ? (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-sm px-4">
          <div
            ref={assignAgentModalRef}
            className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-h-[80vh] overflow-y-auto rounded-[24px] flex flex-col p-6 sm:p-8 bg-white"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              Available Agents
            </h2>
            <div className="w-full flex flex-col flex-1 gap-y-4 mt-4 overflow-y-auto custom-scrollbar-low-opacity">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex items-center gap-x-2 sm:gap-x-3">
                  <input
                    className="size-[16px] sm:size-[18px]"
                    type="radio"
                    name="agent"
                    id={"agent" + num}
                  />
                  <img
                    src={Car}
                    alt="Profile"
                    className="size-[35px] sm:size-[40px] object-fill rounded-full bg-gray-300"
                  />
                  <label
                    htmlFor={"agent" + num}
                    className="text-sm sm:text-base"
                  >
                    Rosemary Sunday
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-end gap-x-2 sm:gap-x-3 text-sm">
              <button
                onClick={closeAssignAgentModal}
                className="rounded-lg hover:underline"
              >
                Cancel
              </button>
              <button className="px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-white bg-defaultOrange">
                Assign
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Top Search Bar */}
      <div className="w-full py-4 sm:py-5 px-4 sm:px-6 md:px-8 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-24 w-full mt-4 flex flex-col flex-1">
        {/* Breadcrumb Navigation */}
        <div className="flex gap-x-2 sm:gap-x-4 items-center">
          <Link
            to={`/${pathname.split("/")[1]}/dashboard`}
            className="text-xs sm:text-sm md:text-base opacity-60"
          >
            Dashboard
          </Link>
          <FaChevronRight className="text-[14px] sm:text-[18px]" />
          <Link
            to={`/${pathname.split("/")[1]}/products`}
            className="text-xs sm:text-sm md:text-base opacity-60"
          >
            Products
          </Link>
          <FaChevronRight className="text-[14px] sm:text-[18px]" />
          <span className="text-xs sm:text-sm md:text-base">
            Product Details
          </span>
        </div>

        <div className="flex  sm:flex-row justify-between items-center mt-6">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold">Product Details</h1>

          {/* Button or Edit/Delete Icons */}
          {state?.fieldAgent ? (
            <button
              onClick={openAssignAgentModal}
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm text-white bg-defaultOrange hover:bg-defaultOrangeHover"
            >
              Assign Field Agent
            </button>
          ) : (
            <div className="flex gap-4 sm:gap-8 items-center">
              <CiEdit
                color="#e65800"
                size={22} /* Reduced size for mobile */
                className="cursor-pointer"
                title="Edit"
              />
              <BsTrash3
                color="#e65800"
                size={22}
                className="cursor-pointer"
                title="Delete"
              />
            </div>
          )}
        </div>

        {/* Product Image Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-10">
          <div className="w-full sm:w-2/4 flex flex-col items-center gap-y-3 sm:gap-y-5">
            <img
              className="h-[280px] sm:h-[350px] md:h-[430px] w-[90%] sm:w-[85%] rounded-[32px] object-contain bg-black/15"
              src={Car}
              alt="Product"
            />

            {/* Image Thumbnails */}
            <div className="w-[80%] sm:w-[70%] grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  className="h-[50px] sm:h-[64px] w-full rounded-lg object-contain cursor-pointer bg-black/15"
                  src={Car}
                  alt="Product"
                />
              ))}
            </div>
          </div>

          {/* Images */}

          <div className="w-full sm:w-2/4 flex flex-col gap-y-6">
            {/* Product Details */}
            {[
              { label: "Product Name:", value: "Toyota Camry LE (2024)" },
              { label: "Category:", value: "Car" },
              { label: "Status:", value: "Active" },
              { label: "Seller's Name:", value: "Distress Sales" },
              { label: "Contact Number:", value: "+234 701 234 5678" },
              { label: "Upload Date:", value: "March 15, 2024" },
              { label: "Product ID:", value: "CAR123456" },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center gap-x-2"
              >
                <span className="text-sm sm:text-base font-semibold">
                  {item.label}
                </span>
                <span className="opacity-70 text-sm sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Description */}
            <div className="w-full flex flex-col gap-y-1.5">
              <span className="text-sm sm:text-base font-semibold">
                Description:
              </span>
              <span className="opacity-70 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                reiciendis voluptas laboriosam, suscipit debitis, iusto aliquam
                optio commodi autem atque hic eveniet error eaque quibusdam.
              </span>
            </div>

            {/* Features & Pricing */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Key Features */}
              <div>
                <span className="text-sm sm:text-base font-semibold">
                  Key Features:
                </span>
                <ul className="text-sm sm:text-base flex flex-col gap-y-2 mt-2.5 list-disc pl-5">
                  {[
                    "Engine: 2.5L 4-cylinder",
                    "Transmission: Automatic",
                    "Mileage: 30,000 miles",
                    "Color: Metallic Grey",
                    "Fuel Type: Petrol",
                    "Condition: Used",
                  ].map((feature, index) => (
                    <li key={index} className="opacity-70">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Availability */}
              <div>
                <span className="text-sm sm:text-base font-semibold">
                  Pricing and Availability:
                </span>
                <ul className="text-sm sm:text-base flex flex-col gap-y-2 mt-2.5 list-disc pl-5">
                  {[
                    "Price: $5,500,000",
                    "Negotiable: No",
                    "Location: Lekki, Lagos",
                  ].map((item, index) => (
                    <li key={index} className="opacity-70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* details */}
        </div>
      </div>
    </div>
  );
}
