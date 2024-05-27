import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box sx={{ height: "100vh", background: "#10BD5D" }}>
            
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ height: "100vh", }}>{children}</Box>
        </Grid>
      </Grid>
    </>
  );
};
