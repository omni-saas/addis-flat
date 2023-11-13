'use client'
import { NextPage } from "next";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import CircularIndeterminate from "@/components/common/circular-inditerminate";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";



export default function Dashboard(){
  const dispatch=useAppDispatch()
  const [logout]=useLogoutMutation()
  const {data:user, isLoading,isError} = useRetrieveUserQuery();
  const router = useRouter();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  console.log(isAuthenticated)
  const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

  const config = [
    {
      label:'First name',
      value: user?.first_name,
    },
    {
      label:'Last name',
      value: user?.last_name,
    },
    {
      label:'Email',
      value: user?.email,
    },
  ]
  
  if(isLoading){
    return (
      <CircularIndeterminate />
    );
  }
  if (isError){
    router.push('/auth/login')
    toast.error('please login')
  }
  return (
    <>
      Dasshboard
      welcome 
     {config.map(({ label,value })=>(
      <Box key={value}>
        <Typography>{label || <CircularIndeterminate />}</Typography>
        <Typography>{value || <CircularIndeterminate />}</Typography>
      </Box>
     ))}
     <Button
        size="large"
        type="submit"
        variant="outlined"
        onClick={handleLogout}
        >
          Logout
     </Button>
    </>
  );
}

