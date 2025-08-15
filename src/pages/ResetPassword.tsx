import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import Done from "../assets/done-animation.json";
import authService from "../api/services/auth.service";
import { toast } from "react-toastify";
import { Spinner } from "../components/common/spinner";
import axios from "axios";

export default function ResetPassword() {
  const [phase, setPhase] = useState(1);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time === 0) {
      setTime(60);
    }
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  const handleGetOtp = async () => {
    setIsLoading(true);
    if (!email) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.reqPasswordReset({ email });
      if (response.status == 200) {
        toast.success("Check your email for otp code");
        setPhase(2);
      }
    } catch (error: any) {
      console.error("Error sending password reset code:", error);

      if (error.response?.status === 404) {
        toast.error("Email not found");
      } else {
        toast.error("Error sending password reset code");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmReset = async () => {
    const { newPassword, confirmPassword } = passwordData;
    setIsLoading(true);
    if (!otp || !newPassword) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.doPassReset({
        email: email,
        otp,
        password: newPassword,
        password_confirmation: confirmPassword,
      });
      if (response.status == 200) {
        toast.success("Password reset successful");
        setPhase(4);
      }
    } catch (error: unknown) {
      console.error("Error sending password reset code:", error);
      const status =
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined;
      if (status === 404) {
        toast.error("Email not found");
      } else {
        toast.error("Error sending password reset code");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#F5F5F5] px-4">
      {phase === 1 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center p-6 sm:p-12 rounded-2xl bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Reset your password
          </h1>

          <p className="text-secondaryTextColor text-sm text-center mt-2.5 max-w-[90%]">
            Enter the email address you used to sign up and we&apos;ll send you
            instructions to reset your password
          </p>

          <div className="flex flex-col gap-y-1.5 mt-8 w-full">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="w-full rounded-lg p-3 border border-primaryBorder"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            onClick={handleGetOtp}
            className="mt-8 w-full flex items-center justify-center rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            {isLoading ? <Spinner /> : "Reset"}
          </button>
          {error && (
            <>
              <p className="text-red-500 text-sm mt-2">{error}</p>
            </>
          )}
        </div>
      ) : phase === 2 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center p-6 sm:p-12 rounded-2xl bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Enter OTP
          </h1>

          <p className="text-secondaryTextColor text-sm text-center mt-2.5 max-w-[90%]">
            Please check your mail, and enter the 4 digit code that was sent to
            <span className="italic font-medium"> rosemary@gmail.com</span>.
          </p>

          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="number"
            containerStyle="gap-x-5 w-full justify-center mt-7"
            inputStyle="reset-password border border-primaryBorder rounded-[15px] h-[50px] !w-[50px] flex-shrink-0"
            renderInput={(props) => <input {...props} />}
          />

          <p className="mt-5 text-sm">
            {time === 60 ? "1:00" : `0:${String(time).padStart(2, "0")}`}
          </p>

          <p className="text-secondaryTextColor text-sm text-center mt-5">
            Didn't get a code?
            <button
              onClick={handleGetOtp}
              className="font-medium flex items-center justify-center cursor-pointer hover:underline"
            >
              {" "}
              {isLoading ? <Spinner /> : "Resend"}
            </button>
          </p>

          <button
            onClick={() => setPhase(3)}
            className="mt-8 w-full flex items-center justify-center rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            {isLoading ? <Spinner /> : "Verify"}
          </button>
        </div>
      ) : phase === 3 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center p-6 sm:p-12 rounded-2xl bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Reset Password
          </h1>

          <div className="flex flex-col gap-y-1.5 mt-8 w-full">
            <label htmlFor="new-password">New password:</label>
            <input
              id="new-password"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  newPassword: e.target.value,
                })
              }
              className="w-full rounded-lg p-3 border border-primaryBorder"
              type="password"
              placeholder="New password"
            />
          </div>

          <div className="flex flex-col gap-y-1.5 mt-4 w-full">
            <label htmlFor="confirm-password">Confirm password:</label>
            <input
              id="confirm-password"
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full rounded-lg p-3 border border-primaryBorder"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button
            onClick={handleConfirmReset}
            className="mt-10 w-full flex items-center justify-center rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            {isLoading ? <Spinner /> : "Reset Password"}
          </button>
          {error && (
            <>
              <p className="text-red-500 text-sm mt-2">{error}</p>
            </>
          )}
        </div>
      ) : phase === 4 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center">
          <Lottie
            className="max-w-[40%] sm:max-w-[50%]"
            loop={true}
            animationData={Done}
          />
          <p className="text-lg font-medium text-center">
            Your password has been updated successfully
          </p>
          <Link
            to="/login"
            className="mt-10 w-full text-center rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            Login
          </Link>
        </div>
      ) : null}

      {phase !== 4 && (
        <Link
          className="flex items-center gap-x-1 mt-10 text-sm sm:text-base"
          to="/login"
        >
          <FaArrowLeftLong size={18} />
          <span>Back to login</span>
        </Link>
      )}
    </div>
  );
}
