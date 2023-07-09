import { useState } from "react";
import { Card, Typography, Avatar, Grid, Box, Stack } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { extraColors } from "@/app/theme/colors";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const WeightWidget = () => {
  const [currentWeight, setCurrentWeight] = useState("1978");
  const [prevWeight, setPrevWeight] = useState("189");

  return (
    <Card sx={{ p: "12px", width: "300px", height: "140px" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        width="100%"
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: "2.125rem",
              fontWeight: 500,
              mr: 1,
            }}
          >
            {currentWeight}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: "white",
              color: "extraColors.red",
              mt: 1,
              borderRadius: "50%",
              height: "auto",
              width: " auto",
            }}
          >
            <ShowChartIcon sx={{ height: "30px", width: " 30px" }} />
          </Avatar>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item sx={{ mb: 1.25 }}>
          <Grid container justifyContent="space-between" width="100%">
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: "neutral.500",
                mb: 0.75,
              }}
            >
              Current weight
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ mb: 1.25 }}>
          {prevWeight > currentWeight ? (
            <Stack direction="row" alignItems='center' p='0'>
              <Avatar
                variant="rounded"
                sx={{
                  backgroundColor: "white",
                  color: "extraColors.green",
                  borderRadius: "50%",
                  height:  "20px",
                  width:'auto'
                }}
              >
                <ArrowDownwardOutlinedIcon sx={{ mr: "10px", height:'100%', width:'100%' }} />
              </Avatar>
              <Typography variant="body1" 
               sx={{
                color: "extraColors.green",
                mr:'10px'
              }} >
                {prevWeight - currentWeight} pounds</Typography>
           
              <Typography variant="body2"
               sx={{
                color: "neutral.500",
                mr:'10px'
              }}
              >Since start</Typography>
            </Stack>
          ) : (
            <Stack direction="row" alignItems='center' p='0'>
              <Avatar
                variant="rounded"
                sx={{
                  backgroundColor: "white",
                  color: "extraColors.red",
                  borderRadius: "50%",
                  height:  "20px",
                  width:'auto'
                }}
              >
                <ArrowUpwardOutlinedIcon sx={{ mr: "10px", height:'100%', width:'100%' }} />
              </Avatar>
              <Typography variant="body1" 
               sx={{
                color: "extraColors.red",
                mr:'10px'
              }} >
                { currentWeight - prevWeight} pounds</Typography>
           
              <Typography variant="body2"
               sx={{
                color: "neutral.500",
                mr:'10px'
              }}
              >Since start</Typography>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeightWidget;
