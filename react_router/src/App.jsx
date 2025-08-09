import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./compnents/Navbar";
import Spot from "./compnents/Pages/Spot"
import Market from './compnents/Pages/Market';
import Home from './compnents/Pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Router> */}
        <div className="App">
          <Navbar />
          <Routes>
            {/* Homepage route (Market) */}
            <Route path="/home" element={<Home />} />

            <Route path='/Market' element={<Market />} />

            {/* Spot page */}
            <Route path="/spot" element={<Spot />} />

            {/* You can add more routes below */}
            <Route path="/nio-launch" element={<h1>NIO Launch</h1>} />
            <Route path="/rewards" element={<h1>Rewards Hub</h1>} />
            <Route path="/login" element={<h1>Login Page</h1>} />
            <Route path="/signup" element={<h1>Sign Up Page</h1>} />
          </Routes>
        </div>
      {/* </Router> */}

      {/* <Router>
        <Routes>
          <Navbar />
          <Route path="/spot" element={<Spot />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App
