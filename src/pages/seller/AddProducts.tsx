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
      <div className="w-full py-5 px-6 md:px-12 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Breadcrumbs & Content */}
      <div className="px-6 md:px-12 lg:px-24 w-full mt-4 flex flex-col flex-1">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-sm">
          <Link
            to={`/${pathname.split("/")[1]}/dashboard`}
            className="opacity-60"
          >
            Dashboard
          </Link>
          <FaChevronRight size={14} />
          <Link
            to={`/${pathname.split("/")[1]}/products`}
            className="opacity-60"
          >
            Products
          </Link>
          <FaChevronRight size={14} />
          <span className="text-sm font-semibold">Add products</span>
        </div>

        <div className="flex justify-between items-center mt-6 flex-wrap gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">Add Products</h1>

          <div className="flex gap-x-3 md:gap-x-5 items-center">
            <button className="text-sm text-defaultOrange hover:underline">
              Cancel
            </button>
            <button className="px-4 md:px-5 py-2 md:py-3 rounded-lg text-sm bg-defaultOrange hover:bg-defaultOrangeHover text-white">
              Publish
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 mt-8">
          {/* Left Content (Product Details) */}
          <div className="w-full lg:w-[70%] flex flex-col gap-y-5">
            {/* Details Section */}
            <div className="w-full rounded-lg p-5 flex flex-col gap-y-3 bg-white border border-primaryBorder">
              <h4 className="text-lg font-semibold mb-4">Details</h4>
              <div className="w-full">
                <h5 className="text-sm mb-2 font-medium">Product name:</h5>
                <input
                  type="text"
                  className="p-3 w-full rounded-lg border border-primaryBorder text-sm outline-none"
                  placeholder="Enter name"
                />
              </div>
              <div className="w-full">
                <h5 className="text-sm mb-2 font-medium">
                  Product description:
                </h5>
                <ReactQuill theme="snow" className="!rounded-lg" />
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="w-full rounded-lg p-5 flex flex-col gap-y-3 bg-white border border-primaryBorder">
              <div className="w-full flex justify-between items-start">
                <h4 className="text-lg font-semibold">Media</h4>
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
                    <p className="text-lg font-semibold text-center">
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
              <h4 className="text-lg font-semibold">Pricing</h4>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-y-1.5 flex-1">
                  <h5 className="text-sm mb-2 font-medium">Price:</h5>
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
                  <h5 className="text-sm mb-2 font-medium">Sale price:</h5>
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
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%] flex flex-col gap-y-5">
            {/* Status Section */}
            <div className="rounded-lg p-5 flex flex-col gap-y-2 bg-white border border-primaryBorder">
              <h5 className="text-sm">Status</h5>
              <select className="p-3 rounded-lg border border-primaryBorder text-sm outline-none">
                <option>Draft</option>
              </select>
            </div>

            {/* Inventory Section */}
            <div className="w-full flex flex-col rounded-lg bg-white border border-primaryBorder">
              <div className="p-5 flex flex-col gap-y-2 border-b border-b-primaryBorder">
                <h5 className="text-sm">Inventory</h5>
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
          </div>
        </div>
      </div>
    </div>
  );
}
