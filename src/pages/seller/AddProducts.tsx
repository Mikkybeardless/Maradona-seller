import { useDropzone } from "react-dropzone";
import { FaChevronRight, FaPlus } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useLocation } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
// import { useEffect } from "react"

export default function AddProducts() {
  const location = useLocation();
  const { pathname } = location;
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    // fileRejections,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxSize: 20000000,
  });

  const files = acceptedFiles.map((file, index) => {
    return (
      <img
        key={index}
        className="w-full h-[5rem] object-fill rounded-lg bg-gray-100"
        src={URL.createObjectURL(file)}
        alt="Car"
      />
    );
  });

  // useEffect(() => {
  //     if (fileRejections.length > 0) console.log(fileRejections)
  // }, [fileRejections])

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto custom-scrollbar pb-36 md:pb-10 bg-[#F5F5F5]">
      {/* Search Bar Section */}
      <div className="w-full py-3 px-6 md:px-12 lg:px-24 border-b border-b-[#E3E3E3]">
        <DashboardSearchBar />
      </div>

      {/* Breadcrumbs & Content */}
      <div className="px-6 md:px-12 lg:px-24 w-full mt-8 flex flex-col flex-1">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-xs">
          <Link
            to={`/${pathname.split("/")[1]}/dashboard`}
            className=""
          >
            Dashboard
          </Link>
          <FaChevronRight size={14} />
          <Link
            to={`/${pathname.split("/")[1]}/products`}
            className=""
          >
            Products
          </Link>
          <FaChevronRight size={14} />
          <span className="text-xs text-[#787878] ">Add Product</span>
        </div>

        <div className="flex justify-between items-center mt-6 flex-wrap gap-3">
          <h1 className="text-xl md:text-2xl font-bold">Add Product</h1>

          <div className="flex gap-x-3 md:gap-x-10 items-center">
            <button className="text-sm text-defaultOrange hover:underline">
              Cancel
            </button>
            <button className="px-4 py-2 md:py-3 rounded-xl text-sm bg-defaultOrange hover:bg-defaultOrangeHover text-white">
              Publish
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 mt-8">
          {/* Left Content (Product Details) */}
          <div className="w-full lg:w-[70%] flex flex-col gap-y-5">
            {/* Details Section */}
            <div className="w-full rounded-lg p-5 flex flex-col gap-y-3 bg-white border border-primaryBorder">
              <h4 className="text-sm font-semibold mb-2">Details</h4>
              <div className="w-full">
                <h5 className="text-sm mb-2 text-[#040421] ">Product name</h5>
                <input
                  type="text"
                  className="p-3 w-full rounded-lg border border-primaryBorder text-sm outline-none"
                  placeholder="Enter name"
                />
              </div>

              <div className="w-full">
                <h5 className="text-sm mb-2 text-[#040421]">
                  Product description
                </h5>
                <ReactQuill theme="snow" className="rounded-lg" />
              </div>

              <div className="w-full mt-2 rounded-lg flex flex-col gap-y-3">
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-sm mb-1 text-[#040421]">Category</h5>
                  <select className="p-4 rounded-lg border border-primaryBorder text-xs outline-none">
                    <option disabled>Select</option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-sm mb-1 text-[#040421]">SKU number</h5>
                    <input
                      type="text"
                      placeholder="##########"
                      className="p-3 outline-none w-full  rounded-lg border border-primaryBorder"
                    />
                </div>
              </div>
            </div>
            </div>

            {/* Media Upload Section */}
            <div className="w-full rounded-lg p-5 flex flex-col gap-y-3 bg-white border border-primaryBorder">
              <div className="w-full flex justify-between items-start">
                <h4 className="text-sm font-semibold">Media</h4>
                <button className="flex gap-x-2 items-center hover:underline text-[#898989]">
                  <FaPlus size={18} />
                  <span className="text-sm">Embed media</span>
                </button>
              </div>

              <div
                {...getRootProps()}
                className="w-full h-[10rem] flex flex-col justify-center items-center gap-y-1 rounded-lg border border-[#B0B0B0] border-dashed bg-[#F5F5F5]"
              >
                <input {...getInputProps()} />
                {!isDragActive ? (
                  <>
                    <IoCloudUploadOutline size={30} />
                    <p className="text-sm font-semibold text-center">
                      Drag files here or click to select
                    </p>
                    <p className="text-sm text-[#898989]">
                      Png, jpeg, Mp4 supported up to 20mb max
                    </p>
                  </>
                ) : (
                  <p className="">Drop file(s) here...</p>
                )}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="w-full rounded-lg p-5 flex flex-col gap-y-3 bg-white border border-primaryBorder">
              <h4 className="text-sm font-semibold">Pricing</h4>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-sm mb-2 text-[#040421]">Price</h5>
                  <div className="w-full px-3 flex gap-x-2 items-center rounded-lg border border-primaryBorder">
                    <input
                      type="text"
                      placeholder="0.00"
                      className="py-3 outline-none w-full"
                    />
                    <span>NGN</span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-sm mb-2 text-[#040421]">Sale price</h5>
                  <div className="w-full px-3 flex gap-x-2 items-center rounded-lg border border-primaryBorder">
                    <input
                      type="text"
                      placeholder="0.00"
                      className="py-3 outline-none w-full"
                    />
                    <span>NGN</span>
                  </div>
                </div>
              </div>
            </div>

                
            <h4 className="text-sm font-medium">Select the condition for this product</h4>
            <div className="w-full rounded-lg p-5 py-10 flex flex-col gap-y-3 bg-white border border-primaryBorder">
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-xs mb-2 font-medium">Condition</h5>
                  <div className="flex gap-x-3 items-center text-sm">
                    <input
                      className="w-[18px] h-[18px]"
                      type="checkbox"
                      id="condition-new"
                    />
                    <label htmlFor="condition-new">
                      New
                    </label>
                  </div>

                  <div className="flex gap-x-3 items-center text-sm mt-4">
                    <input
                      className="w-[18px] h-[18px]"
                      type="checkbox"
                      id="condition-old"
                    />
                    <label htmlFor="condition-old">
                      Used
                    </label>
                  </div>
                </div>
                <div className="flex flex-col  items-center gap-y-1.5 flex-1">
                  <h5 className="text-xs mb-2 font-medium text-center">Qty</h5>
                  <div className="w-1/2 px-3 flex gap-x-2 items-center rounded-lg border border-primaryBorder">
                    <input
                      type="number"
                      min="0"
                      id="product-qty-input"
                      className="py-2 outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col  items-center gap-y-1.5 flex-1">
                  <h5 className="text-xs mb-2 font-medium text-center">Price (N)</h5>
                  <div className="w-1/2 px-3 flex gap-x-2 items-center rounded-lg border border-primaryBorder">
                    <input
                      type="number"
                      className="py-2 outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%] flex flex-col gap-y-5">
            {/* Status Section */}
            <div className="rounded-lg p-5 flex flex-col gap-y-2 bg-white border border-primaryBorder">
              <h5 className="text-xs">Status</h5>
              <select className="p-3 rounded-lg border border-primaryBorder text-sm outline-none">
                <option>Draft</option>
              </select>
            </div>
            <div className="rounded-lg p-5 flex flex-col gap-y-2 bg-white border border-primaryBorder">
              <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-xs mb-1 text-[#040421]">Tags</h5>
                    <input
                      type="text"
                      placeholder="Type to search"
                      className="p-3 outline-none w-full  rounded-lg border border-primaryBorder"
                    />
                </div>
            </div>

            {/* Inventory Section */}
            <div className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder">
              <div className="p-5 flex flex-col gap-y-2 border-b border-b-primaryBorder">
                <h5 className="text-xs">Inventory</h5>
                <input
                  type="number"
                  className="p-3 rounded-lg border border-primaryBorder text-sm outline-none"
                />
                <div className="flex gap-x-1.5 text-xs">
                  <input
                    className="w-[18px] h-[18px]"
                    type="checkbox"
                    id="continue-selling"
                  />
                  <label htmlFor="continue-selling">
                    Continue selling product when out of stock
                  </label>
                </div>
              </div>
            </div>

            {/* Weight  */}
            <div className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder">
              <div className="p-5 flex flex-col gap-y-2 border-b border-b-primaryBorder">
                <h5 className="text-xs">Weight</h5>
                <div className="flex p-2 rounded-lg border border-primaryBorder text-sm outline-none">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-3/4"
                  />
                  <select className="w-1/4 outline-none p-1 rounded-lg text-xs text-[#6D6D6D] py-2 bg-[#F2F2F2]">
                    <option>g</option>
                    <option>kg</option>
                    <option>lbs</option>
                  </select>
                </div>
                <div className="flex gap-x-1.5 text-xs text-[#5D5D5D]">
                  Used to calculate shipping rates at checkout.
                </div>
              </div>
            </div>
            {/* Duration  */}
            <div className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder">
              <div className="p-5 flex flex-col gap-y-2 border-b border-b-primaryBorder">
                <h5 className="text-xs">Duration</h5>
                <div className="flex p-2 rounded-lg border border-primaryBorder text-sm outline-none">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-3/4"
                  />
                  <select className="w-1/4 outline-none p-1 rounded-lg text-xs text-[#6D6D6D] py-2 bg-[#F2F2F2]">
                    <option>Days</option>
                    <option>Weeks</option>
                    <option>Months</option>
                  </select>
                </div>
                
                <div className="flex gap-x-1.5 text-xs text-[#5D5D5D]">
                  This is the Auction duration of the product
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
