import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

const CreatePromotion = () => {
  const [formData, setFormData] = useState({
    promotionName: "",
    promotionType: "",
    startDate: "",
    endDate: "",
    promoCode: "",
    discountValue: "",
    usageLimit: "",
    productType: "",
    promotionDescription: "",
    productCategory: "",
  });

  const promotionTypes = ["Percentage", "Fixed Amount", "Buy One Get One"];
  const productCategories = [
    "Electronics",
    "Fashion",
    "Health & Beauty",
    "Home & Living",
  ];

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
            Create Promotion
          </span>
        </div>

        <p className="font-semibold text-[32px] font-sans mb-10">
          Create Promotion
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Left Side */}
            <div style={{ flex: 1 }}>
              <label className="text-base text-[#111111]">
                Promotion Name:
              </label>
              <TextField
                fullWidth
                name="promotionName"
                value={formData.promotionName}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px", height: "48px" }}
              />

              <label className="text-base text-[#111111]">
                Promotion Type:
              </label>
              <TextField
                fullWidth
                select
                name="promotionType"
                value={formData.promotionType}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              >
                {promotionTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>

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
                  <label>Discount Value</label>
                  <TextField
                    fullWidth
                    name="discountValue"
                    value={formData.discountValue}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "15px" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="text-base text-[#111111]">
                    Promo Code:
                  </label>
                  <TextField
                    fullWidth
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "15px" }}
                  />
                </div>
              </div>
              <label className="text-base text-[#111111]">Usage Limit:</label>
              <TextField
                fullWidth
                name="usageLimit"
                value={formData.usageLimit}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label className="text-base text-[#111111]">Product Type:</label>
              <TextField
                fullWidth
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              />

              <label className="text-base text-[#111111] mb-2">
                Promotion Description:
              </label>
              <TextField
                fullWidth
                multiline
                rows={9}
                name="promotionDescription"
                value={formData.promotionDescription || ""}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              />

              <label className="text-base text-[#111111]">
                Product Category:
              </label>
              <TextField
                fullWidth
                select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                required
                style={{ marginBottom: "15px" }}
              >
                {productCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
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
            <Link to={"/seller/promotions/promotion-summary"}>
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
};

export default CreatePromotion;
