import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Index from "./pages/Index";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import New from "./pages/New";
import Error from "./pages/Error";
import Show from "./pages/Show";
import Footer from "./components/Footer";
import Disclosure from "./pages/Disclosure";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styles" element={<Index />} />
          <Route path="/styles/:id" element={<Show />} />
          <Route path="/styles/:id/edit" element={<Edit />} />
          {/* <Route path="/styles/:id/clients" element={<Clients />} /> */}
          <Route path="/styles/new" element={<New />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Schedule />} />
          <Route path="/terms" element={<Disclosure />} />
          {/* <Route path="/error" element={<Error />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
