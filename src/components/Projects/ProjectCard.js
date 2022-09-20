import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Button,
  Stack,
  styled,
} from "@mui/material";
import { Box } from "@mui/system";

const ProjectCard = ({ title, description, tags, img, link, id, site }) => {
  const [cardHovered, setCardHovered] = useState(null);

  const mediaStyle = {
    transition: "transform 0.5s ease-in-out",
  };

  const hoverStyle = {
    transform: "translateY(20px)",
  };

  const CardContainer = styled(Card)(({ theme }) => ({
    maxWidth: 350,
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
      marginBottom: "2.5rem",
    },
  }));

  return (
    <CardContainer
      elevate={0}
      style={id == cardHovered ? { ...mediaStyle, ...hoverStyle } : mediaStyle}
      onMouseEnter={() => {
        setCardHovered(id);
      }}
      onMouseLeave={() => {
        setCardHovered(null);
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={img} height="200" alt={title} />

        <CardContent>
          <Typography variant="body1" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "space-between",
            mx: "auto",
            mb: 3,
          }}
        >
          <Stack direction="row" spacing={2}>
            {" "}
            <a href={link} style={{ textDecoration: "none" }} target="_blank">
              <Button
                size="small"
                variant="contained"
                style={{
                  backgroundColor: "antiquewhite",
                  color: "#964B00",
                }}
              >
                Github
              </Button>
            </a>
            <a href={site} style={{ textDecoration: "none" }} target="_blank">
              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "antiquewhite", color: "#964B00" }}
              >
                Live View
              </Button>
            </a>
          </Stack>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              variant="outlined"
              style={{ color: "#964B00" }}
            />
          ))}
        </Box>
      </CardActions>
    </CardContainer>
  );
};

export default ProjectCard;
