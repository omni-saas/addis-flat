"use client"
import { Box, Button, Card, Checkbox, Container, Divider, FormHelperText, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from 'yup';
// import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";
import { useSignupMutation } from "@/redux/features/authApiSlice";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import CircularIndeterminate from "@/components/common/circular-inditerminate";

const Signup:NextPage=()=>{
  const router = useRouter();
  const [signup,{ isLoading,isError,isSuccess }] = useSignupMutation();
  const formik = useFormik({
    initialValues:{
      first_name: '',
      last_name: '',
      email: '',
      phonenumber: '',
      password: '',
      re_password: '',
      policy: false,
      submit: null
    },
    validationSchema:Yup.object({
      first_name: Yup.string().max(255).required('First name is required'),
      last_name: Yup.string().max(255).required('Last name is required'),
      email: Yup.string().email('The email must be valid').max(255).required('Email is required'),
      password: Yup.string().min(7).max(255).required('Password is required'),
      re_password: Yup.string().min(7,"confirm password must bet at least 7 characters").max(255).required('Password is required'),
      phonenumber: Yup.string().max(9).required("Phone number is required"),
      policy: Yup.boolean().oneOf([true],'This field must be checked')
    }),
    onSubmit: async(values,helpers):Promise<void>=>{
      try{
        await signup(values)
        .unwrap()
        .then(()=>{
          toast.success('please check your email to verify account')
          router.push('/auth/confirm')
        })
        .catch(()=>{
          toast.error('Failed to register account')
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
                  error={Boolean(formik.touched.first_name && formik.errors.first_name)}
                  fullWidth
                  helperText={formik.touched.first_name && formik.errors.first_name}
                  label="First name"
                  margin="normal"
                  name="first_name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
                <TextField 
                  error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                  fullWidth
                  helperText={formik.touched.last_name && formik.errors.last_name}
                  label="Last name"
                  margin="normal"
                  name="last_name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                />
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
                  error={Boolean(formik.touched.phonenumber && formik.errors.phonenumber)}
                  name="phonenumber"
                  value={formik.values.phonenumber}
                  label="Phone number"
                  type="text"
                  variant="outlined"
                  margin='normal'
                  fullWidth
                  helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  autoFocus
                  InputProps={{
                          startAdornment:(
                            <Box sx={{mx:1}}>
                              <Typography>+251</Typography>
                            </Box>
                          ),
                        }}
                  required
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
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.re_password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.re_password}
                  label="Confirm password"
                  margin="normal"
                  name="re_password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.re_password}
                />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
                mt: 2
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  I have read the
                  {' '}
                  <Link
                    
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
                </Box>
                <Box sx={{ mt:2 }}>
                  <Button
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isLoading ? <CircularIndeterminate /> : "Create account" }
                    {/* Create account */}
                  </Button>
                </Box>
              </form>
            </Box>
            <Divider sx={{ my:3 }}/>
            Already have an account?
            <Link href="/auth/login" passHref>
              Login here
            </Link>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default Signup;

