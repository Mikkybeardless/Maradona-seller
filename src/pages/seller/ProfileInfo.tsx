import { Box, Typography } from "@mui/material";

import { RiShieldKeyholeLine } from "react-icons/ri";

import { CiLaptop, CiMobile3 } from "react-icons/ci";
import CopyableText from "../../components/CopyableText";
import PasswordBox from "../../components/PasswordBox";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";

function ProfileInfo() {
  return (
    <div className="p-6 bg-white ">
      <div className="flex items-center gap-6">
        <ProfilePictureUpload />
        <div className="space-y-2">
          <Typography fontWeight={600}>RoseMary Sunday</Typography>

          <Typography>
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
          <Typography color="textSecondary">Online - Lagos, Nigeria</Typography>
        </div>
      </div>
      <ProfilePassword />
    </div>
  );
}

function ProfilePassword() {
  return (
    <div className="my-[30px]">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        sx={{ background: "#F7F7F7", padding: "20px" }}
      >
        {/* Left Side - Text */}
        <Box>
          <Typography fontSize="16px" color="#150A13">
            Two-Factor Authentication
          </Typography>
          <Typography fontSize="12px" color="#5C4D58">
            Enhance your account security with an extra layer of protection.
            This ensures only you can access your account.
          </Typography>
        </Box>

        {/* Right Side - Icon */}
        <RiShieldKeyholeLine size={24} color="#14199C" />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <PasswordBox label="Old Password" />
        <PasswordBox label="New Password" />
        <PasswordBox label="Confirm New Password" />
      </Box>
      <Box>
        <p className="font-[900] font-sans text-base text-[#1E1A1C] mb-[11px]">
          Log in session & Devices
        </p>
        <p className="mb-[13px] text-xs text-[#5C4D58]">
          Where you’re signed in
        </p>
        <LoginSectionCom device="mobile" session={1} />
        <LoginSectionCom device="laptop" session={2} />
        <LoginSectionCom device="laptop" session={3} />
        <LoginSectionCom device="mobile" session={1} />
        <p className="font-sans font-[500] text-xs text-[#0000FF] mt-[31px]">
          See all...
        </p>
      </Box>
    </div>
  );
}

function LoginSectionCom({
  device,
  session,
}: {
  device: string;
  session: number;
}) {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      alignContent="center"
      sx={{ background: "#ffffff", marginBottom: "8px" }}
    >
      {" "}
      {device === "laptop" ? <CiLaptop size={24} /> : <CiMobile3 size={24} />}
      <Box sx={{ marginLeft: "10px" }}>
        <Typography fontSize="16px" color="#5C4D58" fontWeight={500}>
          {session} sessions on{" "}
          {device === "laptop" ? "2  Windows computer(s)" : "Android phone"}
        </Typography>
        <Typography fontSize="12px" color="#5C4D58" fontWeight={400}>
          {device === "laptop" ? "Windows, Windows" : "Techno SPARK 10 Pro"}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileInfo;
