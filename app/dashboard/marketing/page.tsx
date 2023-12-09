'use client'

import { Box, Container, Typography } from "@mui/material";

export default function Marketing() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:5
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4"> Marketing </Typography>
        
      </Container>
    </Box>
  );
}

