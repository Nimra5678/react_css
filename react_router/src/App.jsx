import React from "react";
import "./App.css";
import { ThemeProvider } from "./compnents/Theme";
import IndexRoutes from "./compnents/index";


function App() {
  return (
    <ThemeProvider>
      <IndexRoutes />
    </ThemeProvider>
  );
}

export default App;
