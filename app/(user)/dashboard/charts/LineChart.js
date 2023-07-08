"use client";
import { useState, useEffect } from "react";
import { Stack, Typography, useTheme, Box } from "@mui/material";
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
  const [screenWidth, setScreenWidth] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Check if window is defined (to avoid errors during server-side rendering)
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

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
        fill: false,
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

   // xs: 0,
  //       sm: 600,
  //       md: 900,
  //       lg: 1200,
  //       xl: 1440,


  const chartWidth = () => {
    if (weightData.datasets[0].data.length > 5 && screenWidth > 900) {
      return "650px";

    } else if (weightData.datasets[0].data.length < 5 && screenWidth > 900) {
      return "500px";
    }  else if (weightData.datasets[0].data.length > 5 &&  600 < screenWidth < 900) {
      return "400px";
    } 
    else if (weightData.datasets[0].data.length > 5 || weightData.datasets[0].data.length < 5 && screenWidth < 600) {
      return "100%";
    } 
  };

  const weightValues = weightData.datasets[0].data;
  const minWeight = Math.min(...weightValues);
  const maxWeight = Math.max(...weightValues);

  
  return (
    <Stack
    direction='column'
    justifyContent='space-between'

      sx={{
         width: {
          xs: '100%',
          sm: '400px',
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

      <Line data={weightData} width={'auto'} height={"200px"} />

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
