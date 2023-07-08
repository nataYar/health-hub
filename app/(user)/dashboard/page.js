'use client'
import DonutChart  from "./charts/DonutChart";
import {
  Box, 
  Stack,
} from "@mui/material";
import LineChart from "./charts/LineChart";
import TopVidgets from "./TopVidgets";

export default function Dashboard() {
  return (
    <Box display="flex" flexDirection='row'  flexWrap='wrap' justifyContent="space-evenly" alignItems="flex-start"
    sx={{ gap: '25px', width: '100%', height:'auto'}}
    >
      <Stack> 
        <TopVidgets />
      </Stack>
      <LineChart />
      <DonutChart  />
    </Box>
  );
}
