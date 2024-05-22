import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Search from "./Search";

function Homepage() {   
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.SERVER_URL);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response); // assign JSON response to the data variable.
      } catch (error) {
        console.error("Error fetching Employees:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Fortune 500</h1>
      </div>
      <div>
        <h3>Enterprise Directory</h3>
      </div>

      <div>
        <Search setData={setData} />
      </div>
      <div>Kevin Couillard and Suhail Hameed</div>
    </>
  );
}

export default Homepage;
