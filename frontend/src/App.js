import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component";
import Login from "./screen/auth.screen/login";
import Register from "./screen/auth.screen/signup";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return RouteManager();
};

export default App;
