import React from "react";
import "./App.css";
import Header from "./Component/Header3/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/main/Main.jsx";
import PgService from "./Pages/Courses.jsx";
import ScrollToTop from "./Scroll.jsx";
import Technology from "./Pages/technology/Technology.jsx";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<PgService />} path="/service" />
        <Route element={<Technology />} path="/technology" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
