import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth");
  };
  return (
    <ButtonBase
      onClick={handleLoginClick}
      sx={{
        justifySelf: "right",
        alignItems: "center",
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        pl: "16px",
        pr: "16px",
        py: "6px",
        mr: "16px",
        width: "contain",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          color: "primary.main",
          flexGrow: 1,
          fontFamily: (theme) => theme.typography.fontFamily,
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "24px",
          whiteSpace: "nowrap",
          "&:hover": {
            color: "white",
          },
        }}
      >
        Log in
      </Box>
    </ButtonBase>
  );
};

export default AuthButton;
