"use client";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userProvider";
import { Box, ButtonBase} from "@mui/material";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";
import { guestUser } from "../context/guestUser";

const AuthButton = () => {
  const { myUser, updateUser } = useContext(UserContext);

  const router = useRouter();

  async function signOut() {
    try {
      await Auth.signOut();
      // updateUser(guestUser)
      router.push("/auth") 
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const handleClick = () => {
     router.push("/auth") 
  };

  return (
    <ButtonBase
      onClick={handleClick}
      sx={{
        justifySelf: "right",
        alignItems: "center",
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        pl: "16px",
        pr: "16px",
        py: "6px",
        mr: "16px",
        width: "contain",
      }}
    >
      <Box
        component="span"
        sx={{
          color: "primary.main",
          flexGrow: 1,
          fontFamily: (theme) => theme.typography.fontFamily,
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "24px",
          whiteSpace: "nowrap",
         
        }}
      >
        {  myUser && myUser.id !== 'userId123' ?  "Sign out" : "Log in" }
      </Box>
    </ButtonBase>
  );
};

export default AuthButton;
