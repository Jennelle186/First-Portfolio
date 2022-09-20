import React from "react";
import { Typography, Box, styled, Paper, Grid } from "@mui/material";

export const SkillsContainer = styled(Box)(({ theme }) => ({
  //   maxWidth: "1300px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  mx: "auto",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const BoxQuote = styled(Box)(({ theme }) => ({
  flex: 1,
  margin: "10px 30px",
  padding: "25px",
  // border: "1px solid red",
  boxSizing: "border-box",
  "&:before": {
    content: '"\u201f"',
    fontFamily: "cursive",
    fontSize: "100px",
    color: "#964B00",
    display: "block",
    marginBottom: "-35px",
    marginTop: "-20px",
    marginLeft: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    "&:before": {
      fontSize: "70px",
    },
  },
}));

export const TitleSection = styled(Typography)(({ theme }) => ({
  mr: 2,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "black",
}));

export const SkillTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  textAlign: "center",
  mb: 3,
  fontFamily: "Gelasio serif",
  fontStyle: "italic",
  fontSize: "1.15m",
  lineHeight: "1.5m",
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    marginTop: "0px",
    marginBottom: "2rem",
  },
}));

export const SkillSubtitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontWeight: "bold",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "2.5rem",
  "&:before": {
    content: '"\u2013"',
  },
}));

export const SkillsList = styled(Box)(({ theme }) => ({
  marginLeft: "-50px",
  flex: "1",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
    marginTop: "3rem",
  },
}));
