import {BrowserRouter} from "react-router-dom"

import { AppRoutes } from "./routes";


export const App = () => {
  return (
    <BrowserRouter >
    <div className="App">
    <AppRoutes />
    </div>
    </BrowserRouter>
  );
}

