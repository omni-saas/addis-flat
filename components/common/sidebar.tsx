'use client'
import { FC, useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
import type { Theme } from "@mui/material";
import Scrollbar from "../scrollbar";
import Logo from "./logo";
import Link from "next/link";
import { SidebarSection } from "./sidebar-section";
import DashboardIcon from '@mui/icons-material/Dashboard';
interface Props{
  onClose: () => void;
  open: boolean;
}
interface Item{
  title: string;
  children?: Item[];
  chip?:ReactNode;
  icon?: ReactNode;
  path?: string;
}
interface Section{
  title: string;
  items: Item[];
}
const getSections = (): Section[] => [
  
  {
    title:'',
    items:[
      {
        title: 'Dashboard',
        path:'/',
        icon: <DashboardIcon />
      },
      {
        title: 'Tasks',
        path:'/',
        icon:''
      },
      {
        title: 'Properties',
        path:'/',
        icon:''
      },
      {
        title: 'Services',
        path:'/',
        icon:''
      },
      {
        title: 'Marketing',
        path:'/',
        icon:''
      },
      {
        title: 'Prospective Tenants',
        path:'/',
        icon:''
      },
      {
        title: 'Tenants & Leases',
        path:'/',
        icon:''
      },
      {
        title: 'Financials',
        path:'/',
        icon:''
      },
      {
        title: 'Maintainance & Repair',
        path:'/',
        icon:''
      },
      {
        title: 'Reports',
        path:'/',
        icon:''
      },
    ],
    
  },
  {
    title:"Need Help?",
    items:[
      {
        title: 'customer Support',
        path:'/',
        icon:''
      },
    ]
  }
  
  
]
export const Sidebar:FC<Props> = (props)=>{
  const { onClose,open } = props;
  const pathname=usePathname();
  const lgUp = useMediaQuery(
    (theme:Theme) => theme.breakpoints.up('lg'),
    {
      noSsr: false
    }
  ) 
  // use memoization to only run when needed, good for perfomance
  const sections = useMemo(() => getSections(),[]);
  const content =(
    <Box sx={{ height: "100%" }}>
      <Scrollbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}>
            <Box
              sx={{
                pt:3,
                display:'flex',
                justifyContent:'center',
              }}>
              <Link href="/dashboard" passHref>
                <Logo />
              </Link>
            </Box>
          <Divider
            sx={{
              my: 2,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <SidebarSection
                key={section.title}
                path={pathname}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
        </Box>
      </Scrollbar>
    </Box>
  )
  if(lgUp){
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#111827',
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }
  return (
    <>
      <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#111827',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
    </>
  );
}
Sidebar.propTypes = {
  onClose:PropTypes.func,
  open:PropTypes.bool
}