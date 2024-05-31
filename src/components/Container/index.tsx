import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <Box sx={{ height: "100vh" }}>{children}</Box>
    </>
  );
};
