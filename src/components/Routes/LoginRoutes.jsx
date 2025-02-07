import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import LandingPage from "../Components/LandingPage/LandingPage";
import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women"
import Kids from "../Pages/Kids"
import MenDetails from "../Pages/MenDetails";
import WomenDetails from "../Pages/WomenDetails";
import JeweleryDetails from "../Pages/JeweleryDetails";

const LoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<Home />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/men/:menId" element={<MenDetails />} />
        <Route path="/women" element={<Women />}/>
        <Route path="/women/:womenId" element={<WomenDetails />} />
        <Route path="/jewelery" element={<Kids />}/>
        <Route path="/jewelery/:jewId" element={<JeweleryDetails />} />
      </Routes>
    </>
  );
};

export default LoginRoutes;
