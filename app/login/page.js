'use client'
import { useContext } from "react";
import { UserContext } from '../context/userProvider';
import Wrapper from "@/components/Wrapper";

const Login = () => {
    const { user } = useContext(UserContext);

  return (
    <Wrapper>Login</Wrapper>
  )
}

export default Login;