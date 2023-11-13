"use client"
import { Box, Button, Card, Checkbox, Container, Divider, FormHelperText, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from 'yup';
// import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import CircularIndeterminate from "@/components/common/circular-inditerminate";

const Confirm:NextPage=()=>{
  const router = useRouter();
  // const isMounted = useMounted();
  
  return (
    <>
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
              <Typography variant="h4">
                Confirm your email
              </Typography>
              <Typography 
              color="textSecondary"
              sx={{ mt:2 }}
              variant="body2"
              >
                We have sent you an email confirmation. check your email and login.
              </Typography>
            </Box>
            <Box
              sx={{
                flexgrow:1,
                mt:3
              }}
            > 
              <Box sx={{ mt:2 }}>
                <Button
                href="/auth/login"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default Confirm;

