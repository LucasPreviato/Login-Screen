import { ThemeProvider } from "@mui/material";
import {BrowserRouter} from "react-router-dom"

import { AppRoutes } from "./routes";


export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>

    <BrowserRouter >
    <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  );
}

