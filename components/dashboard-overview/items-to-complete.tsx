import { Box, Button, Card, CardHeader, Divider, Typography } from "@mui/material";
import { type FC } from "react";



const ItemToComplete:FC = () =>{
  return (
    <Card>
      <CardHeader 
        title="Items To Complete"
      />
      <Divider />
        <Box
          sx={{
            height:336,
            minWidth:500,
            p:2
          }}
        >
          <Card
              variant="outlined"
            >
            <Box
              sx={{
                alignItems:'center',
                display:'flex',
                justifyContent:'space-between',
                flexWrap:'wrap',
                px:2,
                py:1.5
              }}
            >
                <Typography color="textSecondary" variant="caption">
                  you have 12 days left on your free trial.
                </Typography>
                <Button>
                  Start Subscription
                </Button>
            </Box>
          </Card>
        </Box>
    </Card>
  );
}

export default ItemToComplete;