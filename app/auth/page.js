'use client'
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Wrapper from '@/components/Wrapper';
import { UserContext  } from '../context/userProvider';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

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
    router.push("./dashboard")
  }

  return (
    <Wrapper>
      <h1>Hello, { myUser}</h1>

      <button onClick={signOut}>Sign out</button>
    </Wrapper>
  );
}


export default withAuthenticator(AuthContainer);


// try {
//   const { user } = await Auth.signUp({ username, password });
//   console.log(user);
// } catch (error) {
//   console.log('error signing up:', error);
// }