'use client'

import { createContext, useState, useEffect } from 'react';

// Create the user context
const UserContext = createContext();

// Create the UserContextProvider component
const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null);
  const [testUser, setTestUser] = useState("Eikichi Onizuka");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }
    // Check if window is defined (to avoid errors during server-side rendering)
    if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
      }
  
      // Clean up the event listener on component unmount
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
      };
  }, [])

  // Example function to update the user
  const updateUser = (newUser) => {
    setMyUser(newUser);
  };

  // Value object that will be provided to consuming components
  const contextValue = {
    myUser,
    updateUser,
    testUser,
    setTestUser, 
    screenWidth
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
