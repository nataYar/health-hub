'use client'

import { useState, useEffect} from 'react';
import { Box } from '@mui/material';
import WeightLogger from './WeightLogger';
const Health = () => {

  return (
    <Box sx={{
      width: '100%', 
     display: "flex",
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: {xs: 'center', sm: 'flex-start'},
    }}>
      <WeightLogger />
    </Box>
  )
}

export default Health