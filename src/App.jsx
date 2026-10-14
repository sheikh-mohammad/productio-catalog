import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <div>
        <h1>Productio Catalog</h1>
      </div>

      <div className="links" style={{ display: "flex", gap: 10 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>

      <br />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
