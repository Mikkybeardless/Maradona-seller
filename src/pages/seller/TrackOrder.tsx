import { NavLink, useNavigate } from "react-router-dom";
import {AdvancedMarker, APIProvider, Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import img1 from "../../assets/discount-bg.png";
import { TbMessage } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { useEffect, useState } from "react";

function TrackOrder() {
  const navigate = useNavigate();

  const handleViewTransactionHistry = () => {
    navigate("/seller/wallet/transaction-history");
  };

  const position = {lat: 9.0820, lng: 8.6753};
  const apiKey = import.meta.env.VITE_GOOGLEMAPS_API_KEY
  const mapID = import.meta.env.VITE_GOOGLEMAPS_MAP_ID

  return (
    <div className="bg-[#F7F7F7] lg:flex work-sans h-full overflow-y-auto custom-scrollbar mb-8">

      {/* Left panel  */}
        <div className="w-full lg:w-1/2 bg-[#FFFFFF] min-h-screen overflow-auto custom-scrollbar border-r-4 border-r-[#DED9DD]">
          <div className="flex items-center gap-x-12 lg:mb-4 px-4 md:px-12 py-5 lg:border-b-2 lg:border-b-[#DED9DD]">
            <div className="font-medium text-[12px] md:text-xl">Order 73KJFHIUDF4</div>
            <div className="text-[10px] md:text-xs text-[#14199C] bg-[#E5E6FA] px-2 py-1 rounded-xl">In transit</div>
          </div>

          <div className="mt-4 lg:mt-8 flex items-center w-full lg:w-4/5 px-12 md:px-20 lg:px-4">

            <div className="xl:w-7 w-5 xl:h-7 h-5 overflow-y-visible overflow-x-visible">
              <div className="rounded-full flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border-2 border-[#2CA568]">
                <div className="rounded-full xl:w-5 w-3 xl:h-5 h-3 bg-[#2CA568]"></div>
              </div>
              <div className="text-[10px] md:text-xs xl:text-lg mt-3 w-24 lg:w-32">Order Placed</div>
            </div>

            <div className="border-b-2 border-[#2CA568] w-full"></div>

            <div className="xl:w-7 w-5 xl:h-7 h-5 overflow-y-visible">
              <div className="rounded-full flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border-2 border-[#2CA568]">
                <div className="rounded-full xl:w-5 w-3 xl:h-5 h-3 bg-[#2CA568]"></div>
              </div>
              <div className="text-[10px] md:text-xs xl:text-lg mt-3 w-32">Processing</div>
            </div>

            <div className="border-b-2 border-[#2CA568] w-full"></div>

            <div className="xl:w-7 w-5 xl:h-7 h-5 overflow-y-visible">
              <div className="rounded-full flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border-2 border-[#2CA568]">
                <div className="rounded-full xl:w-5 w-3 xl:h-5 h-3 bg-[#2CA568]"></div>
              </div>
              <div className="text-[10px] md:text-xs xl:text-lg mt-3 w-32">In Abuja</div>
            </div>

            <div className="border-b-2 border-[#2CA568] w-full"></div>

            <div className="xl:w-7 w-5 xl:h-7 h-5 overflow-y-visible">
              <div className="rounded-full flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border-2 border-[#2CA568]">
                <div className="rounded-full xl:w-5 w-3 xl:h-5 h-3 bg-[#2CA568]"></div>
              </div>
              <div className="text-[10px] md:text-xs xl:text-lg mt-3">Delivered</div>
              <div className="font-light text-[#5C4D58] w-16 md:w-24 text-[9px] md:text-sm">E.T.A Tuesday</div>
            </div>
            
          </div>


          {/* Tracking Updates  */}

          <div className="px-5 md:px-12 mt-16 xl:mt-24">
            <div className="text-[#E65800] lg:text-lg xl:text-2xl font-medium mb-10 xl:mb-8">
              Tracking Updates
            </div>

            <div className="lg:mb-16 lg:p-3 xl:p-6">
              <div className="flex gap-x-6 h-24">
                <div>
                  <div className="text-[12px] md:text-xs xl:text-base font-medium">Tue, Dec 18</div>
                  <div className="text-[#5C4D58] text-[12px] md:text-xs xl:text-sm">01:30 pm</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full xl:w-4 xl:h-4 w-3 h-3 bg-[#14199C]"></div>
                  <div className="h-full border-l-2 border-l-[#14199C]"></div>
                </div>
                <div className="">
                  <div className="text-[#14199C] text-[14px] lg:text-lg xl:text-xl font-medium mb-3">Order Placed</div>
                  <div className="text-[12px] md:text-xs xl:text-sm text-[#5C4D58] ">21 Velocity Street, Rapid City, Lagos, Nigeria</div>
                </div>
              </div>
              
              <div className="flex gap-x-6 h-24">
                <div>
                  <div className="text-[12px] md:text-xs xl:text-base font-medium">Tue, Dec 18</div>
                  <div className="text-[#5C4D58] text-[12px] md:text-xs xl:text-sm">01:30 pm</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full xl:w-4 xl:h-4 w-3 h-3 bg-[#14199C]"></div>
                  <div className="h-full border-l-2 border-l-[#14199C]"></div>
                </div>
                <div className="">
                  <div className="text-[#14199C] text-[14px] lg:text-lg xl:text-xl  font-medium mb-3">Departed from origin</div>
                  <div className="text-[12px] md:text-xs xl:text-sm text-[#5C4D58] ">21 Velocity Street, Rapid City, Lagos, Nigeria</div>
                </div>
              </div>
              
              <div className="flex gap-x-6 h-24">
                <div>
                  <div className="text-[12px] md:text-xs xl:text-base font-medium">Tue, Dec 18</div>
                  <div className="text-[#5C4D58] text-[12px] md:text-xs xl:text-sm">01:30 pm</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full xl:w-4 xl:h-4 w-3 h-3 bg-[#14199C]"></div>
                  <div className="h-full border-l-2 border-l-[#14199C]"></div>
                </div>
                <div className="">
                  <div className="text-[#14199C] text-[14px] lg:text-lg xl:text-xl font-medium mb-3">Order Placed</div>
                  <div className="text-[12px] md:text-xs xl:text-sm text-[#5C4D58] ">21 Velocity Street, Rapid City, Lagos, Nigeria</div>
                </div>
              </div>
              
              <div className="flex gap-x-6 h-24">
                <div>
                  <div className="text-[12px] md:text-xs xl:text-base font-medium">Tue, Dec 18</div>
                  <div className="text-[#5C4D58] text-[12px] md:text-xs xl:text-sm">01:30 pm</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full xl:w-4 xl:h-4 w-3 h-3 bg-[#14199C]"></div>
                  <div className="h-full border-l-2 border-l-[#14199C]"></div>
                </div>
                <div className="">
                  <div className="text-[#14199C] text-[14px] lg:text-lg xl:text-xl font-medium mb-3">Order Placed</div>
                  <div className="text-[12px] md:text-xs xl:text-sm text-[#5C4D58] ">21 Velocity Street, Rapid City, Lagos, Nigeria</div>
                </div>
              </div>
              
              <div className="flex gap-x-6 h-24">
                <div>
                  <div className="text-[12px] md:text-xs xl:text-base font-medium">Tue, Dec 18</div>
                  <div className="text-[#5C4D58] text-[12px] md:text-xs xl:text-sm">01:30 pm</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full xl:w-4 xl:h-4 w-3 h-3 bg-[#E5E6FA]"></div>
                  <div className="h-full border-l-2 border-l-[#E5E6FA]"></div>
                </div>
                <div className="">
                  <div className="text-[#14199C] text-[14px] lg:text-lg xl:text-xl font-medium mb-3">Order Placed</div>
                  <div className="text-[12px] md:text-xs xl:text-sm text-[#5C4D58] ">21 Velocity Street, Rapid City, Lagos, Nigeria</div>
                </div>
              </div>
              
              <div className="flex gap-x-6 h-24">
                <div>
                  <div className="text-[12px] md:text-xs xl:text-base font-medium">Tue, Dec 18</div>
                  <div className="text-[#5C4D58] text-[12px] md:text-xs xl:text-sm">01:30 pm</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full xl:w-4 xl:h-4 w-3 h-3 bg-[#E5E6FA]"></div>
                  <div className="h-full"></div>
                </div>
                <div className="">
                  <div className="text-[#14199C] text-[14px] lg:text-lg xl:text-xl  font-medium mb-3">Delivery <span className="text-[#5C4D58]">(E.T.A Thursday)</span></div>
                  <div className="text-[12px] md:text-xs xl:text-sm text-[#5C4D58] ">21 Velocity Street, Rapid City, Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact button visible on small screens only  */}
          <div className="lg:hidden mt-20 mb-48 px-8">
            <div className="text-sm border-2 border-[#14199C] text-[#14199C] font-medium rounded text-center py-3">Contact courier</div>
          </div>

          {/* Nav bar  */}
          <div className="hidden lg:block p-4 border-t-2 border-t-[#DED9DD]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-8">
                <NavLink to={"/seller/profile"} className={"md:flex hidden"}>
                  <img
                    className="w-[40px] h-[40px] rounded-full object-fill"
                    src={img1}
                    alt="Profile"
                  />
                </NavLink>
                <div>
                  <div className="lg:text-base xl:text-lg font-medium">Rosemary Sunday</div>
                  <div className="text-xs xl:text-sm text-[#4A1E11] ml-2">Driver</div>
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="text-2xl p-3 bg-[#14199C] text-[#ffffff] rounded-full">
                  <TbMessage/>
                </div>
                <div className="text-2xl p-3 bg-[#14199C] text-[#ffffff] rounded-full">
                  <FiPhoneCall/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map  */}
        <div className="hidden lg:block lg:w-1/2">
        <APIProvider apiKey={apiKey}>
          <Map defaultCenter={position} defaultZoom={12} mapId={mapID} fullscreenControl={true}>
            <Directions/>
          </Map>
        </APIProvider>
        </div>
    </div>
  );
}

export default TrackOrder;

function Directions(){
  const map: any = useMap()
  const routesLibrary = useMapsLibrary("routes")
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>()
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>()
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])

  useEffect(()=>{
    if(!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
  }, [routesLibrary, map])

  useEffect(()=>{
    if(!directionsService || !directionsRenderer) return;

    directionsService.route({
      origin: "Ribadu Cantonment Kaduna",
      destination: "NDA Afaka Kaduna",
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: false,
    }).then(response =>{
      directionsRenderer.setDirections(response)
      // setRoutes(response.routes)
    })
  }, [directionsService, directionsRenderer])

  return null;
}