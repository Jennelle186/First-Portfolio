import { styled, Typography, IconButton } from "@mui/material";

export const HeroIconButton = styled(IconButton)(() => ({
  color: "#964B00",
  marginRight: "1rem",
  transform: "scale(1.4)",
  marginTop: "1rem",
  ":hover": {
    backgroundColor: "white",
    color: "#3f3d56",
    // transform: "translateY(20px)",
    transition: "transform 0.5s ease-in-out",
  },
}));

export const TitleSection = styled(Typography)(({ theme }) => ({
  color: "brown",
  fontWeight: "bold",
  mb: 2,
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
