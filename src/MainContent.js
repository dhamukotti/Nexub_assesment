import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <Toolbar />
      <Typography paragraph>
        This is where the main content will be displayed. You can add any
        components here.
      </Typography>
    </Box>
  );
};

export default MainContent;
