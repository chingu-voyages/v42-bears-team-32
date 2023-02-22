import React, { lazy, Suspense, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Error from "./Components/Error";
import ProductList from "./Pages/ProductList/ProductList";
import Home from "./Pages/Home";
import SingleProductPage from "./Pages/SingleProductCard/SingleProductPage";
import SharedPages from "./constants/SharedPages";
import OrderDetailsPage from "./Pages/OrderDetailsPage/OrderDetailsPage";
import { noOfCartItems } from "./features/Orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";

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
          <Route path="/food/:id" element={<SingleProductPage />} />
          <Route path="/foods" element={<ProductList />} />
          <Route path="/orderdetails" element={<OrderDetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
