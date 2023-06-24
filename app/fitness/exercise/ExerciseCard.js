"use client";
import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import styles from "./fitness.module.css";

const ExerciseCard = ({ exercise }) => {
  const [isLiked, setIsLiked] = useState(exercise.like);

  const handleClick = () => {
    setIsLiked(!isLiked);
    exercise.like = !isLiked;
  };

  return (
    <Stack
      sx={{
        m: "50px",
        position: "relative",
        width: { xs: "100%", sm: "300px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        {exercise.like ? (
        <StarRoundedIcon
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: "0",
            color: "primary.main",
          }}
        ></StarRoundedIcon>
      ) : (
        <StarBorderRoundedIcon
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: "0",
            color: "neutral.500",
          }}
        />
      )}

      {exercise.name}
      {/* <img
        className={styles.exercise_card}
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
      /> */}
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {/* {exercise.bodyPart} */}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {/* {exercise.target} */}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{
          height: "auto",
          fontSize: "20px",
        }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {/* {exercise.name} */}
        {exercise.text}
      </Typography>
    </Stack>
  );
};

export default ExerciseCard;
