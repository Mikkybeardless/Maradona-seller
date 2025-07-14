import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export default function PasswordBox({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      sx={{ background: "#F7F7F7", padding: "20px", marginBottom: "30px" }}
    >
      <Box>
        <Typography>{label}</Typography>
        <Typography fontSize="14px" color="#150A13">
          {visible ? "YourPassword123" : "•••••••••••"}
        </Typography>
      </Box>

      <IconButton onClick={() => setVisible(!visible)}>
        {visible ? (
          <RiEyeOffLine size={20} color="#14199C" />
        ) : (
          <RiEyeLine size={20} color="#14199C" />
        )}
      </IconButton>
    </Box>
  );
}
