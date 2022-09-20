import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { ProjectList } from "./listProjects";
import "./projects.css";
import ProjectCard from "./ProjectCard";

//https://www.youtube.com/watch?v=OAx0we521sk
//https://www.youtube.com/watch?v=Q5y6pwoE3cM <--parallax

const Projects = () => {
  const [cardHovered, setCardHovered] = useState(null);

  const mediaStyle = {
    transition: "transform 0.5s ease-in-out",
    zIndex: "2",
    height: "360px",
    wdith: "260px",
    backgroundColor: "#faebd7",
    marginBottom: "2rem",
  };

  const hoverStyle = {
    transform: "translateY(20px)",
  };

  const cardImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
  };

  return (
    <section style={{ padding: "5rem", flexGrow: 1 }} id="projects">
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
