import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Search from "./Search";

function Homepage() {

    return(
        <>
        
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
        
        {/* <div>
            <Search searchterm = {searchterm}
            setSearchterm = {setSearchterm}/>
            
        </div> */}
        <div>
          Kevin Couillard and Suhail Hameed
        </div>
    
        </>
    )    
}

export default Homepage;