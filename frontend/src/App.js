import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryCard from "./Components/Category/CategoryCard";
import Error from "./Components/Error";
import ExploreCategory from "./Components/Category/ExploreCategory";
import Home from "./Pages/Home";

function App() {
  return (
    <Suspense fallback="<div>loading ...</div>">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
