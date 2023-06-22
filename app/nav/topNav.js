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

        <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Natalie" src="/static/images/avatar/2.jpg" 
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

// import PropTypes from 'prop-types';

// import {
//   Avatar,

//   Box,
//   IconButton,
//   Stack,
//   SvgIcon,
//   Tooltip,
//   useMediaQuery
// } from '@mui/material';
// import { alpha } from '@mui/material/styles';
// // import { usePopover } from 'src/hooks/use-popover';
// // import { AccountPopover } from './account-popover';

// const SIDE_NAV_WIDTH = 280;
// const TOP_NAV_HEIGHT = 64;

// export const TopNav = (props) => {
//   const { onNavOpen } = props;
//   const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
// //   const accountPopover = usePopover();

//   return (
//     <>
//       <Box
//         component="header"
//         // sx={{ borderColor: "neutral.700" }}
//         sx={{
//           backdropFilter: 'blur(6px)',
//         //   backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
//         backgroundColor: "neutral.700",
//           position: 'sticky',
//           left: {
//             lg: `${SIDE_NAV_WIDTH}px`
//           },
//           top: 0,
//           width: {
//             lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
//           },
//           zIndex: (theme) => theme.zIndex.appBar
//         }}
//       >
//         <Stack
//           alignItems="center"
//           direction="row"
//           justifyContent="space-between"
//           spacing={2}
//           sx={{
//             minHeight: TOP_NAV_HEIGHT,
//             px: 2
//           }}
//         >
//             Stack
//           {/* <Stack
//             alignItems="center"
//             direction="row"
//             spacing={2}
//           >
//             {!lgUp && (
//               <IconButton onClick={onNavOpen}>
//                 <SvgIcon fontSize="small">

//                   menu hamburger icon
//                 </SvgIcon>
//               </IconButton>
//             )}
//           </Stack> */}

//           {/* <Stack
//             alignItems="center"
//             direction="row"
//             spacing={2}
//           >
//             <Tooltip title="Contacts">
//               <IconButton>
//                 <SvgIcon fontSize="small">
//                    user icon
//                 </SvgIcon>
//               </IconButton>
//             </Tooltip>
//           </Stack> */}
//         </Stack>
//       </Box>
//       {/* <AccountPopover
//         anchorEl={accountPopover.anchorRef.current}
//         open={accountPopover.open}
//         onClose={accountPopover.handleClose}
//       /> */}
//     </>
//   );
// };

// TopNav.propTypes = {
//   onNavOpen: PropTypes.func
// };
