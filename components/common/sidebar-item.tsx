import { useState } from "react";
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Collapse, ListItem } from '@mui/material';
import type { ListItemProps } from "@mui/material";
import Link from "next/link";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRight from "@mui/icons-material/ChevronRight";




interface DashboardSidebarItemProps extends ListItemProps {
  active?: boolean;
  children?: ReactNode;
  chip?: ReactNode;
  depth: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
};

export const DashboardSidebarItem: FC<DashboardSidebarItemProps> = (props) => {
  const {
    active,
    children,
    chip,
    depth,
    icon,
    info,
    open: openProp,
    path,
    title,
    ...other
  } = props;
  const [open, setOpen] = useState<boolean>(openProp);
  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  }
  let paddingLeft = 24;
  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'block',
          mb: 0.5,
          py: 0,
          px: 2
        }}
        {...other}
      >
        <Button
          endIcon={
            !open
              ? <ChevronRight fontSize="small" />
              : <ExpandMore fontSize="small" />
          }
          disableRipple
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: active ? 'primary.main' : 'neutral.900',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.08)'
            },
            '& .MuiButton-startIcon': {
              color: active ? 'primary.main' : 'neutral.900'
            },
            '& .MuiButton-endIcon': {
              color: 'neutral.400'
            }
          }}
        >
          <Box
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Box>
          {info}
        </Button>
        <Collapse
          in={open}
          sx={{ mt: 0.5 }}
        >
          {children}
        </Collapse>
      </ListItem>
    )
  }
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'block',
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
      <Link
        href={path}
        passHref
      >
        <Button
          component="a"
          startIcon={icon}
          endIcon={chip}
          disableRipple
          sx={{
            backgroundColor: active && 'rgba(255,255,255,0.08)',
            borderRadius: 1,
            color: active ? 'primary' : 'neutral.500',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.900'
            },
          }}
        >
          <Box sx={{ flexGrow: 1, textTransform:'uppercase', fontSize:11, color:'#fff' }}>
            {title}
          </Box>
          {info}
        </Button>
      </Link>
    </ListItem>
  )
};

DashboardSidebarItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  icon: PropTypes.node,
  info: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};

DashboardSidebarItem.defaultProps = {
  active: false,
  open: false
};