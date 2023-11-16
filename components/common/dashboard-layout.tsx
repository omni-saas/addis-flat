'use client'
import { ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { Sidebar } from "./sidebar";
import { DashboardNavbar } from "./dashboard-navbar";



const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    display:'flex',
    flex:'1 1 auto',
    maxWidth:'100%',
    paddingTop:64,
    [theme.breakpoints.up('lg')]:{
      paddingLeft:280
    }
  })
)


export default function DashboardLayout(props:{ children: ReactNode }){
  const { children } = props;
  const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false);
  return(
    <>
      <DashboardLayoutRoot>
          {children}
      </DashboardLayoutRoot>
      <DashboardNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
      <Sidebar 
        onClose={(): void =>setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
  </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node
}