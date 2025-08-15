import { Box, Typography } from "@mui/material";
import { CiLaptop, CiMobile3 } from "react-icons/ci";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { PiPencilSimpleBold } from "react-icons/pi";
import CopyableText from "../../components/common/CopyableText";
import PasswordBox from "../../components/common/PasswordBox";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";
import { useEffect, useState } from "react";
import profileService from "../../api/services/profile.service";
import { LoadingSkeleton } from "../../components/common/skeleton";

function ProfileInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
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
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);

        const response = await profileService.getShopProfile();
        if (response.status === 200) {
          console.log("User profile data:", response.data);
          setUserData(response.data.user);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <div className="p-4 md:p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
        <ProfilePictureUpload />
        <div className="text-center md:text-left space-y-1 md:space-y-2">
          <Typography fontWeight={600} fontSize={{ xs: 14, md: 16 }}>
            {userData.name}
          </Typography>

          <Typography
            className="flex justify-between"
            fontSize={{ xs: 12, md: 14 }}
          >
            Seller{" "}
            <span>
              <CopyableText
                textColor="#5C4D58"
                text={String(userData.seller_profile.id)}
                variant={undefined}
              />
            </span>
          </Typography>

          <CopyableText
            textColor=""
            variant={undefined}
            text={userData.email}
          />

          {/* Location (Not Copyable) */}
          <Typography fontSize={{ xs: 12, md: 14 }} color="textSecondary">
            Online - Lagos, Nigeria
          </Typography>
        </div>
      </div>
      {isProfileEdit ? (
        <ProfilePassword />
      ) : (
        <div>
          {/* Personal Information  */}
          <div className="mt-8 flex flex-col gap-y-8">
            <div>
              <p className="text-[#5C4D58] text-sm mb-2">Name:</p>
              <p className="font-medium text-lg">{userData.name}</p>
            </div>
            <div>
              <p className="text-[#5C4D58] text-sm mb-2">Email:</p>
              <p className="font-medium text-lg">{userData.email}</p>
            </div>
            <div>
              <p className="text-[#5C4D58] text-sm mb-2">Phone No:</p>
              <p className="font-medium text-lg">
                {userData.seller_profile.phone || "N/A"}
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:mt-20 mt-10 mb-10">
            <button
              onClick={() => setIsProfileEdit(true)}
              className="bg-[#14199C] md:w-3/4 w-4/5 flex items-center justify-center p-4 text-white text-xl rounded-lg"
            >
              <PiPencilSimpleBold />{" "}
              <span className="ml-2 text-sm font-light">Edit Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfilePassword() {
  const [oldPassword, setOldPassword] = useState("old password");
  const [passwordData, setPasswordData] = useState({
    new: "",
    confirm: "",
  });

  const handlePasswordChange = (
    newPassword: string,
    type: "new" | "confirm"
  ) => {
    // Handle password change logic here
    console.log("Password:", newPassword);
    setPasswordData((prev) => ({ ...prev, [type]: newPassword }));
  };

  const handleOldPasswordChange = (newPassword: string) => {
    // Handle password change logic here
    console.log("New Password:", newPassword);
    setOldPassword(newPassword);
  };
  return (
    <div className="mt-6 md:my-[30px]">
      <Box className="p-4 md:p-6 bg-[#F7F7F7] flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side - Text */}
        <Box className="flex-1">
          <Typography fontSize={{ xs: 14, md: 16 }} color="#150A13">
            Two-Factor Authentication
          </Typography>
          <Typography fontSize={{ xs: 10, md: 12 }} color="#5C4D58">
            Enhance your account security with an extra layer of protection.
            This ensures only you can access your account.
          </Typography>
        </Box>

        {/* Right Side - Icon */}
        <RiShieldKeyholeLine
          size={24}
          color="#14199C"
          className="mt-2 md:mt-0"
        />
      </Box>

      {/* Password Input Fields */}
      <Box className="mt-4 flex flex-col  space-y-4">
        <PasswordBox
          label="Old Password"
          placeholder="Enter old password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
        <PasswordBox
          label="New Password"
          placeholder="Enter new password"
          value={passwordData.new}
          onChange={(val) => handlePasswordChange(val, "new")}
        />
        <PasswordBox
          label="Confirm New Password"
          placeholder="Confirm new password"
          value={passwordData.confirm}
          onChange={(val) => handlePasswordChange(val, "confirm")}
        />
      </Box>

      <Box className="mt-6">
        <p className="font-bold text-base text-[#1E1A1C] mb-2">
          Log in session & Devices
        </p>
        <p className="mb-4 text-xs text-[#5C4D58]">Where you’re signed in</p>

        {/* Login Sessions (Stacking on Mobile) */}
        <div className="flex flex-col space-y-3 ">
          <LoginSectionCom device="mobile" session={1} />
          <LoginSectionCom device="laptop" session={2} />
          <LoginSectionCom device="laptop" session={3} />
          <LoginSectionCom device="mobile" session={1} />
        </div>

        <p className="font-medium text-xs text-[#0000FF] mt-6 cursor-pointer">
          See all...
        </p>
      </Box>
    </div>
  );
}

type LoginSectionComProps = {
  device: "laptop" | "mobile";
  session: number;
};

function LoginSectionCom({ device, session }: LoginSectionComProps) {
  return (
    <Box className="flex items-start bg-white p-3 rounded-md shadow-sm">
      {device === "laptop" ? <CiLaptop size={18} /> : <CiMobile3 size={18} />}
      <Box className="ml-3">
        <Typography
          fontSize={{ xs: 10, md: 12 }}
          color="#5C4D58"
          fontWeight={500}
        >
          {session} sessions on{" "}
          {device === "laptop" ? "2 Windows computer(s)" : "Android phone"}
        </Typography>
        <Typography
          fontSize={{ xs: 8, md: 10 }}
          color="#5C4D58"
          fontWeight={400}
        >
          {device === "laptop" ? "Windows, Windows" : "Techno SPARK 10 Pro"}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileInfo;
