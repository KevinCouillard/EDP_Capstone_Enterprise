import React, { useState, useEffect } from "react";
import './App.css'
import Search from './components/Search'
import EmployeePage from "./components/EmployeePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [searchterm, setSearchterm] = useState("")
  return (
    <>
      <Router>
        <div>
          <h1>
            Fortune 500
          </h1>
        </div>
        <div>
          <h3>
            Enterprise Directory
          </h3>
        </div>
      
        <div>
          <Search searchterm = {searchterm}
          setSearchterm = {setSearchterm}/>
          
        </div>
        
        <Routes>
          <Route exact path="/" />
          <Route path="/search" element={<EmployeePage searchterm = {searchterm} />} />
        </Routes>

        <div>
          Kevin Couillard and Suhail Hameed
        </div>
      </Router>
    </>
  )
}

export default App