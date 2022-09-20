import React from "react";
import { Box, Typography } from "@mui/material";

const Icon = ({ name, src }) => {
  return (
    <Box
      sx={{
        mb: 3,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={src} height="40px" width="40px" />
      <Typography variant="body1" sx={{ mt: 1, color: "#808080" }}>
        {name}
      </Typography>
    </Box>
  );
};

export default Icon;
