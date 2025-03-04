import { Box, Typography } from "@mui/material";
import { CiLaptop, CiMobile3 } from "react-icons/ci";
import { RiShieldKeyholeLine } from "react-icons/ri";
import CopyableText from "../../components/CopyableText";
import PasswordBox from "../../components/PasswordBox";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";

function ProfileInfo() {
  return (
    <div className="p-4 md:p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
        <ProfilePictureUpload />
        <div className="text-center md:text-left space-y-1 md:space-y-2">
          <Typography fontWeight={600} fontSize={{ xs: 14, md: 16 }}>
            RoseMary Sunday
          </Typography>

          <Typography fontSize={{ xs: 12, md: 14 }}>
            Seller{" "}
            <span>
              <CopyableText textColor="#5C4D58" variant="span" text="DS1234M" />
            </span>
          </Typography>

          <CopyableText
            textColor=""
            variant=""
            text="rosiesunday20.aj@gmail.com"
          />

          {/* Location (Not Copyable) */}
          <Typography fontSize={{ xs: 12, md: 14 }} color="textSecondary">
            Online - Lagos, Nigeria
          </Typography>
        </div>
      </div>
      <ProfilePassword />
    </div>
  );
}

function ProfilePassword() {
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
      <Box className="mt-4 flex flex-col space-y-4">
        <PasswordBox label="Old Password" className="w-full" />
        <PasswordBox label="New Password" className="w-full" />
        <PasswordBox label="Confirm New Password" className="w-full" />
      </Box>

      <Box className="mt-6">
        <p className="font-bold text-base text-[#1E1A1C] mb-2">
          Log in session & Devices
        </p>
        <p className="mb-4 text-xs text-[#5C4D58]">Where you’re signed in</p>

        {/* Login Sessions (Stacking on Mobile) */}
        <div className="flex flex-col space-y-3 md:grid md:grid-cols-2 md:gap-4">
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

function LoginSectionCom({ device, session }) {
  return (
    <Box className="flex items-start bg-white p-3 rounded-md shadow-sm">
      {device === "laptop" ? <CiLaptop size={24} /> : <CiMobile3 size={24} />}
      <Box className="ml-3">
        <Typography
          fontSize={{ xs: 14, md: 16 }}
          color="#5C4D58"
          fontWeight={500}
        >
          {session} sessions on{" "}
          {device === "laptop" ? "2 Windows computer(s)" : "Android phone"}
        </Typography>
        <Typography
          fontSize={{ xs: 10, md: 12 }}
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
