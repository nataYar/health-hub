import { Button, Stack, Typography } from "@mui/material";
import styles from "./fitness.module.css"

const ExerciseCard = ({ exercise }) => (
  <Stack
  sx={{
    width: { xs: "100%", sm: "300px" },
    display: "flex",
    flexDirection: "column",
    alignItems:"center"
  }}>
    {exercise}
    <img className={styles.exercise_card} src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
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
        {exercise.bodyPart}
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
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ 
        height: "auto",
        fontSize: "20px"
      }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Stack>
);

export default ExerciseCard;
