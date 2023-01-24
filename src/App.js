import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage/SignUpPage"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignUpPage /> } path="sign-up" />
      </Routes>
    </>
  )
};

export default App;
