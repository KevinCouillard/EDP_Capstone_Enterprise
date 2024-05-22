import React, { useState, useEffect } from "react";
import './App.css'
import Search from './components/Search'
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        
        
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/search" element={<EmployeePage />} />
        </Routes>

        
      </Router>
    </>
  )
}

export default App