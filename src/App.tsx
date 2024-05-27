import { useEffect, useState } from "react";
import "./globals.scss";
import { api } from "./servers/api";
import { Button, Grid, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { AppRouters } from "./Routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouters />
      </ThemeProvider>
    </>
  );
}

export default App;
