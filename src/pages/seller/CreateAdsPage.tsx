import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function CreateAdsPage() {
  const [formData, setFormData] = useState({
    adsHeadline: "",
    startDate: "",
    endDate: "",
    budget: "",
    maximumRedemptions: "",
    redeemerPerUser: "",
    targetedUrl: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="h-screen overflow-auto md:pb-10 pb-36 ">
      {/* Header */}
      <div className="w-full py-3.5 px-6 md:px-12 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Form Container */}
      <div className="p-6 sm:p-8 md:p-10 lg:p-12 mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex gap-x-2 items-center mb-6">
          <Link
            to="/seller/promotions"
            className="text-sm sm:text-base font-normal font-sans text-[#262626]"
          >
            Promotions & Ads
          </Link>
          <FaChevronRight size={20} />
          <span className="text-sm sm:text-base font-normal font-sans text-[#040421]">
            Create Ads
          </span>
        </div>

        <p className="font-semibold text-2xl sm:text-3xl font-sans mb-6">
          Create Ads
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Side */}
            <div className="flex flex-col gap-y-8">
              <div>
                <label className="text-sm sm:text-base text-[#111111]">
                  Ad Headline:
                </label>
                <TextField
                  fullWidth
                  name="adsHeadline"
                  value={formData.adsHeadline}
                  onChange={handleChange}
                  required
                  className="mb-4"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm sm:text-base text-[#111111]">
                    Start Date:
                  </label>
                  <TextField
                    fullWidth
                    type="date"
                    name="startDate"
                    InputLabelProps={{ shrink: true }}
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm sm:text-base text-[#111111]">
                    End Date:
                  </label>
                  <TextField
                    fullWidth
                    type="date"
                    name="endDate"
                    InputLabelProps={{ shrink: true }}
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="">
                <div>
                <label className="text-sm sm:text-base text-[#111111] mt-4">
                  Budget:
                </label>
                </div>
                <TextField
                  fullWidth
                  sx={{width: "50%"}}
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-y-8">
              <div>
                <label className="text-sm sm:text-base text-[#111111]">
                  Maximum Redemptions:
                </label>
                <TextField
                  fullWidth
                  name="maximumRedemptions"
                  value={formData.maximumRedemptions}
                  onChange={handleChange}
                  required
                  placeholder="e.g 100 redemptions per Ad"
                  className="mb-4"
                />
              </div>

              <div>
                <label className="text-sm sm:text-base text-[#111111]">
                  Maximum redeemer per user:
                </label>
                <TextField
                  fullWidth
                  name="redeemerPerUser"
                  placeholder="e.g Limit to 1 use per user"
                  value={formData.redeemerPerUser}
                  onChange={handleChange}
                  required
                  className="mb-4"
                />
              </div>

              <div>
                <label className="text-sm sm:text-base text-[#111111]">
                  Targeted Url:
                </label>
                <TextField
                  fullWidth
                  name="targetedUrl"
                  placeholder="http://"
                  type="url"
                  value={formData.targetedUrl}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end mt-6 gap-4">
            <Link to="/seller/promotions">
              <Button
                variant="contained"
                sx={{
                  background: "#F2F2F2",
                  color: "#14199C",
                  borderRadius: "12px",
                }}
                type="button"
              >
                Cancel
              </Button>
            </Link>
            <Link to={"/seller/promotions/ads-summary"}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  background: "#14199C",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                }}
              >
                Next
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAdsPage;
