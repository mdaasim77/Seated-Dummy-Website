import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import HoverSection from "./components/HoverSection";

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
