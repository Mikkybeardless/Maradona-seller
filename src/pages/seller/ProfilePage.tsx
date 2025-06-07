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
import { useState } from "react";
import { BiMessageAltDots } from "react-icons/bi";
import { FaCircle } from "react-icons/fa6";
import {
  MdClose,
  MdOutlineModeEdit,
  MdVerified,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import CopyableText from "../../components/CopyableText";
import PasswordBox from "../../components/PasswordBox";
import ProfilePictureUpload from "../../components/ProfilePictureUpload";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="h-screen overflow-auto">
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto mt-5">
        <div className="flex gap-3 items-center">
          <div className="flex">
            <div className="rounded-full border-[#E9C505] border-[4px] w-fit">
              <ProfilePictureUpload />
            </div>
            <MdVerified color="#E9C505" size={26} />
          </div>
          <div className="flex flex-col justify-around h-[90px]">
            <Typography fontWeight={600} size={"20px"}>
              RoseMary Sunday
            </Typography>

            <CopyableText
              textColor="#150A13"
              text="rosiesunday20.aj@gmail.com"
            />

            <p className="flex items-center gap-2 text-[#5C4D58]">
              Seller{" "}
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

      <div className="overflow-auto max-h-[calc(100vh-100px)]">
        <div className="border w-[366px] rounded-lg ml-[5%] mt-11 mb-3">
          <p className="font-medium text-xl text-[#150A13] w-[90%] mx-auto my-3">
            Basic info
          </p>
          <Divider />
          <div className="flex justify-between w-[90%] mx-auto my-3">
            <p className="text-sm text-[#5C4D58]">Seller ID:</p>
            <p className="text-sm text-[#150A13]">DS120M</p>
          </div>
          <div className="flex justify-between w-[90%] mx-auto my-3">
            <p className="text-sm text-[#5C4D58]">Phone:</p>
            <CopyableText textColor="#150A13" text="07056440321" />
          </div>
          <div className="flex justify-between w-[90%] mx-auto my-3">
            <p className="text-sm text-[#5C4D58]">Address:</p>
            <p className="text-sm text-[#150A13]">Lagos, Nigeria</p>
          </div>
        </div>
        <div className="border w-[366px] rounded-lg ml-[5%] mt-11 mb-6 overflow-auto">
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
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
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
            <TextField fullWidth label="First Name" defaultValue="RoseMary" />
            <TextField fullWidth label="Last Name" defaultValue="Sunday" />
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="Email"
              defaultValue="rosiesunday20.aj@gmail.com"
            />
            <TextField fullWidth label="Phone" defaultValue="07056440321" />
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField fullWidth label="Seller ID" defaultValue="DS120M" />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              defaultValue="password123"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
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
              onClick={handleClose}
              variant="contained"
              sx={{
                background: "#E65800",
                fontSize: "16px",
                textTransform: "capitalize",
              }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
