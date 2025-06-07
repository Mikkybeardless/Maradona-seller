import { useState } from "react";

import { FaChevronRight, FaInstagram, FaTwitter  } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ReturnPolicy() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7] p-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-xs">
            <Link
            to={`/`}
            className=""
            >
            Home
            </Link>
            <FaChevronRight size={14} />
            <span className="text-xs text-[#787878] ">Returns and Refunds</span>
        </div>

        {/* Page Content  */}
        <div className="mt-10 p-5 lg:px-24 flex flex-col items-center gap-y-10 text-justify">
            <h1 className="text-2xl font-bold">Return Policy</h1>
            <div className="w-full md:w-5/6 lg:w-3/4 text-sm">
                <p className="">
                    Thank you for shopping with DISTRESS SALES. 
                    We want to ensure you are completely satisfied with your purchase. 
                    If for any reason you are not satisfied, we gladly accept returns within 
                    30 days of the delivery date under the following conditions:
                </p>
                <div className="mt-4 p-8">
                    <ul className="font-bold list-disc">
                        <li>Items must be unused and in their original condition.</li>
                        <li>Items must be returned in their original packaging.</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">Return Process:</p>
                    <ol className="list-decimal pl-4">
                        <li className="mb-1 mt-1">Contact our customer service team at [contact information (attach link)] to initiate a return.</li>
                        <li className="mb-1">Fill out the return form provided by our customer service team.</li>
                        <li className="mb-1">Pack the items securely and ship them to the address provided.</li>
                    </ol>
                </div>

                <div className="mt-8">
                    <p className="font-bold">Return Shipping:</p>
                    <ul className="list-disc pl-4">
                        <li>Customers are responsible for return shipping costs, except in cases where the return is due to a defect or error on our part.</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Refunds:</p>
                    <ul className="list-disc pl-4">
                        <li>Once we receive your return, refunds will be processed to your original method of payment within 21 business days.</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Exceptions:</p>
                    <ul className="list-disc pl-4">
                        <li>Personalized items and perishable goods cannot be returned</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Customer Support:</p>
                    <ul className="list-disc pl-4">
                        <li>For any questions or concerns regarding returns, please contact us at [contact information attach link].</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Step 1: Initiate the Return Request</p>
                    <ol className="list-decimal pl-4">
                        <li className="mb-1"><span className="font-bold">Contact Us: </span>Reach out to our customer service team via [email/phone number] within 30 days of receiving your order to initiate a return request. Please have your order number and details handy.</li>
                        <li className="mb-1"><span className="font-bold">Reason for Return: </span>Provide a brief explanation of why you wish to return the item(s). This helps us improve our service and products.</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Step 2: Receive Return Authorization</p>
                    <ol className="list-decimal pl-4">
                        <li className="mb-1"><span className="font-bold">Return Authorization:</span> Upon approval of your return request, you will receive a Return Authorization (RA) number and detailed instructions on how to proceed.</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Step 3: Prepare Your Return:</p>
                    <ol className="list-decimal pl-4">
                        <li className="mb-1"><span className="font-bold">Package Items:</span> Carefully package the item(s) in their original condition and include all original packaging, tags, and accessories.</li>
                        <li className="mb-1"><span className="font-bold">Include Documentation:</span> Include a copy of your invoice or order confirmation along with the RA number clearly marked on the package.</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Step 4: Ship Your Return</p>
                    <ol className="list-decimal pl-4">
                        <li className="mb-1"><span className="font-bold">Shipping Instructions:</span> Ship the package to the address provided in the return authorization email. We recommend using a trackable shipping service to ensure your package reaches us safely.</li>
                        <li className="mb-1"><span className="font-bold">Return Shipping Costs:</span> Customers are responsible for return shipping costs unless the return is due to our error (e.g., wrong item sent, item arrived damaged).</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Step 5: Processing Your Refund</p>
                    <ol className="list-decimal pl-4">
                        <li className="mb-1"><span className="font-bold">Inspection: </span> Once we receive your return, our team will inspect the items to ensure they meet our return criteria (unused, in original packaging, etc.).</li>
                        <li className="mb-1"><span className="font-bold">Refund Issuance:</span> If your return meets our criteria, we will process your refund within [number] business days. Refunds will be issued to the original payment method used for the purchase.</li>
                    </ol>
                </div>
                <div className="mt-8">
                    <p className="font-bold">Additional Notes:</p>
                    <ol className="list-disc pl-4">
                        <li className="mb-1"><span className="font-bold">Exchanges:</span>  We currently do not offer direct exchanges. If you wish to exchange an item, please follow the return process and place a new order for the desired item separately.</li>
                        <li className="mb-1"><span className="font-bold">Non-Returnable Items:</span> Certain items may not be eligible for return due to hygiene reasons, health regulations, or other restrictions. Please refer to our return policy for details.</li>
                        <li className="mb-1"><span className="font-bold">Customer Support:</span> If you have any questions or need assistance with the return process, please contact our customer service team at [email/phone number].</li>
                    </ol>
                </div>
            </div>

            <div className="w-full md:w-5/6 lg:w-3/4 flex justify-center md:justify-end mt-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div  onClick={() => navigate(-1)} className="transition-all duration-300 ease-in-out text-[#E65800] border border-[#E65800] text-xs flex justify-center items-center px-10 py-3 rounded cursor-pointer hover:scale-110">Go Back</div>
                    <div className="transition-all duration-300 ease-in-out text-white bg-[#E65800] text-xs flex justify-center items-center px-10 py-3 rounded cursor-pointer hover:scale-110">Accept</div>
                </div>
            </div>
        </div>
      
    </div>
  );
}
