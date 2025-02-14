import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Security() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/seller/settings/verification");
  };

  return (
    <div className="bg-white p-4">
      <p className="font-[600] text-[32px] mb-[12px] ">
        Two Factor Authentication
      </p>
      <p className="text-sm">
        Enter the email address you used to sign up and we’ll send you
        instructions to reset your password
      </p>
      <div className="mt-[30px] flex flex-col">
        <div>
          <p className="font-inter text-base text-[#040421] mb-[8px]">Email</p>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </div>
        <Button
          variant="contained"
          sx={{
            width: "439px",
            background: "#14199C",
            color: "#ffffff",
            margin: "87px auto",
            fontSize: "16px",
            fontWeight: 700,
            padding: "15px auto",
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
