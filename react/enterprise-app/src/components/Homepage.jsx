import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Search from "./Search";
import EmployeeCard from "./EmployeeCard";
import Employee from "./Modal";
import Button from "react-bootstrap/esm/Button";

function Homepage() {
  const [data, setData] = useState([]);
  const [employeeId, setEmployeeId] = useState();


  //   const saveEmployeeId = (employee) => {
  //     setEmployee(employee);
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees");
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
      <div id="header">
        <h1>Fortune 500</h1>
        <h3>Enterprise Directory</h3>
        <Search setData={setData} />
      </div>
     
      <div
        className="card-container"
        id="cards"
        style={{
          backgroundColor: "orange",
          border: "4mm ridge rgba(211, 220, 50, 0.6)",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {data.map((employee) => (
          <EmployeeCard
            setEmployeeId={setEmployeeId}
            id={employee.employee_id}
            key={employee.employee_id}
            data={employee}
          />
        ))}
      </div>
      <div>Kevin Couillard and Suhail Hameed</div>
    </>
  );
}

export default Homepage;
