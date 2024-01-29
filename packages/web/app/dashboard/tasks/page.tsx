'use client'
import { Box, Container, Grid, Typography } from "@mui/material";
import { BasicCard } from "@/components/common/basic-card";
import { propertySetup } from "@/fake-api/property-setup";
import { OnBoarding } from "@/fake-api/onboarding";

export default function Tasks() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:5
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ py:3 }}>
          <Typography variant="h5"> Onboarding </Typography>  
          <Grid container alignItems="stretch">
            {propertySetup.map((item,key)=>(
              <Grid key={key} item xs={12} md={4} style={{ display:'flex' }}>
                <BasicCard 
                  title={item.title}
                  description={item.description}
                  redirect_url={item.redirect_url}
                  redirect_url_text={item.redirect_url_text}
                  icon={item.icon}
                  />
            </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ py:3 }}>
          <Typography variant="h5"> Property setup </Typography>  
          <Grid container alignItems="stretch">
            {OnBoarding.map((item,key)=>(
              <Grid key={key} item xs={12} md={4} style={{ display:'flex' }}>
                <BasicCard 
                  title={item.title}
                  description={item.description}
                  redirect_url={item.redirect_url}
                  redirect_url_text={item.redirect_url_text}
                  icon={item.icon}
                  />
            </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

