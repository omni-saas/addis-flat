'use client'
import { FC, ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { Sidebar } from "./sidebar";

interface Props{
  children?:ReactNode;
}

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


export const DashboardLayout:FC<Props> = (props) =>{
  const { children } = props;
  const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false);
  return(
    <>
      <DashboardLayoutRoot>
          {children}
      </DashboardLayoutRoot>
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