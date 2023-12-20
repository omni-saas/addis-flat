'use client';

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { Box, Card, Container, Typography } from "@mui/material";
interface Props{
  params:{
    uid:string;
    token:string;
  }
}

const Activation:NextPage<Props> =({ params })=>{
  const router = useRouter();
  const [activation] = useActivationMutation();
  useEffect(()=>{
    const { uid, token } = params;
    activation({ uid, token })
    .unwrap()
    .then(()=>{
      toast.success('Account activated')
    })
    .catch(()=>{
      toast.error('failed to activate')
    })
    .finally(()=>{
      router.push('/auth/login')
    })
    
  })
  return (
    <Box
        component="main"
        sx={{
          backgroundColor:'background.default',
          display:'flex',
          flexDirection:'column',
          minHeight:'100vh'
        }}
      >
        <Container
        maxWidth="sm"
        sx={{
          py:{
            xs:'60px',
            md:'120px'
          }
        }}
        >
          <Card
          elevation={16}
          sx={{ p:4 }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography 
              color="textSecondary"
              sx={{ mt:2 }}
              variant="body2"
              >
                Thank you for choosing us
              </Typography>
            </Box>
            <Box
              sx={{
                flexgrow:1,
                mt:3
              }}
            > 
            </Box>
          </Card>
        </Container>
      </Box>
  );
}

export default Activation;