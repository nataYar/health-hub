'use client'
import { Stack } from "@mui/material";

const Wrapper = ({ children }) => {
  return (
    <Stack
    direction='column'
      sx={{
        padding: { 
          xs: "90px 20px 20px 20px", 
          md: "120px 30px 0px 300px" },
        display: "flex",
        flexFlow: 'column wrap',
        alignItems: {xs: 'center', sm: 'flex-start'},
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        backgroundColor: 'neutral.100'
      }}
    >
      {children}
    </Stack>
  );
};

export default Wrapper;
