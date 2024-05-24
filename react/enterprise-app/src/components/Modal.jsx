import EmployeeCard from "./EmployeeCard";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function EmployeeModal(props) {
  const [employee, setEmployee] = useState([]);
  //MAke this page
  const setClose = () => {
    props.setIsOpen(false);
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         console.log(props.data);
  //         const response = await fetch(
  //           `http://localhost:3000/employees/${props.data}`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Data could not be fetched!");
  //         }
  //         const json_response = await response.json();
  //         setEmployee(json_response); // assign JSON response to the data variable.
  //       } catch (error) {
  //         console.error("Error fetching Employees:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <>
      <Modal
        show={props.isOpen}
        onHide={setClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ justifyContent: "center" }}>
          Employee Information:
          <br />
          Phone: {props.data.phone}
          <br />
          Job Role: {props.data.job_role}
          <br />
          Work Location: {props.data.work_location}
          <br />
          Salary: {props.data.salary}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EmployeeModal;
