import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BiMessageAltDots } from "react-icons/bi";
import { FaCircle } from "react-icons/fa6";
import {
  MdClose,
  MdOutlineModeEdit,
  MdVerified,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import CopyableText from "../../components/common/CopyableText";
import PasswordBox from "../../components/common/PasswordBox";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import profileService from "../../api/services/profile.service";
import { LoadingSkeleton } from "../../components/common/skeleton";
import { VscUnverified } from "react-icons/vsc";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingData, setEditingData] = useState({
    name: "",
    email: "",
    phone: "",
    shop_name: "",
  });
  const [userData, setUserData] = useState<ApiSeller>({
    id: 0,
    email: "",
    name: "",
    email_verified_at: "",
    type: "",
    created_at: "",
    updated_at: "",
    seller_profile: {
      id: 0,
      user_id: "",
      email: "",
      profile_pic: "",
      is_approved: false,
      phone: "",
      shop_name: "",
      created_at: "",
      updated_at: "",
    },
  });
  const [isUpdatingPic, setIsUpdatingPic] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);

        const response = await profileService.getShopProfile();
        if (response.status === 200) {
          console.log("User profile data:", response.data);
          setUserData(response.data.user);
          setEditingData({
            name: response.data.user.name,
            email: response.data.user.email,
            phone: response.data.user.seller_profile.phone,
            shop_name: response.data.user.seller_profile.shop_name,
          });
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(editingData)) {
      formData.append(key, value);
    }

    try {
      setIsUpdating(true);
      const response = await profileService.updateProfile(formData);
      if (response.status === 200) {
        console.log("Profile updated successfully:", response.data);
        setUserData((prevData) => ({
          ...prevData,
          ...response.data.user,
        }));
      } else if (response.status === 422) {
        toast.error(response.data.error.message);
      }
    } catch (error) {
      toast.error(
        "An error occurred while updating the profile, please try again."
      );
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <div className="h-screen overflow-auto">
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center md:w-[90%] mx-auto mt-5">
        <div className="flex md:gap-3 items-center px-1">
          <div className="flex">
            <div
              className={`rounded-full ${
                userData.seller_profile.is_approved
                  ? "border-green-500"
                  : "border-[#E9C505]"
              } ${isUpdatingPic ? "animate-pulse" : ""} border-[4px] w-fit`}
            >
              <ProfilePictureUpload
                onUpdating={setIsUpdatingPic}
                apiImage={userData.seller_profile.profile_pic}
              />
            </div>
            {userData.seller_profile.is_approved ? (
              <MdVerified color="#22c55e" size={26} />
            ) : (
              <VscUnverified color="#E9C505" size={26} />
            )}
          </div>
          <div className="flex flex-col justify-around h-[90px]">
            <Typography fontWeight={600} fontSize={"20px"}>
              {userData.name}
            </Typography>

            <CopyableText
              textColor="#150A13"
              variant="inherit"
              text={userData.email}
            />

            <p className="flex items-center gap-2 text-[#5C4D58]">
              Seller
              <span>
                <FaCircle size={6} color="#D9D9D9" />
              </span>
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="inline-flex gap-5">
          <Button
            variant="contained"
            sx={{
              background: "#E65800",
              gap: "3px",
              textTransform: "capitalize",
            }}
          >
            <BiMessageAltDots size={24} />
            Message
          </Button>
          <Button
            variant="outlined"
            sx={{ gap: "3px", fontSize: "16px", textTransform: "capitalize" }}
            onClick={handleOpen}
          >
            <MdOutlineModeEdit size={24} color="#14199C" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="overflow-auto flex flex-col md:flex-row max-h-[calc(100vh-100px)]">
        <div className="border w-[366px] rounded-lg ml-[2%] md:ml-[5%] mt-11 mb-3">
          <p className="font-medium text-xl text-[#150A13] w-[90%] mx-auto my-3">
            Basic info
          </p>
          <Divider />
          <div className="flex justify-between w-[90%] mx-auto my-3">
            <p className="text-sm text-[#5C4D58]">Seller ID:</p>
            <p className="text-sm text-[#150A13]">
              {userData.seller_profile.id}
            </p>
          </div>
          <div className="flex justify-between w-[90%] mx-auto my-3">
            <p className="text-sm text-[#5C4D58]">Phone:</p>
            <CopyableText
              textColor="#150A13"
              text={userData.seller_profile.phone ?? "N/A"}
              variant={undefined}
            />
          </div>
          <div className="flex justify-between w-[90%] mx-auto my-3">
            <p className="text-sm text-[#5C4D58]">Address:</p>
            <p className="text-sm text-[#150A13]">Lagos, Nigeria</p>
          </div>
        </div>
        <div className="border w-[366px] rounded-lg ml-[2%] md:ml-[5%] mt-11 mb-6 overflow-auto">
          <p className="font-medium text-xl text-[#150A13] w-[90%] mx-auto my-3">
            Password
          </p>
          <Divider />
          <div className="w-[90%] mx-auto my-3">
            <p className="text-base text-[#150A13]">Password</p>
            <div className="">
              <PasswordBox label={""} />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
          className="max-w-[500px] w-full"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <MdClose />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            Edit Profile
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              onChange={handleInputChange}
              defaultValue={editingData.name}
            />
            {/* <TextField fullWidth label="Last Name" defaultValue="Sunday" /> */}
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleInputChange}
              defaultValue={editingData.email}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              onChange={handleInputChange}
              defaultValue={editingData.phone}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {/* <TextField fullWidth label="Seller ID" defaultValue="DS120M" /> */}
            {/* <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              defaultValue={editingData.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="Shop Name"
              name="shop_name"
              onChange={handleInputChange}
              defaultValue={editingData.shop_name}
            />
            {/* <TextField fullWidth label="Last Name" defaultValue="Sunday" /> */}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              onClick={handleClose}
              sx={{ mr: 2, fontSize: "16px", textTransform: "capitalize" }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleUpdateProfile}
              variant="contained"
              sx={{
                background: "#E65800",
                fontSize: "16px",
                textTransform: "capitalize",
              }}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
