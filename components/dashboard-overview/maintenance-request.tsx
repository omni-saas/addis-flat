import { Button, Card, CardHeader, Divider, } from '@mui/material';
import type { FC } from 'react';




const MaintainanceRequest:FC=()=>{
  return (
    <>
    
    <Card>
      <CardHeader 
        title={`Maintainance Request (${0})`}
      />
      <Divider />
      <Button
      href='/dashboard/maintainance'
        sx={{ m:1 }}
        >
          View Maintainance & Repairs
      </Button>
    </Card>
    </>
  );
}
export default MaintainanceRequest; 