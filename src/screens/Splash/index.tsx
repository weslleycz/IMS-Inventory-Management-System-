import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 500); 

    return () => clearTimeout(timer); 
  }, [navigate]);
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        bgcolor={"#34fc8e"}
      >
        <img width={200} src="./box.png" />
      </Box>
    </>
  );
};
