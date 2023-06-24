'use client'
import { useContext, useState } from "react";
import { UserContext } from '../context/userProvider';
import { TextField, Button, Container, Grid } from '@mui/material';
import Wrapper from "@/components/Wrapper";

const Login = () => {
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignIn = () => {
      // Handle sign-in logic
    };
  
    const handleSignUp = () => {
      // Handle sign-up logic
    };

  return (
    <Wrapper>
      <Container>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSignIn}>
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSignUp}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </Wrapper>
  )
}

export default Login;