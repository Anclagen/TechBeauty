import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./context/themes";
import { Home, ProductPage, CartPage, SuccessPage, ContactPage, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
