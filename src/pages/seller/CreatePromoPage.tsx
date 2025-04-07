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
    <div className="h-screen overflow-auto md:pb-10 pb-36 ">
      {/* Top Section with Search Bar */}
      <div className="w-full py-3.5 px-6 md:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Container */}
      <div className="px-6 md:px-20 mx-auto py-10">
        {/* Breadcrumb */}
        <div className="flex gap-x-4 items-center mb-6 text-sm">
          <Link to="/seller/promotions" className="text-[#262626]">
            Promotions & Ads
          </Link>
          <FaChevronRight size={16} />
          <span className="text-[#040421]">Create Promotion</span>
        </div>

        <p className="font-semibold text-2xl md:text-3xl mb-6">
          Create Promotion
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col space-y-4">
              <label className="text-base text-[#111111]">
                Promotion Name:
              </label>
              <TextField
                fullWidth
                name="promotionName"
                value={formData.promotionName}
                onChange={handleChange}
                required
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
              >
                {promotionTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-base text-[#111111]">
                    Start Date:
                  </label>
                  <TextField
                    fullWidth
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-base text-[#111111]">End Date:</label>
                  <TextField
                    fullWidth
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-base text-[#111111]">
                    Promo Code:
                  </label>
                  <TextField
                    fullWidth
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-base text-[#111111]">
                    Discount Value:
                  </label>
                  <TextField
                    fullWidth
                    name="discountValue"
                    value={formData.discountValue}
                    onChange={handleChange}
                    required
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
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-4">
              <label className="text-base text-[#111111]">Product Type:</label>
              <TextField
                fullWidth
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                required
              />

              <label className="text-base text-[#111111]">
                Promotion Description:
              </label>
              <TextField
                fullWidth
                multiline
                rows={5}
                name="promotionDescription"
                value={formData.promotionDescription || ""}
                onChange={handleChange}
                required
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
              >
                {productCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <Link to="/seller/promotions">
              <Button
                variant="contained"
                sx={{
                  background: "#F2F2F2",
                  color: "#14199C",
                  borderRadius: "12px",
                }}
              >
                Cancel
              </Button>
            </Link>
            <Link to="/seller/promotions/promotion-summary">
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
