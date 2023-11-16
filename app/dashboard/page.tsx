'use client'

import { Box, Container, Typography } from "@mui/material";


export default function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:8
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4"> Good Morning, amin! </Typography>
      </Container>
    </Box>
  );
}

