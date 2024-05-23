import EmployeeCard from "./EmployeeCard";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";



function Employee(props) {
//MAke this page
    const setClose = () => {
        props.setIsOpen(false);
    };

    return(
        <>
        <h1>
            Employee Information 
        </h1>
        <div>
        Employee id
        </div>
        <div>
        Name
        </div>
        <div>
        Phone
        </div>
        <div>
        Job Role
        </div>
        <div>
        Work Location
        </div>
        <div>
        Salary
        </div>
        </>
    )


        {/* <div className = "modal show" style={ {display: 'block', position: 'initial'} }> */}
        {/* <Modal show={props.isOpen} 
            size="lg" 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >   

            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={setClose}> Close </Button>
            </Modal.Footer>
        </Modal> */}
        {/* </div> */}
        
        
    
}
export default Employee;





{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">        <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Employee Name: {props.data.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        ...
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
    </div>
</div>
</div> */}
