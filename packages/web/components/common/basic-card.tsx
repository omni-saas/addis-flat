import React from 'react'
import type { FC, ReactNode } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from 'next/link';

interface BasicCardProps{
  title: string;
  description: string;
  redirect_url: string;
  redirect_url_text:string;
  icon?: ReactNode;
}


export const BasicCard:FC<BasicCardProps> = (props) => {
  const { title,description,redirect_url,icon,redirect_url_text, ...other } = props;
      return (
        <>
          <Box width='300px' sx={{ py:1, height:"100%" }}>
                <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                  <CardContent>
                    <Box sx={{
                      display:'flex',
                      justifyContent:'space-between',
                      pb:3
                    }}>
                      <Typography gutterBottom variant="body1" component='div'>
                        {title}
                      </Typography>
                      {icon}
                      {/* <CurrencyExchangeIcon 
                        fontSize="small"
                      /> */}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link href={redirect_url}>
                    <Button
                        // fullWidth
                        size="medium"
                        type="submit"
                        variant="contained"
                      >
                        {redirect_url_text}
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Box>
        </>
      );
  }