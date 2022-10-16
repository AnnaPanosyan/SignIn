import React from "react"
import './App.css';
import LogIn from "./LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
