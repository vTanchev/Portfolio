import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />

      {/* za ruti */}
      {/* <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
