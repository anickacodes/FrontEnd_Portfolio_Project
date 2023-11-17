import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Index from './pages/Index';
import NavBar from './components/NavBar';
import About from './pages/About';
import Schedule from './pages/Schedule';

function App() {


  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/styles'  element={<Index/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/book'  element={<Schedule/>}/>
      </Routes>
    </Router>

     
    </>
  )
}

export default App
