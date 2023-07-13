"use client";
import { useState, useContext} from "react";
// import { UserContext } from "../../../context/userProvider";
import { Stack, Typography, useTheme } from "@mui/material";
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
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement
);

const LineChart = () => {
  // const { screenWidth } = useContext(UserContext);
  const theme = useTheme();
  

  const weightData = {
    labels: [
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",

      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",
      "January",
      "February",

    ],
    datasets: [
      {
        label: "Weight",
        lineTension: 0.1,
        backgroundColor: "#FFF",
        borderColor: theme.palette.primary.main,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#C3C4F9",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#312E81",
        pointHoverBorderColor: "#312E81",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80],
      },
    ],
  };

  const weightValues = weightData.datasets[0].data;
  const minWeight = Math.min(...weightValues);
  const maxWeight = Math.max(...weightValues);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Set display to false to hide the chart legend
      },
    },
  };

  
  return (
    <Stack
    direction='column'
    justifyContent='space-between'
      sx={{
         width: {
          xs: '100%',
          sm: '48%',
          md: '500px',
          lg: '500px'
        } ,
        height: {
          xs: 'auto',
          md: '400px',
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
      <Line options={options} 
      redraw={true} 
      data={weightData} width={'auto'} height={"165px"} />

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
