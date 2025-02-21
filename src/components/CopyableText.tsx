import { IconButton, Typography } from "@mui/material";
import { MdContentCopy } from "react-icons/md";

export default function CopyableText({
  textColor,
  variant,
  text,
}: {
  textColor: string;
  variant: string;
  text: string;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Typography variant={variant} fontWeight={400} color={textColor}>
      {text}{" "}
      <IconButton size="small" onClick={handleCopy}>
        <MdContentCopy size={16} color="#ACA0A9" />
      </IconButton>
    </Typography>
  );
}
