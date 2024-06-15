import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={
      {
        bgcolor:"black",
        color:"white",
        height:120,
        textAlign:"center",
        p:3
      }
      }>
        <Box sx={
          {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:1,
            m:1,
            "& svg:hover":{
              color:"goldenrod",
              cursor:"pointer",
              transition:"all 400ms"

            }
          }
        } >
          <FacebookIcon />
          <LinkedInIcon/>
          <GitHubIcon/>
          <YouTubeIcon/>
        </Box>
      <Typography
      variant='h6'
      sx={
        {
          "@media (max-width:600px)":{
            fontSize:"0.8rem"
          }
        }
      }
      >
        All right Reserved &#169; kami restaurant
      </Typography>
    </Box>
    </>
  )
}

export default Footer
