import { CiHeart, CiLocationOn } from "react-icons/ci";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import cardummy from "../assets/carshop.png";
import IOSapp from "../assets/IOS-app-display.png";
import QRcode from "../assets/qr-code.png";
import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Carousel from "../components/TestimonialCarousel";

export default function Home() {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   centerMode: true,
  //   centerPadding: "50px",
  // };

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className=" w-full">
        <Navbar />

        <main className="">
          <div id="home" className="w-full mt-12">
            <HomeCarousel />
          </div>
          {/* service */}
          <section className="px-4 sm:px-8 lg:px-[8%]">
            {/* Service Section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-24 my-10 items-center">
              {/* Left Side */}
              <div className="flex items-start">
                <div className="w-[12px] bg-[#14199C] h-[42px] mr-2"></div>
                <div>
                  <p className="font-semibold text-[24px] sm:text-[32px] text-[#292D32]">
                    Services
                  </p>
                  <p className="font-normal text-xs text-[#292D32] mt-1">
                    Find unbeatable deals on lands, houses, and cars with
                    Marathona, your trusted platform for distress sales.
                    Explore, compare, and secure your next property or vehicle
                    effortlessly.
                  </p>
                </div>
              </div>

              {/* Right Side - Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                  <p className="font-semibold text-sm text-[#292D32] mb-2">
                    Quality Cars at Discount Prices
                  </p>
                  <p className="font-normal text-xs text-[#292D32]">
                    Explore a wide range of vehicles, from economy to luxury
                    cars, all available at significantly reduced prices.
                  </p>
                </div>
                <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                  <p className="font-semibold text-sm text-[#292D32] mb-2">
                    Affordable Housing Deals
                  </p>
                  <p className="font-normal text-xs text-[#292D32]">
                    Get the best prices on houses, from budget-friendly homes to
                    luxury estates, all at distress-sale prices.
                  </p>
                </div>
                <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                  <p className="font-semibold text-sm text-[#292D32] mb-2">
                    Verified Land Sales
                  </p>
                  <p className="font-normal text-xs text-[#292D32]">
                    Secure land investments with verified titles, ensuring peace
                    of mind and secure transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="w-[90%] h-auto sm:h-[180px] flex flex-col sm:flex-row border-primaryBorder border rounded-[8px] mx-auto mt-10">
              <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-b sm:border-b-0 sm:border-r border-primaryBorder py-5 sm:py-0">
                <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                  26000+
                </h4>
                <p className="text-sm text-[#292D32]">Sales</p>
              </div>
              <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-b sm:border-b-0 sm:border-r border-primaryBorder py-5 sm:py-0">
                <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                  1500+
                </h4>
                <p className="text-sm text-[#292D32] text-center">
                  Products are inspected monthly
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-y-2 justify-center items-center py-5 sm:py-0">
                <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                  70+
                </h4>
                <p className="text-sm text-[#292D32] text-center">
                  Centres pan Nigeria
                </p>
              </div>
            </div>
          </section>

          <section className="flex bg-[url('/home/growBusiness.png')] object-cover  mt-12">
            <div className=" w-full md:w-[50%] bg-[#F2F2F2] md:pl-[110px] p-4 space-y-10 pr-[10px] py-10  rounded-br-[200px]">
              <h2 className="md:text-[56px]  font-bold tracking-[0.56px]">
                Grow <span className="text-defaultOrange">Your Business</span>,
                Reach More <span className="text-[#E65800]">Customers!</span>
              </h2>

              <div className=" space-y-10 pr-14">
                <p className="text-[#333333]">
                  Join <span className="text-defaultOrange">Distress </span>{" "}
                  <span className="text-[#E65800]">sales</span>—the ultimate
                  marketplace for sellers. Start selling your properties today
                  and scale your business with ease.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col text-[#333333] gap-3">
                    <span className="font-bold text-[22px]">12K+</span>
                    <div className="bg-[#333333] w-[46px] h-[3px]" />
                    <span>Total Customers</span>
                  </div>

                  <div className="flex flex-col text-[#333333] gap-3">
                    <span className="font-bold text-[22px]">4K+</span>
                    <div className="bg-[#333333] w-[46px] h-[3px]" />
                    <span>Total Sellers</span>
                  </div>

                  <div className="flex flex-col text-[#333333] gap-3">
                    <span className="font-bold text-[22px]">20K+</span>
                    <div className="bg-[#333333] w-[46px] h-[3px]" />
                    <span>Total Products</span>
                  </div>
                </div>
              </div>

              <button className="bg-defaultOrange text-white py-2.5 px-6 rounded-lg md:py-[24px] md:px-[56px] md:rounded-[15px]">
                Sign Up Now!
              </button>
            </div>
          </section>

          <div className="bg-[#FFFFFF] p-4 md:px-[110px] py-10">
            {/* how it works */}
            <section className=" ">
              {/* how it works */}

              <h2 className="text-[28px] font-semibold  text-defaultOrange">
                How it Works
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-5 bg-defaultOrange text-white p-4 rounded-[16px]">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-defaultOrange text-[30px] font-bold leading-none">
                      1
                    </span>
                  </div>

                  <p>
                    Sign up and list your products, Customers browse and shop
                    your products.
                  </p>
                </div>
                <div className="flex items-center gap-5 bg-defaultOrange text-white p-4 rounded-[16px]">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-defaultOrange text-[30px] font-bold leading-none">
                      2
                    </span>
                  </div>

                  <p>Receive orders and ship to them.</p>
                </div>
                <div className="flex items-center gap-5 bg-defaultOrange text-white p-4 rounded-[16px]">
                  <div className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-defaultOrange text-[30px] font-bold leading-none">
                      3
                    </span>
                  </div>

                  <p>Get paid securely and grow your business!</p>
                </div>
              </div>
            </section>

            {/* testimonials */}
            <section className=" bg-[#FFFFFF] mt-12 space-y-3">
              <h2 className="text-[32px] font-semibold">Testimonials</h2>
              <p>Here&apos;s what our top clients have to say about us</p>

              <div className="flex flex-col md:flex-row w-full">
                <div className="bg-[url('/home/team.png')] h-[437px] object-cover relative flex flex-col justify-end w-full md:w-[654px]">
                  <div className="h-[178px]  px-[30px] py-5 space-y-3 bg-[#00000080] text-white">
                    <h3 className="text-[18px] font-medium">Meet Our Team</h3>
                    <p className="md:w-[465px]">
                      Our dedicated professionals are committed to connecting
                      you with the best distress sale deals on lands, houses,
                      and cars. Together, we deliver excellence and trust
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[600px] h-[437px]">
                  <Carousel />
                </div>
              </div>
            </section>
          </div>

          {/* feature cat */}
          <section className="flex text-white">
            <div className="w-full md:w-[50%] px-4 md:pl-[118px] md:pr-[78px] py-10 space-y-4 bg-[#040421]">
              <h2 className="md:text-[60px] font-bold">Don&apos;t Miss Out!</h2>
              <p className="md:text-[25px]">
                Join thousands of successful sellers today!
              </p>
              <p className="font-medium text[10px] md:text-[14px]">
                Need Help? Contact our Support Team.
              </p>

              <button className="bg-[#14199C]  text-white md:text-[24px] px-[56px] md:py-[24px] py-3 rounded-[15px]">
                Start Selling Now
              </button>
            </div>

            <div className="hidden md:block md:w-[50%] bg-[url('/home/male-holding-tablet.png')] bg-cover h-[400px] md:h-[500px] relative"></div>
          </section>

          {/* download */}
          <section className="mt-20 flex flex-col md:flex-row items-center gap-6">
            {/* Left Section */}
            <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 pb-0 w-full md:w-[55%] bg-[#F5F5F5] text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Download the app for a better shopping experience
              </h1>

              {/* App Store & Play Store Buttons */}
              <div className="flex flex-col sm:flex-row w-full mt-8 gap-4">
                <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                  <FaGooglePlay className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-lg sm:text-xl font-semibold">
                    Play Store
                  </span>
                </button>
                <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                  <FaApple className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-lg sm:text-xl font-semibold">
                    App Store
                  </span>
                </button>
              </div>

              {/* App Image */}
              <img
                className="mt-5 w-[80%] sm:w-[60%] md:w-[50%]"
                src={IOSapp}
                alt="IOS app"
              />
            </div>

            {/* Right Section */}
            <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 w-full md:w-[40%] bg-[#040421] text-[#FFEFE6] text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">OR</h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-12 leading-tight">
                Scan the QR code to download the app for free
              </h1>

              {/* QR Code Image */}
              <img
                className="mt-10 sm:mt-16 w-[50%] sm:w-[40%] md:w-[60%] rounded-[21px]"
                src={QRcode}
                alt="QR-code"
              />
            </div>
          </section>
        </main>

        {/* Footer  */}
        <Footer />

        {/* Padding at the bottom of the page */}
      </div>
    </div>
  );
}

// const FeatureCard = () => {
//   return (
//     <div>
//       <div className="bg-[#ffffff] flex flex-col rounded-md p-4 mb-4 relative">
//         {/* Heart Icon (Fixed Position) */}
//         <div className="absolute md:top-7 xs:top-2 left-5 bg-[#BDBDBD] rounded-full h-7 w-7 flex items-center justify-center">
//           <CiHeart className="w-4 h-4 text-white" />
//         </div>

//         {/* Image */}
//         <div className="flex justify-center">
//           <img
//             src={cardummy}
//             alt="dummycars"
//             className="w-[90%] h-auto object-contain"
//           />
//         </div>
//       </div>

//       <div>
//         <p className="font-bold text-[15px] text-[#14199C] mb-[10px]">
//           ₦ 1,750,000
//         </p>
//         <p className="font-normal text-[15px] text-[#040421] mb-[10px]">
//           Toyota Tacoma Access Cab 2006 Blue
//         </p>
//         <p className="flex items-center gap-x-1 font-normal text-sm text-[#454545] mb-[15px]">
//           <CiLocationOn size={14} color="#E65800" />
//           Ikoyi, Lagos
//         </p>
//         <div className="flex gap-x-2">
//           <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
//             Automatic
//           </p>
//           <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
//             Automatic
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
