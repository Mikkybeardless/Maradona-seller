import { FaInstagram } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";

export default function HelpCentre() {
  return (
    <div className="flex justify-center w-full mx-auto my-10 max-w-3xl">
      <div className=" bg-[#FFFFFF] md:flex">
        <div className=" p-4 bg-[#E65800] text-white md:w-3/5 lg:w-2/3 rounded-lg">
          <div className="border-2 border-white h-full  flex flex-col gap-4 justify-center items-start p-4">
            <p className="flex items-center">
              <span className="bg-white text-black p-1 rounded-2xl">
                <LuPhoneCall />
              </span>
              <span className="ml-4 text-xs poppins">+1012 3456 789</span>
            </p>
            <p className="flex items-center ">
              <span className="bg-white text-black p-1 rounded-2xl">
                <MdOutlineEmail />
              </span>
              <span className="ml-4 text-xs poppins">
                no1distresssales@gmail.com
              </span>
            </p>
            <p className="flex items-center ">
              <span className="bg-white text-black p-1 rounded-2xl">
                <FaInstagram />
              </span>
              <span className="ml-4 text-xs poppins">no1distresssales</span>
            </p>
            <p className="flex items-center">
              <span className="bg-white text-black p-1 rounded-2xl">
                <GrFacebookOption />
              </span>
              <span className="ml-4 text-xs poppins">no1distresssales</span>
            </p>
          </div>
        </div>

        {/* Contact Form  */}
        <div className="p-4 md:p-10 md:w-3/5 shadow-md lg:w-2/3 flex flex-col justify-between">
          {/* Form Inputs  */}
          <div className="space-y-5">
            <div className="flex flex-col gap-y-1">
              <label>Full Name</label>
              <input
                className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              <div className="flex flex-col gap-y-1">
                <label>Email</label>
                <input
                  className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label>Phone Number</label>
                <input
                  className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label>Subject</label>
              <div className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none">
                <select className="w-full h-full" name="" id="">
                  {[
                    "Select a subject",
                    "Bad Product",
                    "Delay in delivery",
                    "Payment/check out issues",
                    "Account/security issues",
                    ,
                    "Product quality",
                    "Refund/return issues",
                    ,
                    "⁠Others",
                  ].map((subject, index) => (
                    <option key={index} value={subject} disabled={index === 0}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-y-1">
                <label>Message:</label>
                <textarea
                  className="p-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                  placeholder="Write your message"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-5 flex justify-center">
            <button className="w-full md:w-[90%] lg:w-[70%] mx-auto py-3 rounded-lg  text-white bg-[#E65800] hover:bg-defaultOrangeHover transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
