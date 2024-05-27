import { ThemeProvider } from "@mui/material";
import { AppRouters } from "./Routes";
import "./globals.scss";
import { theme } from "./theme/theme";

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
