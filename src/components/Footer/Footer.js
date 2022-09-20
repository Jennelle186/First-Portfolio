import React from "react";
import { Box, Typography } from "@mui/material";
import {
  HeroIconButton,
  SubtitleSection,
  TitleSection,
} from "./FooterContainer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-scroll";
import { Stack } from "@mui/system";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

const links = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/ceedjennelle.lorenzo/",
    icon: <FacebookIcon />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ceed-jennelle-lorenzo-49729a242/",
    icon: <LinkedInIcon />,
  },
  {
    title: "Email",
    link: "mailto:ceedjennelle.lorenzo@gmail.com",
    icon: <MailIcon />,
  },
];

const Footer = () => {
  return (
    <Stack
      sx={{
        padding: 3,
        mx: "auto",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "antiquewhite",
      }}
    >
      <Stack spacing={2}>
        <TitleSection variant="body1">
          <Stack direction="row" spacing="2">
            <Link to="about" smooth={true}>
              BACK TO TOP
            </Link>{" "}
            <KeyboardArrowUpIcon />
          </Stack>
        </TitleSection>
      </Stack>

      <Stack direction="row">
        {links.map((link) => (
          <div key={links.indexOf(link)}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              alt={link.title}
            >
              <HeroIconButton>{link.icon}</HeroIconButton>
            </a>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
