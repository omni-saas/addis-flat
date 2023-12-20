import { Box, Button, Card, CardHeader, Divider, Typography } from "@mui/material";
import { type FC } from "react";
import { itemsToComplete } from "@/fake-api/items-to-complete";


const ItemToComplete:FC = () =>{

  return (
    <Card>
      <CardHeader 
        title="Items To Complete"
      />
      <Divider />
        <Box
          sx={{
            // height:336,
            minWidth:500,
            p:2
          }}
        >
          {itemsToComplete.map((item,key)=>(
            <Card
            variant="outlined"
            sx={{
              my:1
            }}
            key={key}
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
                {item.text}
              </Typography>
              <Button href={item.redirect_url}>
                {item.button_text}
              </Button>
          </Box>
        </Card>
          ))}
          
        </Box>
    </Card>
  );
}

export default ItemToComplete;