"use client";
import { useContext, useEffect } from "react";
import DonutChart from "./charts/DonutChart";
import { Box } from "@mui/material";
import LineChart from "./charts/LineChart";
import CaloryWidget from "./Widgets/CaloryWidget";
import WeightWidget from "./Widgets/WeightWidget";
import ExerciseWidget from "./Widgets/ExerciseWidget";
import { UserContext } from "../../context/userProvider";


export default function Dashboard() {
  const { myUser, updateUser } = useContext(UserContext);

  useEffect(() => {
    console.log(myUser)
  }, [myUser])



  return (
    <Box
      sx={{
        width: { sm: "100%", lg: "85%" },
        mx: "auto",
        color: "neutral.800",
        borderRadius: "20px",
      }}
    >
      <Box
        width="100%"
        height="auto"
        sx={{
          mt: "15px",
          gap: "15px",
          width: "auto",
          display: "flex",
          direction: { xs: "column", md: "row" },
          flexWrap: "wrap",
          alignItems: { xs: "center" },
          justifyContent: {
            xs: "center",
            md: "flex-start",
            lg: "space-between",
          },
          mb: "20px",
        }}
      >
        <CaloryWidget />
        <WeightWidget />
        <ExerciseWidget />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ gap: "25px", width: "100%", height: "auto" }}
      >
        <LineChart />
        <DonutChart />
      </Box>
    </Box>
  );
}
