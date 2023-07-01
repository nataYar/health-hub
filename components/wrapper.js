'use client'
import { Stack } from "@mui/material";

const Wrapper = ({ children }) => {
  return (
    <Stack
    direction='column'

      sx={{
        padding: { xs: "100px 0 0 0", sm: "100px 30px 0px 270px" },
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
