import React from "react";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";

export default function App() {
  return (
    <main>
      <About />
      <Navbar />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}