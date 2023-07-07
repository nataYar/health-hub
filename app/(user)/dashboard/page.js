'use client'
import DonutChart  from "./charts/DonutChart";
import { Box } from "@mui/material";
import LineChart from "./charts/LineChart";

export default function Dashboard() {
 

  return (
    <Box display="flex" flexDirection='row' justifyContent="center" alignItems="flex-start"
    sx={{ gap: '25px', width: '100%', height:'auto'}}
    >
      <LineChart />
      <DonutChart  />
    </Box>
  );
}
