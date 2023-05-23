import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroImage,
  HeroTitle,
  HeroIconButton,
  HeroButton,
} from "./HeroContainer";
import HeroImg from "./../../assets/Hero/heroImg.svg";
import { Stack } from "@mui/system";

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
const Hero = () => {
  return (
    <section id="about">
      <HeroContainer>
        <HeroContent>
          <HeroDescription variant="h6">Hello, I am</HeroDescription>
          <HeroTitle variant="h6"> Ceed Jennelle</HeroTitle>
          <HeroDescription variant="subtitle1">
            An individual with a passion for learning.
          </HeroDescription>
          {/* <Stack direction="row">
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
          </Stack> */}
          <a
            href="https://drive.google.com/file/d/1mBpSizJ5HSzX0VmuAvun_vYM96yFTiC5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <HeroButton>My Resume</HeroButton>
          </a>
        </HeroContent>

        <HeroImage src={HeroImg} />
      </HeroContainer>
    </section>
  );
};

export default Hero;
