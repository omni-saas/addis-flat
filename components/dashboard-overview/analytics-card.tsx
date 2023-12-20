import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import type { FC } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { salesData } from "@/fake-api/sales-data";

const AnalyticsCard:FC = () =>{
  return (
    <>
      <Card sx={{
        mt:2
      }}>
        <CardHeader
          title="Payment statistics"
          action={
            <IconButton size="small" aria-label="settings" sx={{ color:'text.secondary' }}>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight:600, color:'text.primary', mr:.5}}>
                Total 58.8% growth
              </Box>
               this month
            </Typography>
          }
          titleTypographyProps={{
            sx:{
              mb: 2.5,
              lineHeight:'2rem !important',
              letterSpacing: '0.15px !important'
            }
          }}
        />

          <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important`}}>
            <Grid container spacing={5}>
              {salesData.map((item,key)=>(
                <Grid item xs={12} sm={3} key={key}>
                  <Box key={key} sx={{ display:'flex', alignItems:'center' }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        mr: 3,
                        width: 44,
                        height: 44,
                        boxShadow: 3,
                        color:'white',
                        backgroundColor:`${item.color}.main`
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Box sx={{ display:'flex', flexDirection:'column' }}>
                      <Typography variant="caption">{item.title}</Typography>
                      <Typography variant="h6">{item.stats}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        
      </Card>
    </>
  );
}
export default AnalyticsCard;