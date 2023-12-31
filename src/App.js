// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
