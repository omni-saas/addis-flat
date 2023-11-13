import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import Scrollbars from "react-custom-scrollbars-2";
import type { SxProps,Theme } from "@mui/material";
import { Box } from "@mui/material";


interface Props{
  className?: string;
  children?:ReactNode;
  sx?:SxProps<Theme>;
}

const Scrollbar:FC<Props> =({ className, children, ...props }) =>{
  return (
    <Scrollbars
      autoHide
      renderThumbVertical={()=>{
        return (
          <Box
            sx={{
              width: 5,
            }}
          />
        )
      }}
    >
      { children }
    </Scrollbars>
  );
}
Scrollbar.propTypes ={
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Scrollbar