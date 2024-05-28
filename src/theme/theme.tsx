"use client";

import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/x-data-grid/locales";

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#34fc8e",
        contrastText: "#FFFFFF",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
    },
  },
  ptBR
);
