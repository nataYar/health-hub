'use client'

import { createContext, useState } from 'react';

// Create the user context
const UserContext = createContext();

// Create the UserContextProvider component
const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null);
  const [testUser, setTestUser] = useState("Eikichi Onizuka");

  // Define any functions or state values related to the user context here

  // Example function to update the user
  const updateUser = (newUser) => {
    setMyUser(newUser);
  };

  // Value object that will be provided to consuming components
  const contextValue = {
    myUser,
    updateUser,
    testUser,
    setTestUser
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
