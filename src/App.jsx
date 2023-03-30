import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./components/styles/Global.styles";
import theme from "./components/styles/Themes.styles";
import { ThemeProvider } from "styled-components";
import { Home, ProductPage, CartPage, SuccessPage, ContactPage, NotFound, AboutPage } from "./pages";
import { useLocalStorageListener } from "./hooks/useLocalStorageListener";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  useLocalStorageListener();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="success" element={<SuccessPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
