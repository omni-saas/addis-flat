'use client'

import { Box, Container, Typography } from "@mui/material";

export default function Properties() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:5
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4"> Properties </Typography>
        
      </Container>
    </Box>
  );
}

