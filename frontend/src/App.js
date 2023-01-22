import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Error from "./Components/Error";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
