import {
  Card,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";

import ProgressBar from "./ProgressBar";
import RamenDiningRoundedIcon from "@mui/icons-material/RamenDiningRounded";
import { extraColors } from '@/app/theme/colors';

const CaloryWidget = ({ currentCaloriesGoal, caloriesToday } ) => {
  console.log(currentCaloriesGoal, caloriesToday )
  
  let percentConsumed;
  if (currentCaloriesGoal && caloriesToday) {
    percentConsumed = (caloriesToday / currentCaloriesGoal) * 100;
  }

  return (
    <Card sx={{ p: "12px",  width: { xs: "100%", md: "280px" },  height: "170px"  }}>
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
            {
            currentCaloriesGoal && caloriesToday ?
            currentCaloriesGoal-caloriesToday : null
          }
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: "white",
              color: "extraColors.green",
              mt: 1,
              borderRadius: "50%",
              height:'auto', 
              width:' auto'
            }}
          >
            <RamenDiningRoundedIcon sx={{ height:'30px', width:' 30px'}}/>
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
              Remaining calories 
              <br/>
              for today
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ mb: 1.25 }}>
        <ProgressBar percentage={percentConsumed} />
          </Grid>
          <Typography
            variant="body2"
              sx={{
                fontWeight: 500,
                color: "neutral.500",
                mb: 0.75,
              }}
            >
              <span style={{ color: extraColors.green }}>{caloriesToday}</span> out of <span style={{ color: extraColors.green }}>{currentCaloriesGoal}</span>
            </Typography>
      </Grid>
    </Card>
  );
};

export default CaloryWidget;
