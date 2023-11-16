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
import TaskIcon from '@mui/icons-material/Task';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BuildIcon from '@mui/icons-material/Build';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HelpIcon from '@mui/icons-material/Help';
import Face6Icon from '@mui/icons-material/Face6';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';



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
        path:'/dashboard',
        icon: <DashboardIcon />
      },
      {
        title: 'Tasks',
        path:'/tasks',
        icon:<TaskIcon />
      },
      {
        title: 'Properties',
        path:'/properties',
        icon:<HomeIcon />
      },
      {
        title: 'Services',
        path:'/services',
        icon: <HomeWorkIcon /> 
      },
      {
        title: 'Marketing',
        path:'/marketing',
        icon:<CallToActionIcon />
      },
      {
        title: 'Prospective Tenants',
        path:'/prospective-tenants',
        icon:<ChecklistRtlIcon />
      },
      {
        title: 'Tenants & Leases',
        path:'/tenants-and-leases',
        icon:<Face6Icon />
      },
      {
        title: 'Financials',
        path:'/financial',
        icon:<AttachMoneyIcon />
      },
      {
        title: 'Maintainance & Repair',
        path:'/maintainance-and-repair',
        icon: <BuildIcon />
      },
      {
        title: 'Reports',
        path:'/reports',
        icon: <SummarizeIcon />
      },
    ],
    
  },
  {
    title:"Need Help?",
    items:[
      {
        title: 'customer Support',
        path:'/customer-support',
        icon:<HelpIcon />
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