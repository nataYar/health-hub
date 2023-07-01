import { Stack } from "@mui/material";
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


const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May", "June", "July", "January", "February", "March",  ],
  datasets: [
    {
      label: "My weight",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50, 80, 81, 56, 55, 80,65, 59, 80, 81, 56, 55, 50],
    },
  ],
};

const LineChart = () => {
  return (
    <Stack sx={{ 
      minWidth:'50%',
width: '600px',
    height:'auto', 
    padding:'20px', 
    backgroundColor:'white',
    borderRadius:'20px',
    }}>
        <Line data={data}
        // width={'100%'} height={'100%'}
         />
    </Stack>

  );
};
export default LineChart;
