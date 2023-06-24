import { useState } from "react";
import { alpha } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AuthButton from "./authButton";

const TopNav = ({ drawerWidth, handleDrawerToggle }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["Profile", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor: "white",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
      sx={{
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent: { xs: 'space-between', sm: 'space-between', md: 'flex-end', lg: 'flex-end'}
        
        }}
        >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            color: "neutral.400",
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>

       <AuthButton />
        
        <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Natalie"
                sx={{
                    backgroundColor:'neutral.400'
                }}/>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;