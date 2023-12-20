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
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";


const PasswordReset:NextPage=()=>{
  const router = useRouter();
  // const isMounted = useMounted();
  const [resetPassword,{ isLoading,isSuccess,isError}] = useResetPasswordMutation();
  const formik = useFormik({
    initialValues:{ 
      email: '',
      submit: null
    },
    validationSchema:Yup.object({
      email: Yup.string().email('The email must be valid').max(255).required('Email is required'),
    }),
    onSubmit: async(values,helpers):Promise<void>=>{
      try{
        await resetPassword(values)
        .unwrap()
        .then(()=>{
          toast.success('Request sent, check your email for reset link')
        })
        .catch(()=>{
          toast.error('failed to send request')
        })
      }
      catch(error){
        console.error(error)
      }
    }
  })
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
                Reset password
              </Typography>
              <Typography 
              color="textSecondary"
              sx={{ mt:2 }}
              variant="body2"
              >
                my promo goes here
              </Typography>
            </Box>
            <Box
              sx={{
                flexgrow:1,
                mt:3
              }}
            >
               {formik.errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>
                      {formik.errors.submit}
                    </FormHelperText>
                  </Box>
                )}
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <Box sx={{ mt:2 }}>
                  <Button
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isLoading ? <CircularIndeterminate /> : "Reset password" }
                  </Button>
                </Box>
              </form>
            </Box>
          
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default PasswordReset;