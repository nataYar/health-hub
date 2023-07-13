'use client'
import { useState } from "react";
import { Card, Typography, Avatar, Grid, Box, Stack } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { extraColors } from "@/app/theme/colors";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const ExerciseWidget = () => {
  return (
    <Card sx={{ p: "12px", height: "140px",
    width: { xs: "100%", md: "280px" }, }}>
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
          {/* {currentWeight} */}
        </Typography>
      </Grid>
      <Grid item>
        <Avatar
          variant="rounded"
          sx={{
            backgroundColor: "white",
            color: "primary.main",
            mt: 1,
            borderRadius: "50%",
            height: "auto",
            width: " auto",
          }}
        >
          <FitnessCenterIcon sx={{ height: "30px", width: " 30px" }} />
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
        {/* {prevWeight > currentWeight ? (
          <Stack direction="row" alignItems='center' p='0'>
            <Avatar
              variant="rounded"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                borderRadius: "50%",
                height:  "20px",
                width:'auto'
              }}
            >
              <ArrowDownwardOutlinedIcon sx={{ mr: "10px", height:'100%', width:'100%' }} />
            </Avatar>
            <Typography variant="body1" 
             sx={{
              color: "primary.main",
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
                color: "primary.main",
                borderRadius: "50%",
                height:  "20px",
                width:'auto'
              }}
            >
              <ArrowUpwardOutlinedIcon sx={{ mr: "10px", height:'100%', width:'100%' }} />
            </Avatar>
            <Typography variant="body1" 
             sx={{
              color: "primary.main",
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
        )} */}
      </Grid>
    </Grid>
  </Card>
  )
}

export default ExerciseWidget