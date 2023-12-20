'use client'

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ItemToComplete from "@/components/dashboard-overview/items-to-complete";
import UnreadMessage from "@/components/dashboard-overview/unread-message";
import MaintainanceRequest from "@/components/dashboard-overview/maintenance-request";
import AnalyticsCard from "@/components/dashboard-overview/analytics-card";

export default function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:5
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4"> Good Morning, amin! </Typography>
        <Box sx={{
          p:4,
        }}>
          <Typography variant="h6">
            Quick Actions:
          </Typography>
        </Box>
        <Grid container justifyContent="space-between" spacing={4} sx={{mb:5}}>
          <Grid item>
              <Box
              sx={{
                m:-1,
                // mt:3
              }}
            >
              <Button
              startIcon={<PaidIcon fontSize="medium" />}
              sx={{ m:1 }}
              >
                Request Money
              </Button>
              <Button
                startIcon={<AttachMoneyIcon fontSize="medium" />}
              >
                Record Expense
              </Button>
              <Button
              startIcon={<HomeIcon fontSize="medium"/>}
              >
                Add Property
              </Button>
              <Button
              startIcon={<PersonIcon fontSize="medium"/>}
              >
                Add Tenant
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="outlined">
              Refer a freind and earn $100
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
              <Grid
                item
                md={8}
                xs={12}
              >
                <ItemToComplete />
                <AnalyticsCard />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
              >
                <UnreadMessage />
                <MaintainanceRequest />
              </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid
            item
            md={8}
            xs={12}
          >
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

