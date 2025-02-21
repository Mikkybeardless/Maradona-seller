import { Avatar, Badge, IconButton } from "@mui/material";
import { useState } from "react";
import { BsCamera } from "react-icons/bs";

import defaultPic from "../assets/profilePic.png";

const DEFAULT_IMAGE = defaultPic;

export default function ProfilePictureUpload() {
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <IconButton
          component="label"
          sx={{
            backgroundColor: "white",
            boxShadow: 1,
            width: 32,
            height: 32,
            "&:hover": { backgroundColor: "#ddd" },
          }}
        >
          <BsCamera size={18} color="#E65800" />
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </IconButton>
      }
    >
      <Avatar
        src={image}
        alt="Profile Picture"
        sx={{ width: 120, height: 120 }}
      />
    </Badge>
  );
}
