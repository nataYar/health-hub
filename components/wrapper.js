"use client";
import { Box } from "@mui/material";

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        padding: { xs: "100px 0 0 0", sm: "100px 30px 0 270px" },
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        backgroundColor:"neutral.50",
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
