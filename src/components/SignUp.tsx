import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FacebookLogo from "../assets/facebook-logo.png";
import GoogleLogo from "../assets/google-icon.svg";
import { toast } from "react-toastify";
import authService from "../api/services/auth.service";
import { Spinner } from "./common/spinner";

interface SignUpProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp({ setSignUp }: SignUpProps) {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    // shop_name: "",
    // address: "",
  };
  const [createAccountFormData, setCreateAccountFormData] =
    useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [togglePasswordShow, setTogglePasswordShow] = useState({
    signUp1: false,
    signUp2: false,
  });
  const navigate = useNavigate();

  function handleToggleSignUp1() {
    setTogglePasswordShow({
      signUp1: !togglePasswordShow.signUp1,
      signUp2: togglePasswordShow.signUp2,
    });
  }

  function handleToggleSignUp2() {
    setTogglePasswordShow({
      signUp1: togglePasswordShow.signUp1,
      signUp2: !togglePasswordShow.signUp2,
    });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateAccountFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCreateAccount = async () => {
    setIsLoading(true);
    const apiData = {
      ...createAccountFormData,
      type: "seller",
    };
    // Convert to FormData
    const formData = new FormData();
    for (const [key, value] of Object.entries(apiData)) {
      // Global empty check for all fields
      if (value.trim() === "") {
        const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
        toast.error(`The field "${capitalized}" cannot be empty.`);
        setIsLoading(false);
        return;
      }
      // Append the rest
      formData.append(key, value as string | Blob);
    }
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      setIsLoading(true);
      const response = await authService.register(formData);
      if (response.status === 201) {
        toast.success("SignUp successful!");
        setCreateAccountFormData(initialFormData);
        navigate("/login");
      }
    } catch (err: any) {
      toast.error(() => {
        switch (err.status) {
          case 500:
            return `Failed to sign up.\nCheck your internet connection`;
          default:
            return "An error occurred. Please try again.";
        }
      });
      console.error("Error adding product:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[70%] flex flex-col py-10 px-4 md:px-0">
      <h1 className="text-xl md:text-2xl font-bold text-center">
        Welcome to Distress Sale
      </h1>
      <p className="text-xs text-[#585858] mt-2.5 text-center">
        Shop the quality and affordable items in the comfort of your home.
      </p>

      {/* Input Fields */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col gap-y-1.5">
          <label htmlFor="name">Name:</label>
          <input
            className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            type="text"
            id="name"
            name="name"
            value={createAccountFormData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        {/* <div className="flex flex-col gap-y-1.5">
          <label>Last name:</label>
          <input
            className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            type="text"
            placeholder="Last name"
          />
        </div> */}
        <div className="flex flex-col gap-y-1.5">
          <label htmlFor="email">Email:</label>
          <input
            className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            type="email"
            id="email"
            name="email"
            value={createAccountFormData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        {/* <div className="flex flex-col gap-y-1.5">
          <label>Choose username:</label>
          <input
            className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            type="text"
            placeholder="Choose username"
          />
        </div> */}

        {/* Password Fields */}
        <div className="w-full flex flex-col gap-y-1.5">
          <label htmlFor="password">Password</label>
          <div className="w-full flex items-center gap-2 px-4 py-3 rounded-lg border border-[#DED9DD] bg-white">
            <input
              className="outline-none flex-1"
              type={!togglePasswordShow.signUp1 ? "password" : "text"}
              placeholder="Type"
              id="password"
              name="password"
              value={createAccountFormData.password}
              onChange={handleInputChange}
            />
            {!togglePasswordShow.signUp1 ? (
              <FaRegEye
                onClick={handleToggleSignUp1}
                size={20}
                className="cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                onClick={handleToggleSignUp1}
                size={20}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-1.5">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <div className="w-full flex items-center gap-2 px-4 py-3 rounded-lg border border-[#DED9DD] bg-white">
            <input
              className="outline-none flex-1"
              type={!togglePasswordShow.signUp2 ? "password" : "text"}
              placeholder="Type"
              id="password_confirmation"
              name="password_confirmation"
              value={createAccountFormData.password_confirmation}
              onChange={handleInputChange}
            />
            {!togglePasswordShow.signUp2 ? (
              <FaRegEye
                onClick={handleToggleSignUp2}
                size={20}
                className="cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                onClick={handleToggleSignUp2}
                size={20}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Country & State Selection */}
        <div className="flex flex-col gap-y-1.5">
          <label>Country:</label>
          <CountryDropdown
            classes="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            value={country}
            onChange={(val) => setCountry(val)}
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label>State/City:</label>
          <RegionDropdown
            classes="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
          />
        </div>

        {/* Address & Postal Code */}
        <div className="flex flex-col gap-y-1.5">
          <label>Street Address:</label>
          <input
            className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            type="text"
            placeholder="Type"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label>Postal Code:</label>
          <input
            className="p-3 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white"
            type="text"
            placeholder="Type"
          />
        </div>
      </div>

      {/* Create Account Button */}
      <button
        onClick={handleCreateAccount}
        className="w-full sm:w-[70%] mx-auto flex items-center justify-center py-3 rounded-lg mt-8 text-white bg-defaultOrange hover:bg-defaultOrangeHover transition"
      >
        {isLoading ? <Spinner /> : "Create account"}
      </button>

      {/* Divider */}
      <div className="mt-8 relative flex items-center justify-center">
        <p className="text-center bg-[#F5F5F5] px-3 z-10">Or Sign up with</p>
        <div className="h-[1.6px] w-full bg-[#DED9DD] absolute"></div>
      </div>

      {/* Social Sign-In Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
        <button
          className="flex justify-center items-center w-full sm:w-auto h-[48px] px-6 sm:px-10 gap-x-3 rounded-lg border border-[#6D6D6D] hover:bg-black/5 transition"
          type="button"
        >
          <img className="w-[39px] h-[39px]" src={GoogleLogo} alt="google" />
          <span>Google</span>
        </button>
        <button
          className="flex justify-center items-center w-full sm:w-auto h-[48px] px-6 sm:px-10 gap-x-3 rounded-lg border border-[#6D6D6D] hover:bg-black/5 transition"
          type="button"
        >
          <img
            className="w-[24px] h-[24px]"
            src={FacebookLogo}
            alt="facebook"
          />
          <span>Facebook</span>
        </button>
      </div>

      {/* Login Link */}
      <p className="text-[#6D6D6D] text-center mt-5">
        Already have an account?{" "}
        <span
          onClick={() => setSignUp(false)}
          className="hover:underline cursor-pointer font-medium text-black"
        >
          Log In
        </span>
      </p>

      {/* Bottom Spacing */}
      <div className="py-10"></div>
    </div>
  );
}
