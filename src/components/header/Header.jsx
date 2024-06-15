import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/header.css"

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ display: { xs: "flex", sm: "none" }, width: 200, justifyContent: "center" }} >
      <ul className='mobile-list'>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li><li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li><li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box component={"nav"} sx={{ flexGrow: 1, height: 56 }}>
        <AppBar sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              aria-label="open-drawer"
              sx={{ m: 1, display: { sm: "none" }, color: "white" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component={"div"} color={"goldenrod"} sx={{ flexGrow: 1 }} >
              <FastfoodIcon />
              Kami Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='app-bar-list'>
                <li>
                  <NavLink to={"/"} >Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li><li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li><li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant='temporary' open={openDrawer} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Header
