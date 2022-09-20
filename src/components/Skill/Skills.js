import React from "react";
import { Box, Grid } from "@mui/material";
import {
  SkillsContainer,
  SkillsList,
  SkillTitle,
  SkillSubtitle,
  BoxQuote,
  TitleSection,
} from "./SkillsContainer";
import Icon from "./Icon";
import { icons } from "../../assets/Icons/iconList";

const Skills = () => {
  return (
    <section id="skills" style={{ padding: "5rem" }}>
      <TitleSection variant="h5" align="center" noWrap gutterBottom>
        SKILLS
      </TitleSection>

      <SkillsContainer sx={{ my: 5, marginTop: "0px" }}>
        <BoxQuote>
          <SkillTitle variant="h4">
            "Learning is a lifelong process."
          </SkillTitle>
          <SkillSubtitle> Peter Drucker</SkillSubtitle>
        </BoxQuote>

        <SkillsList>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {icons.map((icon, i) => (
                <Grid item xs={2} sm={4} md={4} key={icon.id}>
                  <Icon name={icon.name} src={icon.src} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </SkillsList>
      </SkillsContainer>
    </section>
  );
};

export default Skills;
