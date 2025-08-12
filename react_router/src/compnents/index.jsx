import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Spot from "./Pages/Spot";
import Market from "./Pages/Market";
import Home from "./Pages/Home";
import Card from "./Pages/Card";

export default function IndexRoutes() {
  return (
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
    </div>
  );
}
