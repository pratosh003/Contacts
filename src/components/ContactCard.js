import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Avatar from 'react-avatar';

const card = (props) => {
  return(
    <ListGroup as="ol">
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <Avatar name={props.contact.name.substring(0,3)} size="150" />
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.contact.name}</div>
            {props.contact.email}
          </div>
          <Button variant="danger" onClick={() => props.clickHandler(props.contact.id)}>Delete</Button>
        </ListGroup.Item>
      </ListGroup>
  )
}

export default card;