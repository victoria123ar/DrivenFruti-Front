import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/signIn" />
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  )
};

export default App;
