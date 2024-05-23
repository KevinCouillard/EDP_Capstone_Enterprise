import Card from "react-bootstrap/Card";

function EmployeeCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.data.phone}
        </Card.Subtitle>
        <Card.Text>
          Employee Information:
          <br />
          Job Role: {props.data.job_role}
          <br />
          Work Location: {props.data.work_location}
          <br />
          Salary: {props.data.salary}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default EmployeeCard;
