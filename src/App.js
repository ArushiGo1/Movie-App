import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;

