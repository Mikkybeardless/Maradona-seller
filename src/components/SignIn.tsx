import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogo from "../assets/facebook-logo.png";
import GoogleLogo from "../assets/google-icon.svg";
import authService from "../api/services/auth.service";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/slices/authSlice";
import Cookies from "js-cookie";
import { Spinner } from "./common/spinner";

interface SignUpProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ setSignUp }: SignUpProps) {
  const [togglePasswordShow, setTogglePasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    const { email, password } = loginFormData;
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    try {
      const response = await authService.login(loginFormData);

      if (response.status == 200) {
        const data = response.data;
        Cookies.set("token", data.token);
        dispatch(login(data.user));
        toast.success("Login successful");
        // Redirect
        return setTimeout(() => {
          navigate("/seller/dashboard");
        }, 3000);
      }
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error("Login error:", err.status);
      toast.error("Login failed");
      setError(() => {
        switch (err.status) {
          case 401:
            return "Invalid credentials";
          case 403:
            return "You are not authorized to access this page";
          case 404:
            return "User not found";
          default:
            return "An error occurred. Please try again.";
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setError("");
    let inputField = e.target.name;
    let inputValue = e.target.value;
    setLoginFormData({
      ...loginFormData,
      [inputField]: inputValue,
    });
  }
  function handlePasswordShow() {
    setTogglePasswordShow(!togglePasswordShow);
  }

  return (
    <div className="w-full md:w-[70%] flex flex-col py-10 px-4 pt-28 md:pt-0 md:px-0">
      <h1 className="text-xl md:text-2xl font-bold text-center">
        Welcome Back
      </h1>
      <p className="text-xs text-[#585858] mt-2.5 text-center mb-10 md:mb-10">
        Shop the quality and affordable items in the comfort of your home.
      </p>

      <div className="w-full flex flex-col gap-y-1.5 mt-5">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          className="p-3 px-4 rounded-[8px] border-primaryBorder border-[1px] outline-none bg-white"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full flex flex-col gap-y-1.5 mt-4">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <div className="w-full flex gap-x-2 items-center px-4 py-3 rounded-[8px] border-primaryBorder border-[1px] bg-white">
          <input
            className="outline-none w-[95%]"
            type={!togglePasswordShow ? "password" : "text"}
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
          {!togglePasswordShow ? (
            <FaRegEye
              onClick={handlePasswordShow}
              size={20}
              className="cursor-pointer flex-shrink-0"
            />
          ) : (
            <FaRegEyeSlash
              onClick={handlePasswordShow}
              className="cursor-pointer flex-shrink-0"
              size={20}
            />
          )}
        </div>
      </div>

      <Link
        to="/reset-password"
        className="text-[#585858] text-sm ml-auto mt-4 hover:underline"
      >
        Forgot password?
      </Link>

      <button
        onClick={handleLogin}
        className="w-full py-3 flex items-center justify-center rounded-[8px] mt-8 text-white bg-defaultOrange hover:bg-defaultOrangeHover text-sm"
      >
        {isLoading ? <Spinner /> : "Login"}
      </button>
      {error && (
        <>
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        </>
      )}

      {/* <div className="mt-8 relative flex items-center justify-center">
        <p className="text-center bg-[#F5F5F5] px-3 z-10">Or Sign in with</p>
        <div className="h-[1.6px] w-full bg-[#DED9DD] absolute -z-0"></div>
      </div> */}

      <div className="flex gap-x-4 items-center justify-center mt-8">
        {/* <button
          className="flex justify-center items-center h-[48px] px-10 gap-x-3 rounded-[8px] border border-[#6D6D6D] hover:bg-black/5"
          type="button"
        >
          <img className="w-[39px] h-[39px]" src={GoogleLogo} alt="google" />
          <span>Google</span>
        </button>
        <button
          className="flex justify-center items-center h-[48px] px-10 gap-x-3 rounded-[8px] border border-[#6D6D6D] hover:bg-black/5"
          type="button"
        >
          <img
            className="w-[24px] h-[24px]"
            src={FacebookLogo}
            alt="facebook"
          />
          <span>Facebook</span>
        </button> */}
        <Link className="hover:underline" to="/">
          Home Page
        </Link>
      </div>

      <p className="text-[#6D6D6D] text-center mt-5">
        Don't have an account?{" "}
        <span
          onClick={() => setSignUp(true)}
          className="hover:underline cursor-pointer font-medium text-black"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
