import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import LandingPage from "../Components/LandingPage/LandingPage";
import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women"
import Kids from "../Pages/Kids"

const LoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<Home />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/jewelery" element={<Kids />}/>
      </Routes>
    </>
  );
};

export default LoginRoutes;
