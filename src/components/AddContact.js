import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddContact extends React.Component {
  state = {
    name: "",
    email: ""
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All fields are mandatory!!!");
    };

    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""});
    return;
  }


  render() {
    return (
      <div>
        <div className = "container p-5">
          <Form onSubmit = {this.add}>
            <h4>Add Contact</h4>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" value = {this.state.name} onChange = {(e) => this.setState({name: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value = {this.state.email} onChange = {(e) => this.setState({email: e.target.value})}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default AddContact;