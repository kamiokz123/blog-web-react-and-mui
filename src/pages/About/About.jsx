import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <Box
        sx={
          {
            py:6,
            "& p":{
              m:3,
              textAlign:"justify"
            },
            "& h3":{
              fontWeight:"bold"
            },
            textAlign:"center",
            "@media (max-width:600px)":{
              py:1,
              "& h3":{
                fontSize:"1.8rem"
              }
            }
          }
        }
      >
        <Typography variant='h3'>
          Welcome to my Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque voluptatibus mollitia perspiciatis, accusantium soluta
          optio eos tenetur laboriosam ea architecto commodi ad deleniti
          similique, quasi a. Facere, expedita laboriosam, recusandae dicta,
          necessitatibus explicabo eum repellendus voluptatibus eligendi dolo
          r illo ipsum. Vel facere qui natus, debitis, ipsam id perspiciatis
          animi non aliquid praesentium quidem odio ratione exercitationem.
          Explicabo mollitia pariatur minus ratione sapiente voluptatibus,
          dolorem odit quaerat ad in, quasi assumenda facilis fugiat. Fuga
          perspiciatis iure sed, a modi odit quia voluptate dolore aperiam
          magni, vero eos tempora nihil quaerat cumque unde.
          Asperiores quisquam quam voluptate minima debitis vel eum aperiam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque voluptatibus mollitia perspiciatis, accusantium soluta
          optio eos tenetur laboriosam ea architecto commodi ad deleniti
          similique, quasi a. Facere, expedita laboriosam, recusandae dicta,
          necessitatibus explicabo eum repellendus voluptatibus eligendi dolo
          r illo ipsum. Vel facere qui natus, debitis, ipsam id perspiciatis
          animi non aliquid praesentium quidem odio ratione exercitationem.
          Explicabo mollitia pariatur minus ratione sapiente voluptatibus,
          dolorem odit quaerat ad in, quasi assumenda facilis fugiat. Fuga
          perspiciatis iure sed, a modi odit quia voluptate dolore aperiam
          magni, vero eos tempora nihil quaerat cumque unde.
          Asperiores quisquam quam voluptate minima debitis vel eum aperiam.
        </p>
      </Box>
    </>
  )
}

export default About
