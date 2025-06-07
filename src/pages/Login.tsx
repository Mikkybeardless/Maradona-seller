import { useState, useEffect } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Login() {
  let urlParams = new URLSearchParams(document.location.search);
  let signup = urlParams.get("signup")
  var isSignupTrue = (signup === 'true');

  const [signUp, setSignUp] = useState();

  useEffect(() => {
    setSignUp(isSignupTrue)
  }, [])


  return (
    <div className="w-screen h-screen flex bg-[#F5F5F5]">
      {/* Background Section (Hidden on Small Screens) */}
      <div className="hidden md:flex w-1/2 signInBg bg-no-repeat bg-center bg-cover"></div>

      {/* Authentication Form Section */}
      <div
        className={`${
          signUp ? "" : "items-center"
        } md:basis-[50%] overflow-y-auto flex justify-center custom-scrollbar`}
      >
        {signUp ? (
          <SignUp setSignUp={setSignUp} />
        ) : (
          <SignIn setSignUp={setSignUp} />
        )}
      </div>
    </div>
  );
}
