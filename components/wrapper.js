'use client'
import { Box } from "@mui/material";

const Wrapper = ({children}) => {
  return (
    <Box
    sx={{
      padding: { xs: '80px 0 0 0' , md: '100px 0 0 280px' },
      width: '100%',
      minHeight: '100vh',
    }}
  >
    {children}
  </Box>
  )
}

export default Wrapper