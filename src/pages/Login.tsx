import { useState } from "react"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"

export default function Login() {
    const [signUp, setSignUp] = useState(true)

    return (
        <div className="w-screen h-screen flex bg-[#F5F5F5]">
            <div className="basis-[50%] signInBg bg-no-repeat bg-center bg-cover"></div>

            <div
                className={`${
                    signUp ? "" : "items-center"
                } basis-[50%] overflow-y-auto flex justify-center custom-scrollbar`}
            >
                {signUp ? (
                    <SignUp setSignUp={setSignUp} />
                ) : (
                    <SignIn setSignUp={setSignUp} />
                )}
            </div>
        </div>
    )
}
