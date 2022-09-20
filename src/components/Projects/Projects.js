import React from "react";
import { Typography, Box } from "@mui/material";
import { ProjectList } from "./listProjects";
import "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <Typography
        gutterBottom
        variant="h5"
        noWrap
        align="center"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "black",
          marginBottom: "1rem",
          marginTop: "4rem",
        }}
      >
        PROJECTS
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {ProjectList.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.image}
            tags={project.tags}
            link={project.link}
            site={project.liveView}
          />
        ))}

        {/* {ProjectList.map((project) => (
          <li>{project.title}</li>
          
        ))} */}
      </Box>
    </section>
  );
};

export default Projects;
