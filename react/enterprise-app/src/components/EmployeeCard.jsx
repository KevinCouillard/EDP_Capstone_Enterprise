import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";

function EmployeeCard(props) {
  const handleClick = () => {
    props.setEmployeeId(props.id);
    console.log(props.id);
    setOpen();
  };

  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Card id="card">
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.data.job_role}
          </Card.Subtitle>
          {/* <Card.Text>
          Employee Information:
          <br />
          Job Role: {props.data.job_role}
          <br />
          Work Location: {props.data.work_location}
          <br />
          Salary: {props.data.salary}
        </Card.Text> */}
          <div className="d-grid gap-2">
            <Button variant="outline-success" onClick={handleClick}>
              Inspect Employee Information
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        style={{ display: "block", position: "initial" }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={props.data}
      ></Modal>
    </>
  );
}

export default EmployeeCard;
