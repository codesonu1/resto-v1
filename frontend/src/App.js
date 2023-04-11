import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return RouteManager();
};

export default App;
