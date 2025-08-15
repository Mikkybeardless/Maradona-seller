import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

interface PasswordBoxProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function PasswordBox({
  label,
  placeholder,
  value,
  onChange,
}: PasswordBoxProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      sx={{ background: "#F7F7F7", padding: "20px", marginBottom: "30px" }}
    >
      <Box sx={{ flex: 1, marginRight: "10px" }}>
        <Typography>{label}</Typography>
        {visible ? (
          <TextField
            placeholder={placeholder}
            variant="outlined"
            fullWidth
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        ) : (
          <Typography
            onClick={() => setVisible(true)}
            sx={{ cursor: "pointer" }}
            fontSize="14px"
            color="#150A13"
          >
            •••••••••••
          </Typography>
        )}
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
