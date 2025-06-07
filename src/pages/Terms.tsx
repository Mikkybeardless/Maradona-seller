import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaChevronRight, FaInstagram, FaTwitter  } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Terms() {
    
      const navigate = useNavigate();
      const location = useLocation();
      const { pathname } = location;

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
            {/* Page Content  */}
            <div className="mt-4 p-5 lg:px-10 flex flex-col items-center gap-y-10 text-justify">
                <h1 className="text-2xl font-bold">TERMS AND CONDITIONS</h1>
                <div className="w-full md:w-5/6 lg:w-3/4 text-sm">
                    <p className="">
                        These Terms and Conditions ("Terms") govern your use of the DISTRESS SALES website and any products, 
                        services, or content made available through the Website. By accessing or using the Website, 
                        you agree to be bound by these Terms. If you do not agree to these Terms, you are advised not use the Website
                    </p>

                    <div className="mt-8">
                        <p className="font-bold">1. Use of the Website</p>
                        <p className="mt-8">
                            <span className="font-bold">1.1 License:</span> Subject to these Terms, DISTRESS SALES  5grants you a limited, non-exclusive, non-transferable license to access and use the Website for your personal or internal business use.
                        </p>
                        
                        <p className="mt-8">
                            <span className="font-bold">1.2 Restrictions: </span>You agree not to
                        </p>
                        <ul className="list-disc pl-4">
                            <li>Use the Website for any unlawful purpose or in violation of any applicable laws.</li>
                            <li>Modify, adapt, translate, or reverse engineer any portion of the Website.</li>
                            <li>Attempt to gain unauthorized access to any part of the Website or interfere with its operation.</li>
                            <li>Transmit or upload any malicious code, viruses, or harmful content.</li>
                        </ul>
                    </div>
    
                    <div className="mt-8">
                        <p className="font-bold">2. Products and Services</p>
                        <p className="mt-8">
                            <span className="font-bold">2.1 Product Information:</span> We strive to provide accurate and up-to-date information about our products and services. However, we do not warrant the accuracy, completeness, or reliability of any product descriptions or information on the Website.
                        </p>
                        <p className="mt-8">
                            <span className="font-bold">2.2 Pricing:</span> Prices for products and services are subject to change without notice. We reserve the right to modify or discontinue any product or service at any time.
                        </p>
                        <p className="mt-8">
                            <span className="font-bold">2.3 Orders:</span>  By placing an order through the Website, you agree to provide accurate and complete information. We may refuse or cancel an order for any reason, including inaccuracies in product or pricing information.
                        </p>
                        
                        
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">3. Payment and Billing</p>
                        <p className="mt-8">
                            <span className="font-bold">3.1 Payment:</span> Payment for orders placed through the Website must be made using the methods accepted by DISTRESS SALES. We may store and use your payment information in accordance with our Privacy Policy.
                        </p>
                        
                        <p className="mt-8">
                            <span className="font-bold">3.2 Billing</span> By providing your payment information, you authorize us to charge your account for the total amount of your order (including any applicable taxes and shipping charges).
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">4. Shipping and Delivery</p>
                        <p className="mt-8">
                            <span className="font-bold">4.1 Shipping:</span> We will ship products to the address provided by you during the order process. Shipping times and methods are estimated and not guaranteed unless otherwise specified.
                        </p>
                        <p className="mt-8">
                            <span className="font-bold">4.2 Risk of Loss:</span> The risk of loss and title for products purchased from us pass to you upon delivery to the carrier.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">5. Returns and Refunds</p>
                        <p className="mt-8">
                            <span className="font-bold">5.1 Return Policy:</span>  Our return policy is outlined separately on the Website. By placing an order, you agree to the terms of our return policy.
                        </p>
                        <p className="mt-8">
                            <span className="font-bold">5.2 Refunds:</span>  Refunds will be issued in accordance with our refund policy. We reserve the right to refuse refunds or returns if the product does not meet our return criteria.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">6. Privacy</p>
                        <p className="mt-8">
                            <span className="font-bold">6.1 Privacy Policy</span> Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Website, you consent to the collection, use, and sharing of information as described in the Privacy Policy.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">7. Intellectual Property</p>
                        <p className="mt-8">
                            <span className="font-bold">7.1 Ownership: </span>  The Website and its original content, features, and functionality are owned by AROSOFT INTERNATIONAL LIMITED and are protected by intellectual property laws.
                        </p>
                        <p className="mt-8">
                            <span className="font-bold">7.2 Trademarks: </span>  All trademarks, service marks, and logos used and displayed on the Website are registered and unregistered trademarks of DS DISTRESS SALES. You may not use or display any trademarks without our prior written consent
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">8. Limitation of Liabilit</p>
                        <p className="mt-8">
                            <span className="font-bold">8.1 Disclaimer:</span> To the fullest extent permitted by law, AROSOFT INTERNATIONAL LIMITED disclaims all warranties, express or implied, regarding the Website and its use
                        </p>
                        <p className="mt-8">
                            <span className="font-bold">8.2 Limitation of Liability:</span> DISTRESS SALES shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website, even if advised of the possibility of such damages.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">9. Governing Law</p>
                        <p className="mt-8">
                            <span className="font-bold">9.1 Jurisdiction: </span> These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">10. Changes to Terms</p>
                        <p className="mt-8">
                            <span className="font-bold">10.1 Modification</span> DISTRESS SALES reserves the right to modify or revise these Terms at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website following the posting of changes constitutes your acceptance of such changes
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold">11. Contact Us</p>
                        <p className="mt-8">
                            <span className="font-bold">11.1 Questions:</span>  If you have any questions about these Terms, please contact us at <span className="font-bold">no1distresssales@gmail.com </span>
                        </p>
                    </div>
                </div>
    
                <div className="w-full md:w-5/6 lg:w-3/4 flex justify-center md:justify-end mt-24 mb-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div  onClick={() => navigate(-1)} className="transition-all duration-300 ease-in-out text-[#E65800] border border-[#E65800] text-xs flex justify-center items-center px-10 py-3 rounded cursor-pointer hover:scale-110">Go Back</div>
                        <div className="transition-all duration-300 ease-in-out text-white bg-[#E65800] text-xs flex justify-center items-center px-10 py-3 rounded cursor-pointer hover:scale-110">Accept</div>
                    </div>
                </div>
            </div>
          
        </div>
  );
}
