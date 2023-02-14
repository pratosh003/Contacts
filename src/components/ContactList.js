import React from 'react';
import ContactCard from './ContactCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const list = (props) => {
  const deleteContactHandler = (id) =>{
    props.getContactId(id);
  };

  const renderContactList = props.contactsList.map((con) => {
    return (
      <ContactCard contact={con} clickHandler={deleteContactHandler} key={con.id}/>
    )
  })

  return (
    <div className="container p-5">
      <h3>Contact List</h3>
      <div className="mb-3" >
        <Link to="/add">
          <Button >+ Add Contact</Button>
        </Link>
        
      </div>
      {renderContactList}
    </div>
  )
}


export default list;