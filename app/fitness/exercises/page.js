"use client";
import { useState, useEffect } from "react";

import HorizontalBar from "./HorizontalBar";
import { exerciseOptions, fetchData } from "@/app/utils/exerciseData";
import {
  Stack,
  Box,
  Typography,
} from "@mui/material";
import Exercises from "./Exercises";
import ExercisesNextPagination from "./ExercisesNextPagination"

const RenderExercises = () => {
  const exerciseCount = 200;

  const renderExercises = () => {
    const exercises = [];

    for (let i = 0; i < exerciseCount; i++) {
      exercises.push(<Exercises key={i} />);
    }

    return exercises;
  };

  return <div>{renderExercises()}</div>;
};


const Exercise = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([])

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

  //     setBodyParts(['all', ...bodyPartsData]);
  //   };

  //   fetchExercisesData();
  // }, []);

  return (

      <Stack>
        <Box sx={{ width: "100%" }}>
          {/* <HorizontalBar
            data={bodyParts}
            bodyPart={bodyPart}
            bodyParts={bodyParts}
            setBodyPart={setBodyPart}
          />
          <Exercises bodyPart={"bodyPart"} exercises={exercises} setExercises={setExercises}/> */}
         <Exercises />
         {/* <ExercisesNextPagination /> */}
        </Box>
      </Stack>

  );
};

export default Exercise;

