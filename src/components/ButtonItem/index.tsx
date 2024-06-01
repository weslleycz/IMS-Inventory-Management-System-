"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  text: string;
  icon: ReactNode;
  isActive: boolean;
};

export const ButtonItem = ({ icon, text, isActive,  }: Props) => {
  return (
    <>
      <Box
        borderRight={isActive ? "4px solid #34fc8e" : "4px solid #68e2fd0"}
        sx={{
          borderRightWidth: "4px",
          cursor: "pointer",
          userSelect: "none",
          background: isActive ? "#ffffff" : "none",
          transition: "background-color 0.3s ease",
          "&:hover": {
            color: "#e6e6e6"
          },
        }}
        color={isActive ? "#34fc8e" : "#ffffff"}
        p={1}
        alignItems={"center"}
        display={"flex"}
      >
        {icon}
        <strong style={{ fontWeight: "bold", marginLeft: 8 }}>{text}</strong>
      </Box>
    </>
  );
};
