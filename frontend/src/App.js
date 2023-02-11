import React, { lazy, Suspense, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './Components/Error';
import Home from './Pages/Home';
import SingleProductPage from './Pages/SingleProductCard/SingleProductPage';
import SharedPages from './constants/SharedPages';
import OrderDetailsPage from './Pages/OrderDetailsPage/OrderDetailsPage';
import { noOfCartItems } from './features/Orders/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { orderItems } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(noOfCartItems());
  }, [orderItems]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedPages />}>
          <Route index element={<Home />} />
          <Route path="/singleproduct" element={<SingleProductPage />} />
          <Route path="/orderdetails" element={<OrderDetailsPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
