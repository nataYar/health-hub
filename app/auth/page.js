"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../context/userProvider";
import { TextField, Button } from "@mui/material";
import awsmobile from "../aws-exports";
import { Card, Paper } from "@mui/material";
import EmailConfirmationForm from "./EmailConfirmationForm";
import PopupModal from "../../components/PopupModal";
import { Auth } from "aws-amplify";
import { getUserFn } from "../utils/userFn";

Auth.configure(awsmobile);

function AuthContainer() {
  const { myUser, updateUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [requiresEmailConfirmation, setRequiresEmailConfirmation] =
    useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = async () => {
    // Check if all required fields are filled
    if (!userEmail || !password || !confirmPassword || !nickname) {
      console.log("Please fill in all required fields");
      return;
    }
    // Check if the password matches the confirmed password
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const { user } = await Auth.signUp({
        username: userEmail,
        password,
        attributes: {
          email: userEmail,
          nickname: nickname,
        },
        autoVerifyEmail: true,
        autoSignIn: {
          enabled: true,
        },
      });

      setRequiresEmailConfirmation(true);
      setEmail(user.username);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn(userEmail, password);
      const registeredUser = await getUserFn(user.attributes.email)
      const { email, nickname, id } = registeredUser;
      updateUser({
        id: id,
        nickname: nickname,
        email: email,
      });

      router.push("./dashboard");
    } catch (error) {
      setIsModalOpen(true);
      console.log("error signing in ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };

  return (
    <Card
      component={Paper}
      sx={{ p: "12px", width: { xs: "100%", md: "280px" } }}
    >
      {requiresEmailConfirmation ? (
        <EmailConfirmationForm email={userEmail} nickname={nickname} />
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Email"
            type="userEmail"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "white",
              height: "auto",
              pb: "15px",
            }}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: "white",
              height: "auto",
              pb: "15px",
            }}
          />

          {isSignUp && (
            <>
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  height: "auto",
                  pb: "15px",
                }}
              />

              <TextField
                label="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  height: "auto",
                  pb: "15px",
                }}
              />
            </>
          )}
          <Button variant="contained" type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Button variant="text" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In instead" : "Create an account"}
          </Button>
        </form>
      )}
      <PopupModal
        text="User is not confirmed"
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Card>
  );
}

export default AuthContainer;
