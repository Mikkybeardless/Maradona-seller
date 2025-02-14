import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
// import Done from "../assets/done-animation.json"

export default function VerificationPage() {
  const [otp, setOtp] = useState("");
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

  return (
    <div className="p-6 bg-white ">
      <div className=" flex flex-col items-center p-12  bg-white ]">
        <h1 className="text-3xl text-center font-medium">Enter OTP</h1>

        <p className="text-secondaryTextColor text-sm text-center mt-2.5 max-w-[75%]">
          Please check your mail, and enter the 4 digit code that was sent to{" "}
          <span className="italic font-medium text-[#040421]">
            rosemary@gmail.com
          </span>
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

        <p className="text-secondaryTextColor text-sm text-center mt-[70px] max-w-[75%]">
          Didn't get a code?{" "}
          <span className="font-medium cursor-pointer hover:underline">
            send again
          </span>
        </p>

        <button className="mt-8 w-full rounded-[8px] py-3 text-white bg-defaultOrange hover:bg-defaultOrangeHover">
          Verify
        </button>
      </div>
    </div>
  );
}
