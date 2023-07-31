"use client"
import { useEffect, useContext } from "react";
import { getUserFn } from "./utils/userFn";
import RouteOnLoad from "../components/RouteOnLoad";
import { UserContext } from "./context/userProvider";

export default function Home() {
  const { updateUser } = useContext(UserContext);

    

  return (
    <RouteOnLoad />
  )
}
