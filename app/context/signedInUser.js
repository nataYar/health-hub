'use client'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from "../context/userProvider";

const signedInUser = () => {
    const { myUser, updateUser } = useContext(UserContext);

    
}

signedInUser()

export default signedInUser