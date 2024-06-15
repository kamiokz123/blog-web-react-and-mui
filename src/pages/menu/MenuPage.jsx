import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { foodMenu } from '../../data/Data.js'

const MenuPage = () => {
  console.log("data :", foodMenu);
  return (
    <>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:2,
        justifyContent:"center",
        alignItems:"center",
        py:5,
        px:2
      }}>
        {
          foodMenu.map((item,i) => (
            <Card sx={{ maxWidth: 345 }} key={i}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.discription}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.price} Rs
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </>
  )
}

export default MenuPage
