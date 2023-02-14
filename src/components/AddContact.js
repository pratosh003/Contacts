import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {
  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const nav = useNavigate();

  const add = (e) => {
    e.preventDefault();
    
    if (state.name === "" || state.email === "") {
      alert("All fields are mandatory!!!");
      return;
    };

    props.addContactHandler(state);
    setState({ name: "", email: "" });
    nav('/');
  }
  

  return (
    <div>
      <div className="container p-5">
        <Form onSubmit={add}>
          <h4>Add Contact</h4>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default AddContact;
