"use client";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userProvider";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import { Button, Paper, Box, Typography, TextField } from "@mui/material";
import { createUserFn } from "./CreateUserFn";

function EmailConfirmationForm({ nickname, email }) {
  const { myUser, updateUser } = useContext(UserContext);
  const router = useRouter();
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleConfirmationCodeChange = (event) => {
    setConfirmationCode(event.target.value);
  };

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log(currentUser);
      // updateUser(currentUser.attributes);
      // createUserFn(nickname, email);
    } catch (error) {
        console.log(error)
    }
  };


  useEffect(() => {
    if (myUser) {
      router.push("/dashboard");
    }
  }, [myUser]);


  return (
    <Box
      component={Paper}
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "12px",
      }}
    >
      <Typography variant="h4">We Emailed You</Typography>
      <Typography>
        Your code is on the way. To log in, enter the code we emailed to {email}
        . It may take a minute to arrive.
      </Typography>
      <form onSubmit={handleConfirmationSubmit}>
        <TextField
          label="Confirmation Code"
          type="text"
          value={confirmationCode}
          onChange={handleConfirmationCodeChange}
          fullWidth
          sx={{ my: "15px" }}
        />
        <Button type="submit" variant="contained">
          Confirm
        </Button>
      </form>
    </Box>
  );
}

export default EmailConfirmationForm;
