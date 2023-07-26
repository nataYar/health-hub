"use client";
import { useContext, useState, useEffect } from "react";
import DonutChart from "./charts/DonutChart";
import { Box } from "@mui/material";
import LineChart from "./charts/LineChart";
import CaloryWidget from "./Widgets/CaloryWidget";
import WeightWidget from "./Widgets/WeightWidget";
import ExerciseWidget from "./Widgets/ExerciseWidget";
import { UserContext } from "../../context/userProvider";
import { DataStore } from "@aws-amplify/datastore";
import { Exercise } from "../../models";
import { getLogFn, getExerciseFn } from "../../utils/userFn";
import dayjs from "dayjs";

export default function Dashboard() {
  const { myUser, updateUser } = useContext(UserContext);
  const [logsData, setLogsData] = useState([]);
  const [exercisesData, setExercisesArray] = useState([]);
  const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD"));

  const [weightData, setWeightData] = useState({ 
    lastWeight: null, 
    firstWeight: null });


  useEffect(() => {
    console.log(exercisesData)
    console.log(logsData)
    console.log(currentDate)

    const lastLoggedWeight = () => {
      for (let i = logsData.length - 1; i >= 0; i--) {
        const log = logsData[i];
        if (log.weight !== null) {
          return log.weight;
        }
      }
      return null; // Return null if all logs have null weights
    };
    const firstLoggedWeight = logsData.reduce((firstWeight, log) => {
      if (firstWeight === null && log.weight !== null) {
        return log.weight;
      }
      // Otherwise, keep the firstWeight unchanged
      return firstWeight;
    }, null);
    const lastWeight = lastLoggedWeight();
    setWeightData({ lastWeight: lastWeight , firstWeight: firstLoggedWeight });
  }, [logsData, exercisesData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialExercises = await getExerciseFn(myUser.id)
        initialExercises.sort((a, b) => a.date.localeCompare(b.date));
        setExercisesArray(initialExercises);
        const initialLogs = await getLogFn(myUser.id)
        initialLogs.sort((a, b) => a.date.localeCompare(b.date));
        setLogsData(initialLogs);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchData();
    const subscriptionEx = DataStore.observe(Exercise).subscribe((exercise) => {
      if (!exercise || !exercise.element) {
        return;
      }

      const updatedExercise = exercise.element;
      setExercisesArray((prevExercisesArray) => {
        // Find the index of the updated exercise in the array
        const index = prevExercisesArray.findIndex(
          (exercise) => exercise.id === updatedExercise.id
        );

        // Create a new array with the updated exercise
        const updatedArray = [...prevExercisesArray];
        if (index !== -1) {
          updatedArray[index] = updatedExercise;
        } else {
          // If it's a new exercise, add it to the array
          updatedArray.push(updatedExercise);
        }

        // Sort the updatedArray by date
        updatedArray.sort((a, b) => a.date.localeCompare(b.date));

        return updatedArray;
      });
    });

    // const subscriptionLog = DataStore.observe(Log).subscribe((exercise) => {
    //   if (!exercise || !exercise.element) {
    //     return;
    //   }

    //   const updatedExercise = exercise.element;
    //   setExercisesArray((prevExercisesArray) => {
    //     // Find the index of the updated exercise in the array
    //     const index = prevExercisesArray.findIndex(
    //       (exercise) => exercise.id === updatedExercise.id
    //     );

    //     // Create a new array with the updated exercise
    //     const updatedArray = [...prevExercisesArray];
    //     if (index !== -1) {
    //       updatedArray[index] = updatedExercise;
    //     } else {
    //       // If it's a new exercise, add it to the array
    //       updatedArray.push(updatedExercise);
    //     }

    //     // Sort the updatedArray by date
    //     updatedArray.sort((a, b) => a.date.localeCompare(b.date));

    //     return updatedArray;
    //   });
    // });

    return () => {
      subscriptionEx.unsubscribe();
      // subscriptionLog.unsubscribe();
    }
  }, []);

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
