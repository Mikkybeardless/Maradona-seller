import { useState } from "react";
import shorterLogo from "../assets/shorter-logo.svg";
import PaymentCards from "../assets/payment-cards.svg";
import { BiLogoFacebookSquare } from "react-icons/bi";
import {
    FaInstagram,
    FaWhatsapp,
    FaXTwitter,
  } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    function goToLogin() {
        navigate("/login");
      }

  return (
    <>
       {/* Footer Section */}
       <div className="w-full pt-16 pb-8 mt-[8rem] md:mt-[10rem] relative flex justify-center bg-[#0C0F53]">
          <div className="w-full absolute top-0 z-0 bg-[#040421]"></div>

          <div className="w-full z-20 bg-transparent px-6 md:px-12">
            {/* Footer Links Section */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-[#FFEFE6]">
              <div className="flex flex-col gap-y-3 footerTags">
                <h5 className="text-sm">Payment Gateways</h5>
                <img
                  className="w-[4rem] sm:w-[6rem]"
                  src={PaymentCards}
                  alt="payment methods"
                />
              </div>
              <div className="flex flex-col gap-y-3 footerTags">
                <h5  className="text-sm mb-2">Company</h5>
                <div className="font-light text-xs space-y-1">
                  <p>Terms and Conditions</p>
                  <p>Returns and Refunds</p>
                  <p>Help Center</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 footerTags">
                <h5 className="text-sm mb-2">Products</h5>
                <div className="font-light text-xs space-y-1">
                  <p>Cars</p>
                  <p>Houses</p>
                  <p>Lands</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 footerTags">
                <h5 className="text-sm mb-2">Make money with us</h5>
                <div className="font-light text-xs space-y-1">
                  <p>Agent Registration Form</p>
                  <p>Become an Investor</p>
                  <p>Become a Vendor</p>
                </div>
              </div>
              
            </div>

            {/* Newsletter & Logo Section */}
            <div className="w-full z-20 bg-transparent mt-16 mb-16 md:mt-20 pb-5 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
              <div>
                <img
                  className="w-[80px] h-[80px] md:w-[97px] md:h-[97px]"
                  src={shorterLogo}
                  alt="Logo"
                />
              </div>

              <div className=" text-start md:items-end w-full md:w-[40%]">
                <p className="font-semibold text-white text-start text-sm md:text-sm mb-2">
                  Subscribe to our Newsletter
                </p>
                <div className="flex bg-white p-1 h-[60px] rounded-lg pr-2 ">
                  <input
                    className="outline-none w-full sm:w-[70%] bg-white border-none p-3 text-sm md:text-sm"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button className="rounded-lg px-5 sm:px-10 py-1 sm:py-1 sm:my-1 text-white text-sm bg-[#E65800] hover:bg-defaultOrangeHover">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media & Terms Section */}
            <div className="px-14 pt-5 flex flex-col md:flex-row items-center border-t border-t-white gap-4 md:gap-0">
              {/* Social Icons */}
              <div className="flex gap-x-3.5 md:mr-8">
                <FaXTwitter
                  className="cursor-pointer w-5 h-5"
                  color="white"
                />
                <BiLogoFacebookSquare
                  className="cursor-pointer w-5 h-5"
                  color="white"
                />
                <FaWhatsapp
                  className="cursor-pointer w-5 h-5"
                  color="white"
                />
                <FaInstagram
                  className="cursor-pointer w-5 h-5"
                  color="white"
                />
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-6 text-xs text-white">
                <p>Conditions of use</p>
                <p>Privacy Notice</p>
                <p>Consumer Health</p>
                <p>Data Privacy Disclosure</p>
                <p>© 2023-2024, distresssales.com</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
