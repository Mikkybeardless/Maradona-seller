import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Security() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/seller/settings/verification");
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 min-h-screen flex flex-col lg:w-3/4">
      <p className="font-[600] text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-4 md:mb-5 text-center sm:text-left">
        Two Factor Authentication
      </p>
      <p className="text-sm text-center sm:text-left max-w-md sm:max-w-lg">
        Enter the email address you used to sign up and we&apos;ll send you
        instructions to reset your password.
      </p>

      <div className="mt-[30px] flex flex-col">
        <div className="">
          <p className="font-inter font-medium text-base text-[#040421] mb-[8px]">
            Email
          </p>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#EAE6E9",
            }}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%", lg: "439px" },
            background: "#14199C",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            margin: { xs: "40px auto", md: "87px auto" },
            fontSize: "16px",
            fontWeight: 700,
            padding: "12px",
            borderRadius: "5px",
          }}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Security;
