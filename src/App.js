import React from "react";
import { Route, Routes } from 'react-router-dom';
import ContextProvider from "./context/ContextProvider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage/SignUpPage"

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route element={<Cart />} path="/cart" />
          <Route element={<Login />} path="/sign-in" />
          <Route element={<SignUpPage />} path="sign-up" />
          <Route element={<Home />} path="/" />
        </Routes>
      </ContextProvider>
    </>
  )
};

export default App;
