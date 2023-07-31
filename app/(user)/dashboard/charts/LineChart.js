"use client";

import { Stack, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement
);

const LineChart = ({ logs }) => {
  const theme = useTheme();
  let labelArray ;
  let weightArray;
  let maxWeight;
  let minWeight;
  // Create an array to store weight values
  if(logs){
    labelArray = logs
    .map((log) => {
      if (typeof log.weight === 'number') {
        // Only include the date if a weight is logged
        return dayjs(log.date).format('MMMM D');
      }
      return null; // If there's no weight, return null
    })
    .filter((date) => date !== null); 
    weightArray = logs.map((log) => log.weight).filter((num) => typeof num === 'number');;
    minWeight = Math.min(...weightArray);
    maxWeight = Math.max(...weightArray);
  }

  console.log(weightArray)


  const weightData = {
    labels: labelArray, //feed it data
    datasets: [
      {
        label: "Weight",
        tension: 0.4,
        backgroundColor: "transparent",
        borderColor: theme.palette.primary.main,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        data: weightArray, //feed it data
      },
    ],
  };
 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{
        width: {
          xs: "100%",
          sm: "48%",
          md: "500px",
          lg: "500px",
        },
        height: {
          xs: "auto",
          md: "400px",
        },
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: "20px",
        }}
      >
        Weight
      </Typography>
      <Line
        options={options}
        redraw={true}
        data={weightData}
        width={"auto"}
        height={"165px"}
      />

      <Typography variant="h5" sx={{ mt: "20px" }}>
        <span
          style={{
            color: theme.palette.neutral[400],
            fontWeight: "normal",
            fontSize: "12px",
          }}
        >
          max:{" "}
        </span>
        {maxWeight}
        <span
          style={{
            color: theme.palette.neutral[400],
            marginLeft: "10px",
            fontWeight: "normal",
            fontSize: "12px",
          }}
        >
          min:{" "}
        </span>
        {minWeight}
      </Typography>
    </Stack>
  );
};
export default LineChart;
