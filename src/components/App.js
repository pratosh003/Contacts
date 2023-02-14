import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import "./App.css";
import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const LOCAL_STORAGE_KEY = "contact";
  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);  //default state will be the contact list present in the local storage

  const addContactHandler = (con) => {
    setContact([...contact, { id: nanoid(), ...con }]);
  };

  const removeContactHandler = (id) => {
    const newList = contact.filter((con) => {
      return con.id !== id;
    });
    setContact(newList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact])


  return (
    <Router>
      <div><Header/></div>
      <Routes>
        <Route exact path="/add" caseSensitive={false} element={<div><AddContact addContactHandler={addContactHandler} /></div>} />
        <Route exact path="/" caseSensitive={false} element={<div><ContactList contactsList={contact} getContactId={removeContactHandler} /></div>} />
      </Routes>
    </Router>
  );
}
{/* <div><AddContact addContactHandler={addContactHandler} /></div>
        <div><ContactList contactsList={contact} getContactId={removeContactHandler} /></div> */}
export default App;
