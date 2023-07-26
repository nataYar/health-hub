'use client'

import { createContext, useState, useEffect } from 'react';
import { DataStore } from "@aws-amplify/datastore";
import { Exercise, Log } from "../models";


// Create the user context
const UserContext = createContext();

// Create the UserContextProvider component
const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState({
    id: '', 
    nickname: '',
    email: '',
    Logs: [],
  });
  const [userLogs, setUserLogs] = useState([])
  const [userExercises, setUserExercises] = useState([])
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if(myUser.id.length > 0) {
      const subscription = DataStore.observeQuery(Log, (p) =>
      p.userID.eq(myUser.id)
    ).subscribe((snapshot) => {
      const { items } = snapshot;

      // Convert the date strings to Date objects for correct sorting
      const sortedItems = items.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setUserLogs(sortedItems);
    });
    return () => subscription.unsubscribe();
    }
  }, [myUser]);

  useEffect(() => {
    if(myUser.id.length > 0) {
      const subscription = DataStore.observeQuery(Exercise, (p) =>
      p.userID.eq(myUser.id)
    ).subscribe((snapshot) => {
      const { items } = snapshot;

      // Convert the date strings to Date objects for correct sorting
      const sortedItems = items.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setUserExercises(sortedItems);
    });
    return () => subscription.unsubscribe();
    }
  }, [myUser]);

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
    screenWidth,
    userLogs,
    userExercises
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
