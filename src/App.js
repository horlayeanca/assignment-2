import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Search from "./components/Search";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<profile />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
