import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './Components/Error';
import Home from './Pages/Home';
import SingleProductPage from './Pages/SingleProductCard/SingleProductPage';
import SharedPages from './constants/SharedPages';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedPages />}>
          <Route index element={<Home />} />
          <Route path="/singleproduct" element={<SingleProductPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
