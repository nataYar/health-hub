import NextLink from "next/link";
import PropTypes from "prop-types";
import { Box, ButtonBase } from "@mui/material";

const SideNavItem = (props) => {
  const { active = false, disabled, external, icon, path, text, handleDrawerToggle } = props;
 
  const linkProps = path
    ? external
      ? {
          component: "a",
          href: path,
          target: "_blank",
        }
      : {
          component: NextLink,
          href: path,
        }
    : {};

    console.log(text)
  return (
    <>
      
      <ButtonBase
       onClick={handleDrawerToggle}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          }),
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
        {...linkProps}
      >
        {icon ? (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "neutral.400",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && {
                color: "primary.main",
              }),
            }}
          >
            {icon}
          </Box>
        ) : (
          null
        )}
        <Box
          component="span"
         
          sx={{
            // textAlign: icon ? 'left' : 'center',
            ml: icon ? 0 : '55px',
            color: "neutral.400",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && {
              color: "common.white",
            }),
            ...(disabled && {
              color: "neutral.500",
            }),
          }}
        >
          {text}
        </Box>
      </ButtonBase>
    </>
  );
};

export default SideNavItem;
