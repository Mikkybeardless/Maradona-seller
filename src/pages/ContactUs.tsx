import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className="px-3 sm:px-4 w-full">
        <Navbar />

        <div className="flex justify-center mt-10 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold work-sans">
            Contact Us
          </h1>
        </div>

        {/* Contact Form  Container */}
        <div className="px-[2%] lg:px-[8%] ">
          <div className="p-2 bg-[#FFFFFF] md:flex">
            <div className="bg-[#E65800] md:w-2/5 lg:w-1/3 rounded-lg p-3  text-white">
              <div className="flex flex-col justify-between p-8 h-full  border border-white rounded-lg  ">
                <div className="mb-10 md:mb-0">
                  <p className="text-lg md:text-xl font-semibold work-sans mb-1">
                    Contact Information
                  </p>
                  <p className="text-xs md:text-sm font-medium work-sans">
                    Say something to start a live chat!
                  </p>
                </div>

                <div>
                  <p className="flex items-center mb-8">
                    <span className="bg-white text-black p-1 rounded-2xl">
                      <LuPhoneCall />
                    </span>
                    <span className="ml-4 text-xs poppins">+1012 3456 789</span>
                  </p>
                  <p className="flex items-center mb-8">
                    <span className="bg-white text-black p-1 rounded-2xl">
                      <MdOutlineEmail />
                    </span>
                    <span className="ml-4 text-xs poppins">
                      no1distresssales@gmail.com
                    </span>
                  </p>
                  <p className="flex items-center mb-8">
                    <span className="bg-white text-black p-1 rounded-2xl">
                      <FaInstagram />
                    </span>
                    <span className="ml-4 text-xs poppins">
                      no1distresssales
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="bg-white text-black p-1 rounded-2xl">
                      <GrFacebookOption />
                    </span>
                    <span className="ml-4 text-xs poppins">
                      no1distresssales
                    </span>
                  </p>
                </div>

                <div className="flex mt-14 md:mt-0">
                  <div className="bg-white text-black p-1 rounded-2xl">
                    <FaTwitter />
                  </div>

                  <div className="bg-white text-black p-1 rounded-2xl ml-5">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form  */}
            <div className="p-4 md:p-10 md:w-3/5 lg:w-2/3 flex flex-col justify-between">
              {/* Form Inputs  */}
              <div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
                  <div className="flex flex-col gap-y-1.5">
                    <label htmlFor="firstName">First name:</label>
                    <input
                      className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1.5">
                    <label htmlFor="lastName">Last name:</label>
                    <input
                      className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1.5">
                    <label htmlFor="email">Email:</label>
                    <input
                      className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-y-1.5">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full mt-8">
                  <div className="flex flex-col gap-y-1.5">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="p-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
                      placeholder="Write your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-20 flex justify-center">
                <button
                  className="w-full md:w-[90%] lg:w-[70%] mx-auto py-3 rounded-lg mt-8 text-white bg-[#E65800] hover:bg-defaultOrangeHover transition"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
