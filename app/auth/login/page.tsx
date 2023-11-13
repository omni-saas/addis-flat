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
import { useLoginMutation } from "@/redux/features/authApiSlice";

const Login:NextPage=()=>{
  const router = useRouter();
  // const isMounted = useMounted();
  const [login,{ isLoading,isSuccess,isError}] = useLoginMutation();
  const formik = useFormik({
    initialValues:{ 
      email: '',
      password: '',
      submit: null
    },
    validationSchema:Yup.object({
      email: Yup.string().email('The email must be valid').max(255).required('Email is required'),
      password: Yup.string().min(7).max(255).required('Password is required'),
    }),
    onSubmit: async(values,helpers):Promise<void>=>{
      try{
        await login(values)
        .unwrap()
        .then(()=>{
          toast.success('Logged in successfully')
          router.push('/dashboard')
        })
        .catch(()=>{
          toast.error('Failed to login')
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
                Register
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
                
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                
            
                <Box sx={{ mt:2 }}>
                  <Button
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isLoading ? <CircularIndeterminate /> : "Login" }
                  </Button>
                </Box>
              </form>
            </Box>
            <Divider sx={{ my:3 }}/>
            <Box sx={{ display:'flex', justifyContent:'space-between' }}>
              <Link href="/auth/signup" passHref>
                Signup
              </Link>
              <Link href="/auth/password-reset" passHref>
                Forgot password?
              </Link>
              
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default Login;

