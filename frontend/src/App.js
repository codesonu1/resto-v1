import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component";
import Login from "./screen/auth.screen/login";
import Register from "./screen/auth.screen/signup";
import Dellivery from "./screen/delivery.screen";
import Dashboard from "./dashboard/index";
import ProductScreen from "./screen/product.screen/index";
import ProductDetails from "./screen/product.screen/productDetails";
import Footer from "./component/components/Footer";
const RouteManager = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delivery" element={<Dellivery />} />
        <Route path={`/:name/:_id`} element={<ProductScreen />} />
        <Route path={`product/:name/:_id`} element={<ProductDetails />} />
        <Route
          path="/dashboard"
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const App = () => {
  return RouteManager();
};

const AuthWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(localStorage);
  console.log(token);
  if (token === null) {
    return <Navigate to={"/login"} />;
  }

  return token && children;
};

export default App;
