"use client";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userProvider";
import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AuthButton from "./authButton";
import { useRouter } from "next/navigation";


const TopNav = ({ drawerWidth, handleDrawerToggle }) => {
  const { myUser, updateUser } = useContext(UserContext);
  const router = useRouter();


  useEffect(() => {
    const storedUser = localStorage.getItem('myUser');

    if (storedUser) {
      updateUser(JSON.parse(storedUser));
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem('myUser', JSON.stringify(myUser));
  }, [myUser]);


  const buttonStyles = {
    p: 0,
    backgroundColor: 'primary.main',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
  };

  const typographyStyles = {
    fontSize: '1.5rem',
    color: '#fff',
  };

  const initials = myUser && myUser.nickname  ? myUser.nickname[0].toUpperCase() : <Avatar sx={{ height:"48px", width:"48px"}}/>;



  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: {
            xs: "space-between",
            sm: "space-between",
            md: "flex-end",
            lg: "flex-end",
          },
        }}
      >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            color: "neutral.400",
            mr: 2,
            display: { md: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <AuthButton />

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title={myUser.nickname}>
            <IconButton sx={buttonStyles}>
              <Typography variant="h2" sx={typographyStyles}>
                {initials}
              </Typography>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
