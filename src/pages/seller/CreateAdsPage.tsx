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
    <div className="h-screen overflow-auto">
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <div className="flex gap-x-4 items-center mb-12">
          <Link
            to="/seller/promotions"
            className="text-[15px] font-normal font-sans text-[#262626]"
          >
            Promotions & Ads
          </Link>
          <FaChevronRight size={20} />
          <span className="text-sm font-normal font-sans text-[#040421]">
            Create Ads
          </span>
        </div>

        <p className="font-semibold text-[32px] font-sans mb-10">Create Ads</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Left Side */}
            <div style={{ flex: 1 }}>
              <label className="text-base text-[#111111]">Ad Headline:</label>
              <TextField
                fullWidth
                name="adsHeadline"
                value={formData.adsHeadline}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px", height: "48px" }}
              />

              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ flex: 1 }}>
                  <label className="text-base text-[#111111]">
                    Start Date:
                  </label>
                  <TextField
                    fullWidth
                    type="date"
                    name="endDate"
                    InputLabelProps={{ shrink: true }}
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    sx={{
                      marginBottom: "15px",
                      "& input": {
                        borderColor: "#B0B0B0", // Input border color
                      },
                      "& fieldset": {
                        borderColor: "#B0B0B0", // Default border
                      },
                      "&:hover fieldset": {
                        borderColor: "#B0B0B0", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#B0B0B0", // Border color when focused
                      },
                      "& input::-webkit-calendar-picker-indicator": {
                        filter:
                          "invert(15%) sepia(93%) saturate(3345%) hue-rotate(227deg) brightness(89%) contrast(95%)",
                      },
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="text-base text-[#111111]">End Date:</label>
                  <TextField
                    fullWidth
                    type="date"
                    name="endDate"
                    InputLabelProps={{ shrink: true }}
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    sx={{
                      marginBottom: "15px",
                      "& input": {
                        borderColor: "#B0B0B0", // Input border color
                      },
                      "& fieldset": {
                        borderColor: "#B0B0B0", // Default border
                      },
                      "&:hover fieldset": {
                        borderColor: "#B0B0B0", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#B0B0B0", // Border color when focused
                      },
                      "& input::-webkit-calendar-picker-indicator": {
                        filter:
                          "invert(15%) sepia(93%) saturate(3345%) hue-rotate(227deg) brightness(89%) contrast(95%)",
                      },
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ flex: 1 }}>
                  <label>Budget</label>
                  <TextField
                    fullWidth
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "15px" }}
                  />
                </div>
                <div style={{ flex: 1 }}></div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <label className="text-base text-[#111111]">
                Maximum Redemptions:
              </label>
              <TextField
                fullWidth
                name="maximumRedemptions"
                value={formData.maximumRedemptions}
                onChange={handleChange}
                required
                placeholder="e.g 100 redemptions per Ad"
                style={{ marginBottom: "15px" }}
              />

              <label className="text-base text-[#111111] mb-2">
                Maximum redeemer per user:
              </label>
              <TextField
                fullWidth
                name="redeemerPerUser"
                placeholder="e.g Limit to 1 use per user"
                value={formData.redeemerPerUser}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              />

              <label className="text-base text-[#111111]">Targeted Url</label>
              <TextField
                fullWidth
                name="targetedUrl"
                placeholder="http://"
                type="url"
                value={formData.targetedUrl}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              />
            </div>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <Link to="/seller/promotions">
              <Button
                variant="contained"
                sx={{
                  background: "#F2F2F2",
                  color: "#14199C",
                  borderRadius: "12px",
                  marginRight: "10px",
                }}
                type="submit"
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
                  borderRadius: "12px",
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
