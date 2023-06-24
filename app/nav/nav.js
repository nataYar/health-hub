"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { navItems, topNavItems } from "./navConfiq";
import SideNavItem from "./sideNavItem";
import TopNav from "./topNav";
import {
  Drawer,
  Divider,
  CssBaseline,
  Box,
  List,
  Toolbar,
  Button,
} from "@mui/material";

const drawerWidth = 240;

const Nav = (props) => {
  const pathname = usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "neutral.800",
        color: "common.white",
      }}
    >
      <Toolbar />

      <List>
        {topNavItems.map((item, index) => {
          const active = item.link ? pathname === item.link : false;
          return (
            <div key={index}>
              <SideNavItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={index}
                path={item.link}
                text={item.text}
                handleDrawerToggle={handleDrawerToggle}
              />
            </div>
          );
        })}
      </List>

      <Divider sx={{ borderColor: "neutral.700" }} />

      <List>
        {navItems.map((item, index) => {
          const active = item.link ? pathname === item.link : false;
          return (
            <div key={index}>
              <SideNavItem

                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={index}
                path={item.link}
                text={item.text}
                handleDrawerToggle={handleDrawerToggle}
              />

              <List
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                { item.subItems ? item.subItems.map((el, ind) => (
                <NextLink href={el.link} key={ind}>
                  <Button
                    variant="contained"
                    onClick={handleDrawerToggle}
                    sx={{
                      backgroundColor: "neutral.800",
                      color: "neutral.400",
                      flexGrow: 1,
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {el.text}
                  </Button>
                </NextLink>
                  
                )) :  null}
              </List>
            </div>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        //sm- small screens
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            //xs - extra small screens
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
