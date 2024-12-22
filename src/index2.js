import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
// import Signup from "./Signup";
import Login from "./Login";
import App from "./App";
import ProtectedRoute from "./ProtectedRoute";

const MainApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <App />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  ); 
};

export default MainApp;
