// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Spot from "./Pages/Spot";
// import Market from "./Pages/Market";
// import Home from "./Pages/Home";
// // import "./App.css";
// import { ThemeProvider } from "./Theme";
// // import IndexRoutes from "./compnents/index";
// import Card from "./Pages/Card";
// import ThemeBtn from "./Pages/Themebtn";

// export default function IndexRoutes() {
  
//    const [themeMode, setThemeMode] = useState("light");
  
//    const lightTheme = () => {
//      setThemeMode("light");
//    };
  
//    const darkTheme = () => {
//      setThemeMode("dark");
//    };
  
//    // actual change in theme
  
//    useEffect(() => {
//      document.querySelector("html").classList.remove("light", "dark");
//      document.querySelector("html").classList.add(themeMode);
//    }, [themeMode]);
  
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/market" element={<Market />} />
//         <Route path="/spot" element={<Spot />} />
//         <Route path="/nio-launch" element={<h1>NIO Launch</h1>} />
//         <Route path="/rewards" element={<h1>Rewards Hub</h1>} />
//         <Route path="/login" element={<h1>Login Page</h1>} />
//         <Route path="/signup" element={<h1>Sign Up Page</h1>} />
//       </Routes>

// <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>
//         </div>
//       </div>
//       <IndexRoutes />
//     </ThemeProvider>

//     </div>
//   );
// }


import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Spot from "./Pages/Spot";
import Market from "./Pages/Market";
import Home from "./Pages/Home";
import { ThemeProvider } from "./Theme";
import Card from "./Pages/Card";
import ThemeBtn from "./Pages/Themebtn";

export default function IndexRoutes() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/spot" element={<Spot />} />
          <Route path="/nio-launch" element={<h1>NIO Launch</h1>} />
          <Route path="/rewards" element={<h1>Rewards Hub</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        </Routes>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

