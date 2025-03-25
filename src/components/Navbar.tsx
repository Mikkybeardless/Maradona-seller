import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  TextField,
  InputAdornment,
  Divider,
  Select,
  MenuItem
} from "@mui/material";
import {
  FaBars,
  FaRegBell,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    function goToLogin() {
        navigate("/login");
      }
    
      function goToHome() {
        navigate("/");
      }

      function goToHelp() {
        navigate("/contact");
      }

  return (
    <>
        <nav className="mt-4 flex justify-around items-center py-2 w-full px-3 sm:px-4 md:px-[8%]">
          {/* Left side - Logo and Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton onClick={() => setMobileOpen(true)}>
                <FaBars className="w-5 h-5" />
              </IconButton>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-4 lg:gap-6">
              <a
                onClick={() => goToHome()}
                className="hover:text-defaultOrange text-xs sm:text-sm cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-defaultOrange text-xs sm:text-sm cursor-pointer"
              >
                Our Services
              </a>
              <a
                href="#featured-categories"
                className="hover:text-defaultOrange text-xs sm:text-sm cursor-pointer"
              >
                Featured Categories
              </a>
              <a
                href="#testimonials"
                className="hover:text-defaultOrange text-xs sm:text-sm cursor-pointer"
              >
                Testimonials
              </a>
              <a
                onClick={() => goToHelp()}
                className="hover:text-defaultOrange text-xs sm:text-sm cursor-pointer"
              >
                Help
              </a>
            </div>
          </div>

          {/* Right side - Icons & Buttons */}
          <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-4 items-center">
            <FaRegUser className="w-4 h-4 cursor-pointer hover:text-defaultOrange" />
            <FaRegHeart className="w-4 h-4 cursor-pointer hover:text-defaultOrange" />
            <FaRegBell className="w-4 h-4 cursor-pointer hover:text-defaultOrange" />
            <GrCart className="w-4 h-4 cursor-pointer hover:text-defaultOrange" />

            {/* Desktop Login/Register Buttons (Hidden on small screens) */}
            <div className="hidden md:flex gap-3 lg:gap-4">
              <Button
                onClick={() => goToLogin()}
                variant="contained"
                sx={{
                  background: "#E65800",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: 700,
                  height: "35px",
                  borderRadius: "6px",
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#14199C",
                  color: "#14199C",
                  fontSize: "12px",
                  fontWeight: 700,
                  height: "35px",
                  borderRadius: "6px",
                }}
              >
                Register
              </Button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            <div className="w-56 p-4 flex flex-col gap-4">
              <img className="h-[40px] w-auto" src={logo} alt="Logo" />

              {/* Mobile Navigation Links */}
              <a href="#home" className="hover:text-defaultOrange text-sm">
                Home
              </a>
              <a href="#about" className="hover:text-defaultOrange text-sm">
                Our Services
              </a>
              <a href="#featured-categories" className="hover:text-defaultOrange text-xs sm:text-sm">
                Featured Categories
              </a>
              <a
                href="#testimonials"
                className="hover:text-defaultOrange text-sm"
              >
                Testimonials
              </a>
              <a href="#help" className="hover:text-defaultOrange text-sm">
                Help
              </a>

              {/* Mobile Login/Register Buttons */}
              <Button
                variant="contained"
                sx={{
                  background: "#E65800",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 700,
                  height: "38px",
                  borderRadius: "8px",
                  width: "100%",
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#14199C",
                  color: "#14199C",
                  fontSize: "14px",
                  fontWeight: 700,
                  height: "38px",
                  borderRadius: "8px",
                  width: "100%",
                }}
              >
                Register
              </Button>
            </div>
          </Drawer>
        </nav>
        <header className="flex items-center gap-x-56 mt-5 bg-white px-[8%] py-2">
            <img
                className="h-[60px] w-auto hidden md:flex"
                src={logo}
                alt="Logo"
            />

            <div className="flex items-center text-center w-full max-w-lg border border-gray-300 rounded-lg overflow-hidden px-3 py-1">
                <TextField
                variant="standard"
                placeholder="property type, location, price range"
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                    <InputAdornment position="start">
                        <CiSearch className="text-gray-400" />
                    </InputAdornment>
                    ),
                }}
                className="flex-1"
                />
                <Divider orientation="vertical" flexItem />
                <Select
                defaultValue="Cars"
                variant="standard"
                disableUnderline
                className="ml-2 text-gray-600"
                >
                <MenuItem value="Cars">Cars</MenuItem>
                <MenuItem value="Houses">Houses</MenuItem>
                <MenuItem value="Lands">Lands</MenuItem>
                </Select>
            </div>

            {/* <Link
                to="/seller/dashboard"
                className="rounded-[8px] px-3 py-2.5 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
            >
                Become a seller
            </Link> */}
        </header>
    </>
  );
}
