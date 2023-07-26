"use client";
import { useContext, useState, useEffect } from "react";
import DonutChart from "./charts/DonutChart";
import { Box } from "@mui/material";
import LineChart from "./charts/LineChart";
import CaloryWidget from "./Widgets/CaloryWidget";
import WeightWidget from "./Widgets/WeightWidget";
import ExerciseWidget from "./Widgets/ExerciseWidget";
import { UserContext } from "../../context/userProvider";
import dayjs from "dayjs";

export default function Dashboard() {
  const { userLogs} = useContext(UserContext);
  // const [userLogs, setLogsData] = useState([]);
  const [exercisesData, setExercisesArray] = useState([]);
  const currentDate = dayjs().format("YYYY-MM-DD");
  const [weightData, setWeightData] = useState({ 
    lastWeight: null, 
    firstWeight: null});

  useEffect(() => {
    // console.log(exercisesData)
    // console.log(userLogs)
    // console.log(currentDate)

    const lastLoggedWeight = () => {
      for (let i = userLogs.length - 1; i >= 0; i--) {
        const log = userLogs[i];
        if (log.weight !== null) {
          return log.weight;
        }
      }
      return null; // Return null if all logs have null weights
    };
    const firstLoggedWeight = userLogs.reduce((firstWeight, log) => {
      if (firstWeight === null && log.weight !== null) {
        return log.weight;
      }
      // Otherwise, keep the firstWeight unchanged
      return firstWeight;
    }, null);
    const lastWeight = lastLoggedWeight();
    setWeightData({ lastWeight: lastWeight , firstWeight: firstLoggedWeight });
  }, [userLogs, exercisesData])

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
        <WeightWidget weightData={weightData}/>
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
