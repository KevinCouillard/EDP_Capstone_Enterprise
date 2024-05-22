import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search(props) {
    
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value = {props.searchterm}
              onChange = {(e) => props.setSearchterm(e.target.value)}
        
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Search;




// import React, { useState } from 'react';

// const Search = (props) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch(`${import.meta.env.VITE_SOCKS_API_URL}/search`, {
//             method: "POST",
//             body: JSON.stringify({ searchTerm }),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 // Handle the response data
//                 props.setData(data);
//                 console.log(data);
//             })
//             .catch((error) => {
//                 // Handle any errors
//                 console.error(error);
//             });
//     };

//     const handleChange = (e) => {
//         setSearchTerm(e.target.value);
//         console.log(searchTerm);
//     };

//     return (
//         <form className="d-flex" role="search" onSubmit={handleSubmit}>
//             <input className="form-control me-2" type="search"
//                 placeholder="Search" aria-label="Search"
//                 value={searchTerm} onChange={handleChange} />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//     );
// };

// export default Search;