import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage/SignUpPage"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/sign-in" />
        <Route element={<SignUpPage /> } path="sign-up" />
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  )
};

export default App;
