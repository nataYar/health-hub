import { Stack, Typography, useTheme  } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS, 
    LineElement, 
    CategoryScale,//x axis
    LinearScale, // y axis
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement, 
    CategoryScale,//x axis
    LinearScale, // y axis
    PointElement
  )


const LineChart = () => {
  const theme = useTheme();

  const weightData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May", "June", "July", "January", "February", "March",  "January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May", "June", "July", "January", "February", "March","January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May", "June", "July", "January", "February", "March",  "January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May", "June", "July", "January", "February", "March",],
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
        data: [65, 59, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 65, 59, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 65, 59, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 65, 59, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50],
      },
    ],
  };
  const weightValues = weightData.datasets[0].data;
  const minWeight = Math.min(...weightValues);
  const maxWeight = Math.max(...weightValues);

  return (
    <Stack sx={{ 
     width: {xs:'100%', sm: "50%"},
    padding:'20px', 
    backgroundColor:'white',
    borderRadius:'20px',
    }}>
      <Typography variant="h5" sx={{mb:'20px'}}>
        
      <span style={{ color: theme.palette.neutral[400], fontWeight:'normal', fontSize:'12px' }}>max:  </span>  
        {maxWeight}
      <span style={{ color: theme.palette.neutral[400], marginLeft: '10px', fontWeight:'normal', fontSize:'12px' }}>min: </span>
      {minWeight}
      </Typography>
        <Line data={weightData}
        // width={'100%'} height={'100%'}
         />
    </Stack>

  );
};
export default LineChart;
