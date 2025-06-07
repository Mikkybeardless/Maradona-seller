import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogo from "../assets/facebook-logo.png";
import GoogleLogo from "../assets/google-icon.svg";
import { useSelector, useDispatch } from 'react-redux';
import {loginUser} from '../redux/slices/userSlice'
import { AppDispatch } from "../redux/store";

interface SignUpProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ setSignUp }: SignUpProps) {
  const [togglePasswordShow, setTogglePasswordShow] = useState(false);

  const [loginFormData, setLoginFormData] = useState({
    email:"mhyelavala@gmail.com",
    password: "mvala1234",
    login_by: "email",
    user_type: "seller"
  })
  const navigate = useNavigate();

  
  const dispatch = useDispatch<AppDispatch>();
  const seller = useSelector((state: any) => state.users.users);

  function handleLogin() {
    dispatch(loginUser(loginFormData));
  }

  // useEffect(()=>{
  //   dispatch(loginUser(loginFormData))
  // }, [dispatch])

  function handleInputChange(e:any){
    let inputField = e.target.name
    let inputValue = e.target.value
    setLoginFormData({
      ...loginFormData,
      [inputField]: inputValue
    })
  }

  function goToHome() {
    navigate("/");
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
        <label className="text-sm">Email or Phone</label>
        <input
          className="p-3 px-4 rounded-[8px] border-primaryBorder border-[1px] outline-none bg-white"
          type="email"
          placeholder="Email or Phone"
          name="email"
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full flex flex-col gap-y-1.5 mt-4">
        <label className="text-sm">Password</label>
        <div className="w-full flex gap-x-2 items-center px-4 py-3 rounded-[8px] border-primaryBorder border-[1px] bg-white">
          <input
            className="outline-none w-[95%]"
            type={!togglePasswordShow ? "password" : "text"}
            placeholder="Password"
            name="password"
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
        className="w-full py-3 rounded-[8px] mt-8 text-white bg-defaultOrange hover:bg-defaultOrangeHover text-sm"
      >
        Login
      </button>

      <div className="mt-8 relative flex items-center justify-center">
        <p className="text-center bg-[#F5F5F5] px-3 z-10">Or Sign in with</p>
        <div className="h-[1.6px] w-full bg-[#DED9DD] absolute -z-0"></div>
      </div>

      <div className="flex gap-x-4 items-center justify-center mt-8">
        <button
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
          <img className="w-[24px] h-[24px]" src={FacebookLogo} alt="google" />
          <span>Facebook</span>
        </button>
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
