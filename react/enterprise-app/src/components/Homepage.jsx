import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Search from "./Search";
import EmployeeCard from "./EmployeeCard";
import Employee from "./Employee";
import Button from "react-bootstrap/esm/Button";

function Homepage() {   

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const setOpen = () => {
    setIsOpen(true);
  };

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
      <div>
        <h1>Fortune 500</h1>
      </div>
      <div>
        <h3>Enterprise Directory</h3>
      </div>

      <div>
        <Search setData={setData} />
      </div>
      <Button onClick={setOpen}>
        Seht
      </Button>
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {data.map((employee) => (
          <EmployeeCard key={employee.employee_id} data={employee} />
        ))}
      </div>
        <Employee  style={ {display: 'block', position: 'initial'} } isOpen={isOpen} setIsOpen={setIsOpen}></Employee>
      <div>Kevin Couillard and Suhail Hameed</div>
    </>
  );
}

export default Homepage;
