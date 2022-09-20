import { styled, Box, Typography, IconButton, Button } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  //   width: "100%",
  height: "100vh",
  //   backgroundColor: "antiquewhite",
  display: "flex",
  justifyContent: "center",
  // height: "100%",
  width: "100%",
  padding: "0px 0px",
  backgroundColor: "antiquewhite",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
}));

export const HeroContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  maxWidth: 420,
  padding: "30px",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "60px",
  letterSpacing: ".3rem",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
  fontFamily: "monospace",
  fontWeight: 700,
  color: "#964B00",
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: ".5rem",
  fontFamily: "monospace",
  fontWeight: 300,
  letterSpacing: ".3rem",
  color: "black",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const HeroImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
    // objectFit: "cover",
    // objectPosition: "left",
  },
  [theme.breakpoints.down("sm")]: {
    // display: "none",
    width: "320px",
    height: "300px",
    // objectFit: "cover",
    // objectPosition: "left",
  },
}));

export const HeroIconButton = styled(IconButton)(() => ({
  color: "#964B00",
  marginRight: "1rem",
  transform: "scale(1.4)",
  marginTop: ".5rem",
  ":hover": {
    backgroundColor: "white",
    color: "#3f3d56",
    // transform: "translateY(20px)",
    transition: "transform 0.5s ease-in-out",
  },
}));

export const HeroButton = styled(Button)(() => ({
  color: "#000",
  "&:hover": {
    transform: "translate(-5px, -5px)",
  },
  "&, &:before, &:after": {
    color: "#964B00",
    border: "1px solid #964B00",
    marginTop: "1rem",
    width: "40%",
    left: 0,
    bottom: 0,
    transition: "transform 0.3s ease",
  },
}));
