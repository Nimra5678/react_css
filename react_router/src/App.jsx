import React, {useState, useEffect} from "react";
import "./App.css";
import { ThemeProvider } from "./compnents/Theme";
import IndexRoutes from "./compnents/index";
import Card from "./compnents/Pages/Card";
import ThemeBtn from "./compnents/Pages/Themebtn";



function App() {

 const [themeMode, setThemeMode] = useState("light");

 const lightTheme = () => {
   setThemeMode("light");
 };

 const darkTheme = () => {
   setThemeMode("dark");
 };

 // actual change in theme

 useEffect(() => {
   document.querySelector("html").classList.remove("light", "dark");
   document.querySelector("html").classList.add(themeMode);
 }, [themeMode]);

  return (
    <ThemeProvider>
      <IndexRoutes />
    </ThemeProvider>
  );
}

export default App;
