'use client'
import { useContext, useEffect } from "react";
import { UserContext } from '../app/context/userProvider';
import { useRouter } from 'next/navigation';

const RouteOnLoad = () => {
  const { user, updateUser, testUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push('/dashboard');
    } else {
      console.log('hey, Eikichi')
      updateUser(testUser)
    }
  }, []);

  return (
    <></>
  );
};

export default RouteOnLoad;

