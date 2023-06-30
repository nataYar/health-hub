'use client'
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Wrapper from '@/components/Wrapper';
import { UserContext  } from '../context/userProvider';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { Container, Button } from "@mui/material";
Amplify.configure(awsExports);


function AuthContainer({ signOut, user }) {
  const { myUser, updateUser } = useContext(UserContext);
  const router = useRouter();


  useEffect(() => {
    user.username  ? 
    handleUserExists() 
    : null
  }, [user])

  const handleUserExists = () => {
    updateUser(user.attributes.nickname);
    // router.push("./dashboard")
  }

  return (
    <Container>
      <h1>Hello, { myUser}</h1>

      <Button
            variant="contained"
            onClick={signOut}
           
            sx={{ width: "auto"}}
          >
            Sign out
          </Button >
    </Container>
  );
}


export default withAuthenticator(AuthContainer);