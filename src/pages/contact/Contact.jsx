import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <>
      <Box
        sx={
          {
            py: 10,
            px: 4,
            "@media (max-width:600)":{
              py:1
            },
            textAlign: "center",
            "& h5": {
              fontWeight: "bold",
              m: 1
            },
            "& p": {
              textAlign: "justify"
            }
          }
        }
      >
        <Typography variant='h5'>
          Contact my Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Est voluptates earum nulla sapiente impedit fuga temporibus
          voluptatibus quae aspernatur placeat ab dolorem perferendis
          adipisci minima
          praesentium rerum, exercitationem, asperiores commodi!
        </p>
      </Box>
      <Box sx={{ display:"flex", alignItems:"center",justifyContent:"center", m:1}}>
        <TableContainer component={Paper} sx={{ width:400 }}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{textAlign:"center",color:"white", bgcolor:"black"}}>Contact Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:"green",pt:1}} /> 10000-000-000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <EmailIcon sx={{color:"green",pt:1}} /> haiderokz888@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CallIcon sx={{color:"green",pt:1}} /> 12345678909
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Contact
